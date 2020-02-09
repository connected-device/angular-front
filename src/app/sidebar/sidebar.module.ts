import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import { OrganizationsModule } from "../organizations/organizations.module";
import { GroupsModule } from "../groups/groups.module";

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, OrganizationsModule, GroupsModule],
  exports: [SidebarComponent]
})
export class SidebarModule {}
