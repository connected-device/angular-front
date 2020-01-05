import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrganizationsService } from '../organizations-services/organizations.service';
import { OrganizationValidators } from '../organizations-valitators/organizations-validator';
import { AppService } from '../../app.service';
import { environment } from './../../../environments/environment';
@Component({
    selector: 'app-organizations-edit',
    templateUrl: './organizations-edit.component.html',
    styleUrls: ['./organizations-edit.component.scss']
})
export class OrganizationsEditComponent implements OnInit {
    public form: FormGroup;
    _id: string;

    constructor(
        // private auth: AuthService,
        private router: Router,
        private organizationService: OrganizationsService,
        private service: OrganizationValidators,
        private route: ActivatedRoute,
        private appService: AppService
    ) {
        this.form = new FormGroup(
            {
                _id: new FormControl('', Validators.required),
                // organizationId: new FormControl(
                //     null
                //     // Validators.required,
                //     // this.service.organizationValidator()
                // ),
                name: new FormControl('', Validators.required),
                description: new FormControl('', Validators.required),
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

    get description() {
        return this.form.get('description');
    }

    onSubmit(data) {
        this.organizationService.putOrganizations(data._id, data).subscribe((res) => {
            this.organizationService.getOrganizations().subscribe(data => {
                this.appService.setOgranizations(data);
            });
            this.router.navigate(['/organizations-list']);
        });
    }

    ngOnInit(): void {
        this._id = this.route.snapshot.paramMap.get('_id');
        this.organizationService.getOrganization(this._id).subscribe(res => {
            this.form.patchValue({
                _id: res._id,
                name: res.name,
                description: res.description,
            });
        });
    }
}
