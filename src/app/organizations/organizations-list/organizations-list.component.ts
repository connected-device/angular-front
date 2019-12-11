import { Component, OnInit } from "@angular/core";
import { OrganizationsService } from "../organizations-services/organizations.service";

@Component({
  selector: "app-list",
  templateUrl: "./organizations-list.component.html",
  styleUrls: ["./organizations-list.component.scss"]
})
export class OrganizationsListComponent implements OnInit {
  organizations: Object;

  constructor(private organizationService: OrganizationsService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.organizationService.getOrganizations().subscribe(data => {
      this.organizations = data;
    });
  }

  delete(id: string) {
    if (confirm("Are you sure to delete ?")) {
      this.organizationService.deleteOrganization(id).subscribe(data => {
        this.list();
      });
    }
  }
  /**
 

clickMethod(name: string) {
  if(confirm("Are you sure to delete "+name)) {
    console.log("Implement delete functionality here");
  }
}

  */
}
