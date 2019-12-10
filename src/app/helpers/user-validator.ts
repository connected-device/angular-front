import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from './../../environments/environment';

const URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
    providedIn: 'root'
})
export class UserValidators {
    constructor(private http: HttpClient) { }

    searchUser(text) {
        // debounce
        return timer(100)
            .pipe(
                switchMap(() => {
                    // Check if userId is available
                    // return this.http.get<any>(`${URL}/users?username=${text}`)
                    // this._http.findByUserId(id).subscribe
                    // return this.http.get<any>(`http://localhost:5300/users/findByUserId?userId=${text}`)

                    // return this.http.get<any>(`http://localhost:5300/users/${text}`);
                    // return this.http.get<any>(`http://localhost:5300/users/findByUserId?userId=${text}`);
                    return this.http.get<any>(`${environment.apiUrl}/users/findByUserId?userId=${text}`);

                })
            );
    }

    // this._http.postUsers(data).subscribe(data => {
    //     this.router.navigate(['/users']);
    //   })


    userValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
            return this.searchUser(control.value)
                .pipe(
                    map(res => {
                        // if username is already taken
                        if (res.length) {
                            // return error
                            return { userIdExists: true };
                        }
                    })
                );
        };

    }

}
