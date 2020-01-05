import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrganizationsService } from '../organizations-services/organizations.service';
import { OrganizationValidators } from '../organizations-valitators/organizations-validator';
import { environment } from './../../../environments/environment';

@Component({
    selector: 'app-organizations-add',
    templateUrl: './organizations-add.component.html',
    styleUrls: ['./organizations-add.component.scss']
})
export class OrganizationsAddComponent {
    public form: FormGroup;

    constructor(
        // private auth: AuthService,
        private router: Router,
        private organizationService: OrganizationsService,
        private service: OrganizationValidators
    ) {
        this.form = new FormGroup(
            {
                name: new FormControl(
                    environment.devInputString,
                    //   this.service.organizationValidator()
                ),
                description: new FormControl(environment.devInputString),
            },
            { updateOn: 'change' }
        );
    }

    get name() {
        return this.form.get('name');
    }

    get description() {
        return this.form.get('description');
    }

    onSubmit(data) {
        this.organizationService.postOrganizations(data).subscribe(() => {
            this.router.navigate(['/organizations-list']);
        });
    }
}
