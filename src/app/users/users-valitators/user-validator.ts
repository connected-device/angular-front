import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { UsersService } from "../users-services/users.service";

@Injectable({
  providedIn: "root"
})
export class UserValidators {
  constructor(private usersService: UsersService) {}

  searchUser(userId: string) {
    return timer(100).pipe(
      switchMap(() => {
        return this.usersService.findByUserId(userId);
      })
    );
  }

  userValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return this.searchUser(control.value).pipe(
        map((res: Array<object>) => {
          if (res.length) {
            return { userIdExists: true };
          }
        })
      );
    };
  }
}
