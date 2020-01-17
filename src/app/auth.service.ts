import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(userInfo: User) {
    return this.http.post(`${environment.apiUrl}/users/auth/login`, userInfo);
  }

  public isLoggedIn() {
    return localStorage.getItem("ACCESS_TOKEN") !== null;
  }

  public logout() {
    localStorage.removeItem("ACCESS_TOKEN");
  }
}
