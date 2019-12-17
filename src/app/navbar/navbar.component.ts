import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  organizationId = "";
  constructor(private appService: AppService) {
    this.organizationId = appService.organizationId;
  }

  ngOnInit() {}
}
