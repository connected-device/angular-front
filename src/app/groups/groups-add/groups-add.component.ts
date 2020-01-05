import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroupsService } from '../groups-services/groups.service';
import { GroupsValidators } from '../groups-valitators/groups-validator';
import { environment } from './../../../environments/environment';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-groups-add',
    templateUrl: './groups-add.component.html',
    styleUrls: ['./groups-add.component.scss']
})
export class GroupsAddComponent implements OnInit {

    organizationId: string;
    constructor(
        // private auth: AuthService,
        private router: Router,
        private appService: AppService,
        private groupService: GroupsService,
        private service: GroupsValidators
    ) {
        appService.organizationId.subscribe(id => {
            this.organizationId = id;
        });
        this.form = new FormGroup(
            {
                // groupId: new FormControl(
                //     null,
                //     Validators.required,
                //     this.service.groupValidator()
                // ),
                // organizationId: new FormControl("5df04015caaaac3f3080eb88"),
                organizationId: new FormControl(this.organizationId),
                // password: new FormControl(
                //     environment.devInputString,
                //     Validators.required
                // ),
                name: new FormControl(
                    environment.devInputString,
                    Validators.required
                ),
                type: new FormControl('schedules', Validators.required),
                // role: new FormControl(environment.devInputString, Validators.required)
            },
            { updateOn: 'change' }
        );
    }

    // get groupId() {
    //     return this.form.get('groupId');
    // }

    get name() {
        return this.form.get('name');
    }

    // get password() {
    //     return this.form.get('password');
    // }
    public form: FormGroup;
    ngOnInit(): void {
        this.appService.organizationId.subscribe(id => {
            this.organizationId = id;
        });
    }

    //   get organizationId(): string {
    //     return this.appService.organizationId;
    //   }

    onSubmit(data) {
        console.log(data);
        this.groupService.postGroups(data).subscribe(() => {
            this.router.navigate(['/groups-list']);
        });
    }
}
