import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { UsersModule } from "./users/users.module";
// import { UsersListComponent } from "./users/users-list/users-list.component";
// import { UsersAddComponent } from "./users/users-add/users-add.component";
// import { UsersEditComponent } from "./users/users-edit/users-edit.component";

import { OrganizationsModule } from "./organizations/organizations.module";
// import { OrganizationsListComponent } from "./organizations/organizations-list/organizations-list.component";
// import { OrganizationsAddComponent } from "./organizations/organizations-add/organizations-add.component";
// import { OrganizationsEditComponent } from "./organizations/organizations-edit/organizations-edit.component";
import { Page404Component } from "./page404/page404.component";

@NgModule({
  declarations: [
    AppComponent,
    Page404Component
    // UsersListComponent,
    // UsersAddComponent,
    // UsersEditComponent,
    // OrganizationsListComponent,
    // OrganizationsAddComponent,
    // OrganizationsEditComponent
  ],
  imports: [
    UsersModule,
    OrganizationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
