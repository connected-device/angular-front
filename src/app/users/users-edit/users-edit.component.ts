import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users-services/users.service';
import { UsersValidators } from '../users-valitators/users-validator';
import { environment } from './../../../environments/environment';
// import { ConsoleReporter } from "jasmine";
// import { ActivatedRoute } from "@angular/router";
// constructor(private route: ActivatedRoute) { }
@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
    public form: FormGroup;
    _id: string;

    constructor(
        // private auth: AuthService,
        private router: Router,
        private userService: UsersService,
        private service: UsersValidators,
        private route: ActivatedRoute
    ) {
        this.form = new FormGroup(
            {
                _id: new FormControl('', Validators.required),
                userId: new FormControl(
                    null
                    // Validators.required,
                    // this.service.userValidator()
                ),
                password: new FormControl('', Validators.required),
                userName: new FormControl('', Validators.required),
                group: new FormControl('', Validators.required),
                role: new FormControl('', Validators.required)
            },
            { updateOn: 'change' }
        );
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
        // console.log(data);

        this.userService.putUsers(data._id, data).subscribe(() => {
            this.router.navigate(['/users-list']);
        });
    }

    ngOnInit(): void {
        // this._id = this.route.snapshot.paramMap.get("_id");
        // console.log("this._id : ", this._id);
        // this.userService.getUser(this._id).subscribe(res => {
        //   // this.router.navigate(["/users-list"]);
        //   console.log("res: ", res);
        // });
        // this.userService.getUsers().subscribe(() => {
        //   // this.router.navigate(["/users-list"]);
        // });

        this._id = this.route.snapshot.paramMap.get('_id');
        console.log('this._id : ', this._id);
        this.userService.getUser(this._id).subscribe(res => {
            // this.router.navigate(["/users-list"]);
            console.log('res: ', res);
            this.form.patchValue({
                _id: res._id,
                userId: res.userId,
                password: res.password,
                userName: res.userName,
                group: res.group,
                role: res.role
            });
        });
    }
}
