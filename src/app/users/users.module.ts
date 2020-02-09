import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersAddComponent } from "./users-add/users-add.component";
import { UsersEditComponent } from "./users-edit/users-edit.component";
import { UsersComponent } from "./users.component";
import { SidebarModule } from "../sidebar/sidebar.module";

@NgModule({
  declarations: [
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersComponent
  ],
  // imports: [CommonModule]
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule
  ]
  // exports: [RouterModule]
})
export class UsersModule {}
