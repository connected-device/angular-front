import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IOrganization } from './organizations/organizations-entity/organizations';
import { IGroup } from './groups/groups-entity/group';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public userRole = 'admin'; // admin, user,
    organizationId: BehaviorSubject<string>;
    organizations: BehaviorSubject<IOrganization[]>;
    schedulesGroups: BehaviorSubject<IGroup[]>;
    contentsGroups: BehaviorSubject<IGroup[]>;

    constructor() {
        this.organizationId = new BehaviorSubject('');
        this.organizations = new BehaviorSubject([]);
        this.schedulesGroups = new BehaviorSubject([]);
        this.contentsGroups = new BehaviorSubject([]);
    }
    setOrganizationId(id) {
        this.organizationId.next(id);
    }
    setOgranizations(list) {
        this.organizations.next(list);
    }
    setSchedulesGroups(list) {
        this.schedulesGroups.next(list);
    }
    setContentsGroups(list) {
        this.contentsGroups.next(list);
    }
}
