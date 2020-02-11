import { Component, OnInit } from "@angular/core";
import { OrganizationsService } from "../../_services";
import { Organization } from "src/app/_models";

@Component({
  selector: "app-organizations-selector",
  templateUrl: "./organizations-selector.component.html",
  styleUrls: ["./organizations-selector.component.scss"]
})
export class OrganizationsSelectorComponent implements OnInit {
  organizations: Organization[];
  selectedOrganization: Organization;

  constructor(private organizationsService: OrganizationsService) {}

  ngOnInit() {
    this.organizationsService.getOrganizations().subscribe(data => {
      this.organizations = data;
    });

    this.organizationsService.selectedOrganization.subscribe(organization => {
      this.selectedOrganization = organization;
    });
  }

  onOptionSelected(organization: Organization) {
    this.selectedOrganization = organization;
    this.organizationsService.updatedOrganizationSelection(organization);
  }
}
