import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersAddComponent } from "./users/users-add/users-add.component";
import { UsersEditComponent } from "./users/users-edit/users-edit.component";
import { OrganizationsListComponent } from "./organizations/organizations-list/organizations-list.component";
import { OrganizationsAddComponent } from "./organizations/organizations-add/organizations-add.component";
import { OrganizationsEditComponent } from "./organizations/organizations-edit/organizations-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersAddComponent,
    OrganizationsListComponent,
    OrganizationsAddComponent,
    OrganizationsEditComponent,
    UsersEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
