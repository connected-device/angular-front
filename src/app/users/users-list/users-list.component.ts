import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users-services/users.service";

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
    if (confirm("Are you sure to delete ?")) {
      this.userService.deleteUser(id).subscribe(data => {
        this.list();
      });
    }
  }
  /**
 

clickMethod(name: string) {
  if(confirm("Are you sure to delete "+name)) {
    console.log("Implement delete functionality here");
  }
}

  */
}
