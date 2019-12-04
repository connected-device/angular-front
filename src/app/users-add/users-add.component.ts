import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { loginAsyncValidator } from '../helpers/custom-async-validator';
import { HttpService } from '../http.service';
import { UserValidators } from '../helpers/user-validator';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  // styleUrls: ['./users-add.component.scss']
  styles: [
    'input.ng-touched.ng-invalid {border-color: red}',
    'input.ng-dirty.ng-invalid {border-color: red}'
  ]
})
export class UsersAddComponent {
  public form: FormGroup;

  constructor(private auth: AuthService, private router: Router, private _http: HttpService, private service: UserValidators) {
    this.form = new FormGroup({
      userId: new FormControl(null, Validators.required, this.service.userValidator()),
      password: new FormControl('test', Validators.required),
      userName: new FormControl('test', Validators.required),
      group: new FormControl('test', Validators.required),
      role: new FormControl('test', Validators.required),
    }, { updateOn: 'change' }); // blur, change, submit
  }

  get userId() {
    return this.form.get('userId');
  }

  get userName() {
    return this.form.get('userName');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit(data) {
    // Process checkout data here
    this._http.postUsers(data).subscribe(data => {
      this.router.navigate(['/users']);
    })
  }
}