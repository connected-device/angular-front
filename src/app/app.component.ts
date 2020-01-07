import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OrganizationsService } from "./organizations/organizations-services/organizations.service";
// import { GroupsService } from './groups/groups-services/groups.service';
import { IOrganization } from "./organizations/organizations-entity/organizations";
import { AppService } from "./app.service";
import { timer } from "rxjs";
import { take, filter } from "rxjs/operators";
import { IGroup } from "./groups/groups-entity/group";
import { GroupsService } from "./groups/groups-services/groups.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  organizations: IOrganization[];
  organizationId: string;
  schedulesGroupId: string;
  contentsGroupId: string;
  schedulesGroups: any;
  contentsGroups: IGroup[];
  public form: FormGroup;
  // title = 'angular-client';

  constructor(
    private router: Router,
    private organizationService: OrganizationsService,
    private groupService: GroupsService,
    private appService: AppService
  ) {
    this.form = new FormGroup(
      {
        organization: new FormControl(null)
      },
      { updateOn: "change" }
    );

    // this.appService.organizationId.subscribe(id => {
    //     this.organizationId = id;
    //     this.groupService
    //         .getGroups(this.organizationId)
    //         .subscribe(data => {
    //             console.log('data 1', data);
    //             this.schedulesGroups = data;
    //         });

    // });

    this.appService.organizationId.subscribe(id => {
      this.organizationId = id;
      this.groupService.getGroups(this.organizationId).subscribe(data => {
        this.schedulesGroups = data.filter(d => d.type === "schedules");
        this.schedulesGroupId = localStorage.getItem("schedulesGroupId");
        let id: string;
        console.log("groupService.getGroups0", this.schedulesGroupId);
        if (this.schedulesGroupId) {
          id = this.schedulesGroupId;
          console.log("groupService.getGroups1", id);
        } else if (this.schedulesGroups.length) {
          id = this.schedulesGroups[0]._id;
          console.log("groupService.getGroups2", id);
        }
        console.log("groupService.getGroups3", id);
        this.appService.setSchedulesGroupId(id);
        // localStorage.setItem("schedulesGroupId", id);

        this.contentsGroups = data.filter(d => d.type === "contents");
      });
    });

    this.organizationService.getOrganizations().subscribe(data => {
      this.appService.setOgranizations(data);
      this.appService.organizations.subscribe(list => {
        this.organizations = list;

        const index: number = this.organizationId
          ? this.organizations.findIndex(x => x._id === this.organizationId)
          : 0;
        this.form.controls.organization.patchValue(this.organizations[index]);
        this.appService.setOrganizationId(this.organizations[index]._id);
        this.router.navigateByUrl("/groups-list?type=schedules");
      });
    });
  }

  ngOnInit(): void {}

  onChange(event) {
    const organization = this.form.controls.organization.value;
    this.appService.setOrganizationId(organization._id);
  }
}
