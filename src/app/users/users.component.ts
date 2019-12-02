// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss']
// })
// export class UsersComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this._http.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  delete(id: string) {
    this._http.deleteUser(id).subscribe(data => {
      this.list();
    })
  }


}
