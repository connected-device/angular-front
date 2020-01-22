import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public login(userInfo: User) {
    return this.http.post(`${environment.apiUrl}/users/auth/login`, userInfo);
  }

  public isLoggedIn() {
    return localStorage.getItem("ACCESS_TOKEN") !== null;
  }

  public logout() {
    localStorage.removeItem("ACCESS_TOKEN");
  }

  //   logout() {
  //     // remove user from local storage to log user out
  //     localStorage.removeItem('currentUser');
  //     this.currentUserSubject.next(null);
  // }
}
