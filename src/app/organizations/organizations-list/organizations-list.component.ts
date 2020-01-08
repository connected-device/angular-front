import { Component, OnInit } from "@angular/core";
import { OrganizationsService } from "../organizations-services/organizations.service";
import { IOrganization } from "../organizations-entity/organizations";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-list",
  templateUrl: "./organizations-list.component.html",
  styleUrls: ["./organizations-list.component.scss"]
})
export class OrganizationsListComponent implements OnInit {
  organizations: IOrganization[];
  selectedOrganization: IOrganization;

  constructor(
    private appService: AppService,
    private organizationService: OrganizationsService
  ) {}

  ngOnInit() {
    this.list();
  }

  select(organization: IOrganization) {
    console.log(organization);
    this.appService.setOgranization(organization);
    this.selectedOrganization = organization;
  }

  list() {
    this.organizationService.getOrganizations().subscribe(data => {
      this.organizations = data;
      this.appService.setOgranizations(data);
    });
  }

  delete(id: string) {
    if (confirm("Are you sure to delete ?")) {
      this.organizationService.deleteOrganization(id).subscribe(data => {
        this.list();
      });
    }
  }
}
