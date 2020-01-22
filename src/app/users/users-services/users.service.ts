import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { User } from "../users-entity/user";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(organizationId: string) {
    return this.http.get<User[]>(
      `${environment.apiUrl}/users?organizationId=${organizationId}`
    );
  }

  getUsers(organizationId: string) {
    return this.http.get(
      `${environment.apiUrl}/users?organizationId=${organizationId}`
    );
  }

  getUser(_id: string) {
    return this.http.get<User>(`${environment.apiUrl}/users/${_id}`);
  }

  findByUserId(userId: string) {
    return this.http.get(
      `${environment.apiUrl}/users/findByUserId?userId=${userId}`
    );
  }

  postUsers(data: User) {
    return this.http.post(`${environment.apiUrl}/users`, data);
  }

  putUsers(_id: string, data: User) {
    return this.http.put(`${environment.apiUrl}/users/${_id}`, data);
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
