import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupsService } from '../groups-services/groups.service';
import { GroupsValidators } from '../groups-valitators/groups-validator';
import { environment } from './../../../environments/environment';
// import { ConsoleReporter } from "jasmine";
// import { ActivatedRoute } from "@angular/router";
// constructor(private route: ActivatedRoute) { }
@Component({
    selector: 'app-groups-edit',
    templateUrl: './groups-edit.component.html',
    styleUrls: ['./groups-edit.component.scss']
})
export class GroupsEditComponent implements OnInit {
    public form: FormGroup;
    _id: string;

    constructor(
        // private auth: AuthService,
        private router: Router,
        private groupService: GroupsService,
        private service: GroupsValidators,
        private route: ActivatedRoute
    ) {
        this.form = new FormGroup(
            {
                _id: new FormControl('', Validators.required),
                organizationId: new FormControl(
                    ''
                ),
                name: new FormControl('', Validators.required),
                type: new FormControl('', Validators.required),
            },
            { updateOn: 'change' }
        );
    }

    get organizationId() {
        return this.form.get('organizationId');
    }

    get name() {
        return this.form.get('name');
    }

    get password() {
        return this.form.get('password');
    }

    onSubmit(data) {
        // console.log(data);

        this.groupService.putGroups(data._id, data).subscribe(() => {
            this.router.navigate(['/groups-list']);
        });
    }

    ngOnInit(): void {
        this._id = this.route.snapshot.paramMap.get('_id');
        console.log('this._id : ', this._id);
        this.groupService.getGroup(this._id).subscribe(res => {
            // this.router.navigate(["/groups-list"]);
            console.log('res: ', res);
            this.form.patchValue({
                _id: res._id,
                organizationId: res.organizationId,
                name: res.name,
                type: res.type
            });
        });
    }
}
