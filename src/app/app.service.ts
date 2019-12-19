import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  public organizationId: string = "aa2";
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
