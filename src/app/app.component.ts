import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OrganizationsService } from "./organizations/organizations-services/organizations.service";
import { IOrganization } from "./organizations/organizations-entity/organizations";
import { AppService } from "./app.service";
import { timer } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  organizations: IOrganization[];
  constructor(
    private router: Router,
    private organizationService: OrganizationsService,
    private appService: AppService
  ) {
    appService.organizationId = "aa";
    this.form = new FormGroup(
      {
        organization: new FormControl(null)
      },
      { updateOn: "change" }
    ); // blur, change, submit

    this.organizationService.getOrganizations().subscribe(data => {
      this.organizations = data;
      const index: number = this.organizations.findIndex(
        x => x.organizationId === appService.organizationId
      );

      this.form.controls.organization.patchValue(this.organizations[index]);
    });
  }

  public form: FormGroup;
  title = "angular-client";

  ngOnInit(): void {
    // this.router.navigateByUrl("/users-edit/5dee52d07f7dc47a3a48f41e");
    this.router.navigateByUrl("/users-list");

    // timer(3000000, 2000)
    //   .subscribe(x => {
    //     if (x % 3 == 0) {
    //       console.log('timer: ' + x);
    //       this.router.navigateByUrl('/');
    //     } else if (x % 3 == 1) {
    //       console.log('timer: ' + x);
    //       this.router.navigateByUrl('/list');
    //     } else {
    //       console.log('timer: ' + x);
    //       this.router.navigateByUrl('/users');
    //     }
    //   })

    // this.list();
  }

  // list() {
  //   this.organizationService.getOrganizations().subscribe(data => {
  //     this.organizations = data;
  //     // this.form.controls.orders.patchValue(this.orders[0].id);
  //     this.form.controls.organization.patchValue(this.organizations[2]);
  //   });
  // }
}
