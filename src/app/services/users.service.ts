import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get(`${environment.apiUrl}/users`);
    }

    postUsers(data: object) {
        return this.http.post(`${environment.apiUrl}/users`, data);
    }

    deleteUser(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
