import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users: Object;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  delete(id: string) {
    this.userService.deleteUser(id).subscribe(data => {
      this.list();
    });
  }
}
