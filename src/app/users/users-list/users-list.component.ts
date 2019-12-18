import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users-services/users.service";
import { UserPreferencesService } from "../../user-preferences.service";

@Component({
  selector: "app-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users: Object;

  constructor(
    private userService: UsersService,
    private userPreferenceService: UserPreferencesService
  ) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  delete(id: string) {
    if (confirm("Are you sure to delete ?")) {
      this.userService.deleteUser(id).subscribe(data => {
        this.list();
      });
    }
  }

  get colour(): string {
    return this.userPreferenceService.colourPreference;
  }
  set colour(value: string) {
    this.userPreferenceService.colourPreference = value;
  }

  /**
 

clickMethod(name: string) {
  if(confirm("Are you sure to delete "+name)) {
    console.log("Implement delete functionality here");
  }
}

  */
}
