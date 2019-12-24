import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private organizationId = new BehaviorSubject<string>('5df04104caaaac3f3080eb8a');
    cast = this.organizationId.asObservable();
    // public organizationId = '5df04104caaaac3f3080eb8a';
    // public userRole = 'admin'; // admin, user,
    constructor() {
        console.log('New Instance of App Service Created.');
    }
    setOrganizationId(id) {
        this.organizationId.next(id);
    }
}

// export class UserPreferencesService {
//   colourPreference: string = "orange";
//   constructor() {
//     console.log("New Instance of Service Created.");
//   }
// }
