import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  public organizationId: string = "5df04104caaaac3f3080eb8a";
  public userRole: string = "admin"; // admin, user,
  constructor() {
    console.log("New Instance of App Service Created.");
  }
}

// export class UserPreferencesService {
//   colourPreference: string = "orange";
//   constructor() {
//     console.log("New Instance of Service Created.");
//   }
// }
