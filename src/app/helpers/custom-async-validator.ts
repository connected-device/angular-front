import { AuthService } from '../services/auth.service';
import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

export const loginAsyncValidator = (authService: AuthService, time: number = 500) => {
    return (input: FormControl) => {
        console.log('loginAsyncValiator');
        return timer(time).pipe(
            switchMap(() => authService.checkLogin(input.value)),
            map(res => {
                console.log('res.isLoginAvailable', res.isLoginAvailable, res);
                return res.isLoginAvailable ? null : { loginExist: true };
            })
        );
    };
};


export const loginAsyncValidator2 = (authService: AuthService, time: number = 500) => {
    return (input: FormControl) => {
        console.log('loginAsyncValiator');
        return timer(time).pipe(
            switchMap(() => authService.checkLogin(input.value)),
            map(res => {
                console.log('res.isLoginAvailable', res.isLoginAvailable, res);
                return res.isLoginAvailable ? null : { loginExist: true };
            })
        );
    };
};