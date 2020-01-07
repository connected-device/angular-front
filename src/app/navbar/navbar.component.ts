import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  schedulesGroupId: string;
  contentsGroupId: string;
  constructor(private appService: AppService) {
    appService.schedulesGroupId.subscribe(id => (this.schedulesGroupId = id));
    appService.contentsGroupId.subscribe(id => (this.contentsGroupId = id));
  }

  ngOnInit() {
    // localStorage.setItem("schedulesGroupId", "33333");
    // this.appService.setSchedulesGroupId(
    //   localStorage.getItem("schedulesGroupId")
    // );
  }
}
