import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Page404Component } from "./page404/page404.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { UsersModule } from "./users/users.module";
import { GroupsModule } from "./groups/groups.module";
import { OrganizationsModule } from "./organizations/organizations.module";
import { SchedulesModule } from "./schedules/schedules.module";
import { ContentsModule } from "./contents/contents.module";

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
    GroupsModule,
    OrganizationsModule,
    SchedulesModule,
    ContentsModule,
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
