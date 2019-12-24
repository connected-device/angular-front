import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users-services/users.service";
import { AppService } from "../../app.service";

@Component({
  selector: "app-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users: Object;

  constructor(
    private userService: UsersService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.list();
  }

  list() {
    // this.userService.getUsers().subscribe(data => {
    //   this.users = data;
    // });
    this.userService
      .getUsers(this.appService.organizationId)
      .subscribe(data => {
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

  get organizationId(): string {
    console.log("organizationId called");
    // this.list();
    return this.appService.organizationId;
  }
}
