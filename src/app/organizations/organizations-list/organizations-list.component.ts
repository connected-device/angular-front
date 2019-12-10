import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../users/users-services/users.service";

@Component({
  selector: "app-organizations-list",
  templateUrl: "./organizations-list.component.html",
  styleUrls: ["./organizations-list.component.scss"]
})
export class OrganizationsListComponent implements OnInit {
  users: Object;

  constructor(private _http: UsersService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this._http.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  delete(id: string) {
    this._http.deleteUser(id).subscribe(data => {
      this.list();
    });
  }
}
