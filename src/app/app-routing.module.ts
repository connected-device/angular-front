import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GroupsListComponent } from "./groups/groups-list/groups-list.component";
import { GroupsAddComponent } from "./groups/groups-add/groups-add.component";
import { GroupsEditComponent } from "./groups/groups-edit/groups-edit.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersAddComponent } from "./users/users-add/users-add.component";
import { UsersEditComponent } from "./users/users-edit/users-edit.component";
import { OrganizationsListComponent } from "./organizations/organizations-list/organizations-list.component";
import { OrganizationsAddComponent } from "./organizations/organizations-add/organizations-add.component";
import { OrganizationsEditComponent } from "./organizations/organizations-edit/organizations-edit.component";
import { Page404Component } from "./page404/page404.component";
import { SchedulesComponent } from "./schedules/schedules.component";
import { ContentsComponent } from "./contents/contents.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", pathMatch: "full", redirectTo: "login" },
  {
    path: "customers",
    loadChildren: "../app/customers/customers.module#CustomersModule"
  },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "groups-list", component: GroupsListComponent },
  { path: "groups-add", component: GroupsAddComponent },
  { path: "groups-edit/:_id", component: GroupsEditComponent },
  { path: "users-list", component: UsersListComponent },
  { path: "users-add", component: UsersAddComponent },
  { path: "users-edit/:_id", component: UsersEditComponent },
  { path: "organizations-list", component: OrganizationsListComponent },
  { path: "organizations-add", component: OrganizationsAddComponent },
  { path: "organizations-edit/:_id", component: OrganizationsEditComponent },
  { path: "schedules/:_id", component: SchedulesComponent },
  { path: "contents/:_id", component: ContentsComponent },
  { path: "", redirectTo: "users-list", pathMatch: "full" },
  { path: "**", component: Page404Component }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
