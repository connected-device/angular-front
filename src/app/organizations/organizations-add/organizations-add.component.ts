import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OrganizationsService } from "../organizations-services/organizations.service";
import { OrganizationValidators } from "../organizations-valitators/organizations-validator";
import { environment } from "./../../../environments/environment";

@Component({
  selector: "app-organizations-add",
  templateUrl: "./organizations-add.component.html",
  styleUrls: ["./organizations-add.component.scss"]
})
export class OrganizationsAddComponent {
  public form: FormGroup;

  constructor(
    // private auth: AuthService,
    private router: Router,
    private organizationService: OrganizationsService,
    private service: OrganizationValidators
  ) {
    this.form = new FormGroup(
      {
        organizationId: new FormControl(
          null,
          Validators.required,
          this.service.organizationValidator()
        ),
        password: new FormControl(
          environment.devInputString,
          Validators.required
        ),
        organizationName: new FormControl(
          environment.devInputString,
          Validators.required
        ),
        group: new FormControl(environment.devInputString, Validators.required),
        role: new FormControl(environment.devInputString, Validators.required)
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
    // Process checkout data here
    this.organizationService.postOrganizations(data).subscribe(() => {
      this.router.navigate(["/organizations-list"]);
    });
  }
}
