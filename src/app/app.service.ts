import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IOrganization } from "./organizations/organizations-entity/organizations";
import { IGroup } from "./groups/groups-entity/group";

@Injectable({
  providedIn: "root"
})
export class AppService {
  public userRole = "admin"; // admin, user,
  organizationId: BehaviorSubject<string>;
  schedulesGroupId: BehaviorSubject<string>;
  contentsGroupId: BehaviorSubject<string>;
  organizations: BehaviorSubject<IOrganization[]>;
  organization: BehaviorSubject<IOrganization>;
  schedulesGroups: BehaviorSubject<IGroup[]>;
  contentsGroups: BehaviorSubject<IGroup[]>;

  constructor() {
    this.organizationId = new BehaviorSubject("");
    this.organization = new BehaviorSubject(null);
    this.organizations = new BehaviorSubject([]);
    this.schedulesGroupId = new BehaviorSubject("");
    this.contentsGroupId = new BehaviorSubject("");
    this.schedulesGroups = new BehaviorSubject([]);
    this.contentsGroups = new BehaviorSubject([]);
  }
  setOrganizationId(id) {
    this.organizationId.next(id);
  }
  setOgranization(organization) {
    this.organization.next(organization);
  }
  setOgranizations(list) {
    this.organizations.next(list);
  }
  setSchedulesGroupId(id) {
    this.schedulesGroupId.next(id);
  }
  setContentsGroupId(id) {
    this.contentsGroupId.next(id);
  }
  setSchedulesGroups(list) {
    this.schedulesGroups.next(list);
  }
  setContentsGroups(list) {
    this.contentsGroups.next(list);
  }
}
