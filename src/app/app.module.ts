import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    NavbarComponent
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
