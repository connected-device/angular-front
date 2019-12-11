import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OrganizationsService } from "../organizations-services/organizations.service";
import { OrganizationValidators } from "../organizations-valitators/organizations-validator";
import { environment } from "./../../../environments/environment";
// import { ConsoleReporter } from "jasmine";
// import { ActivatedRoute } from "@angular/router";
// constructor(private route: ActivatedRoute) { }
@Component({
  selector: "app-organizations-edit",
  templateUrl: "./organizations-edit.component.html",
  styleUrls: ["./organizations-edit.component.scss"]
})
export class OrganizationsEditComponent implements OnInit {
  public form: FormGroup;
  _id: string;

  constructor(
    // private auth: AuthService,
    private router: Router,
    private organizationService: OrganizationsService,
    private service: OrganizationValidators,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup(
      {
        _id: new FormControl("", Validators.required),
        organizationId: new FormControl(
          null
          // Validators.required,
          // this.service.organizationValidator()
        ),
        password: new FormControl("", Validators.required),
        organizationName: new FormControl("", Validators.required),
        group: new FormControl("", Validators.required),
        role: new FormControl("", Validators.required)
      },
      { updateOn: "change" }
    ); // blur, change, submit
  }

  get organizationId() {
    return this.form.get("organizationId");
  }

  get organizationName() {
    return this.form.get("organizationName");
  }

  get password() {
    return this.form.get("password");
  }

  onSubmit(data) {
    // console.log(data);

    this.organizationService.putOrganizations(data._id, data).subscribe(() => {
      this.router.navigate(["/organizations-list"]);
    });
  }

  ngOnInit(): void {
    // this._id = this.route.snapshot.paramMap.get("_id");
    // console.log("this._id : ", this._id);
    // this.organizationService.getOrganization(this._id).subscribe(res => {
    //   // this.router.navigate(["/organizations-list"]);
    //   console.log("res: ", res);
    // });
    // this.organizationService.getOrganizations().subscribe(() => {
    //   // this.router.navigate(["/organizations-list"]);
    // });

    this._id = this.route.snapshot.paramMap.get("_id");
    console.log("this._id : ", this._id);
    this.organizationService.getOrganization(this._id).subscribe(res => {
      // this.router.navigate(["/organizations-list"]);
      console.log("res: ", res);
      this.form.patchValue({
        _id: res._id,
        organizationId: res.organizationId,
        password: res.password,
        organizationName: res.organizationName,
        group: res.group,
        role: res.role
      });
    });
  }
}
