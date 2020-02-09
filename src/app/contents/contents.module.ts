import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentsComponent } from "./contents.component";
import { ContentsAddComponent } from "./contents-add/contents-add.component";
import { ContentsListComponent } from "./contents-list/contents-list.component";
import { ContentsEditComponent } from "./contents-edit/contents-edit.component";
import { OrganizationsModule } from "../organizations/organizations.module";
import { SidebarModule } from "../sidebar/sidebar.module";

@NgModule({
  declarations: [
    ContentsComponent,
    ContentsAddComponent,
    ContentsListComponent,
    ContentsEditComponent
  ],
  imports: [CommonModule, OrganizationsModule, SidebarModule]
})
export class ContentsModule {}
