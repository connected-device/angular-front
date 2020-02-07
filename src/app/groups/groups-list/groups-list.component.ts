import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GroupsService } from "../groups-services/groups.service";
import { AppService } from "../../app.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-groups-list",
  templateUrl: "./groups-list.component.html",
  styleUrls: ["./groups-list.component.scss"]
})
export class GroupsListComponent implements OnInit, OnDestroy {
  groups: object;
  organizationId: string;
  private subscriptions = new Subscription();
  type: string;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupsService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.appService.organizationId.subscribe(id => {
        this.organizationId = id;
        this.list();
      })
    );

    this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.type = params.type;
      console.log(params.type);
      this.list();
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  list() {
    this.groupService.getGroups(this.organizationId).subscribe(data => {
      // this.groups = data;
      this.groups = data.filter(d => d.type === this.type);
    });
  }

  delete(id: string) {
    if (confirm("Are you sure to delete ?")) {
      this.groupService.deleteGroup(id).subscribe(data => {
        this.list();
      });
    }
  }

  //   get organizationId(): string {
  //     console.log('organizationId called');
  //     // this.list();
  //     return this.appService.organizationId;
  //   }
}
