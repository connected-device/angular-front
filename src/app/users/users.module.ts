import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersAddComponent } from "./users-add/users-add.component";
import { UsersEditComponent } from "./users-edit/users-edit.component";

@NgModule({
  declarations: [UsersListComponent, UsersAddComponent, UsersEditComponent],
  // imports: [CommonModule]
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class UsersModule {}
