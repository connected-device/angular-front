import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  schedulesGroupId: string;
  contentsGroupId: string;
  isLogedIn: boolean;
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router
  ) {
    appService.schedulesGroupId.subscribe(id => (this.schedulesGroupId = id));
    appService.contentsGroupId.subscribe(id => (this.contentsGroupId = id));
  }

  ngOnInit() {
    //this.authService.isLoggedIn
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
