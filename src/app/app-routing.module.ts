import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersAddComponent } from "./users/users-add/users-add.component";
import { OrganizationsListComponent } from "./organizations/organizations-list/organizations-list.component";
import { OrganizationsAddComponent } from "./organizations/organizations-add/organizations-add.component";

const routes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "users-list", component: UsersListComponent },
  { path: "users-add", component: UsersAddComponent },
  { path: "organizations-list", component: OrganizationsListComponent },
  { path: "organizations-add", component: OrganizationsAddComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
