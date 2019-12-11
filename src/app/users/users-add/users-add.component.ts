import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersService } from "../users-services/users.service";
import { UsersValidators } from "../users-valitators/users-validator";
import { environment } from "./../../../environments/environment";

@Component({
  selector: "app-users-add",
  templateUrl: "./users-add.component.html",
  styleUrls: ["./users-add.component.scss"]
})
export class UsersAddComponent {
  public form: FormGroup;

  constructor(
    // private auth: AuthService,
    private router: Router,
    private userService: UsersService,
    private service: UsersValidators
  ) {
    this.form = new FormGroup(
      {
        userId: new FormControl(
          null,
          Validators.required,
          this.service.userValidator()
        ),
        password: new FormControl(
          environment.devInputString,
          Validators.required
        ),
        userName: new FormControl(
          environment.devInputString,
          Validators.required
        ),
        group: new FormControl(environment.devInputString, Validators.required),
        role: new FormControl(environment.devInputString, Validators.required)
      },
      { updateOn: "change" }
    ); // blur, change, submit
  }

  get userId() {
    return this.form.get("userId");
  }

  get userName() {
    return this.form.get("userName");
  }

  get password() {
    return this.form.get("password");
  }

  onSubmit(data) {
    // Process checkout data here
    this.userService.postUsers(data).subscribe(() => {
      this.router.navigate(["/users-list"]);
    });
  }
}
