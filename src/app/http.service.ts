import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('hey, what is up!');
  }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }



  /**
   * Users CRUD
   */

  getUsers() {
    return this.http.get('http://localhost:5300/users')
  }

  // findByUserId(id: string) {
  //   return this.http.get('http://localhost:5300/users/findByUserId?userId=' + id)
  // }

  postUsers(data: object) {
    return this.http.post('http://localhost:5300/users', data)
  }

  deleteUser(id: string) {
    return this.http.delete('http://localhost:5300/users/' + id)
  }




}
