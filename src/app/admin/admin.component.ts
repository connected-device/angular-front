import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { User } from "../users/users-entity/user";
import { UsersService } from "../users/users-services/users.service";

// import { User } from '../_models';
// import { UserService } from '../_services';

@Component({ templateUrl: "admin.component.html" })
export class AdminComponent implements OnInit {
  loading = false;
  users: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll("5df04015caaaac3f3080eb88")
      .pipe(first())
      .subscribe(users => {
        this.loading = false;
        this.users = users;
      });
  }
}
