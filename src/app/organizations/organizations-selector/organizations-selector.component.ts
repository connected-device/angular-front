import { Component, OnInit } from '@angular/core';
import { OrganizationsService } from '../../_services';
import { Organization } from 'src/app/_models';

@Component({
    selector: 'app-organizations-selector',
    templateUrl: './organizations-selector.component.html',
    styleUrls: ['./organizations-selector.component.scss']
})
export class OrganizationsSelectorComponent implements OnInit {

    dropDownData: any;
    organizations: Organization[];

    selectedValue: string = '-- select value --';
    selectedId: string;

    constructor(private organizationsService: OrganizationsService) { }

    ngOnInit() {
        this.dropDownData = [
            { seo_val: 'seo-1', text_val: 'txt-1' },
            { seo_val: 'seo-2', text_val: 'txt-2' },
            { seo_val: 'seo-3', text_val: 'txt-3' },
        ];
        this.organizationsService.getOrganizations().subscribe(
            data => this.organizations = data
        );
    }

    onOptionsSelected(value: string) {
        console.log("the selected value is " + value);
    }

 
    // On-Click Method on dropdown control
    selectValue(organization: Organization) {
       this.selectedValue = organization.name;
       this.selectedId = organization._id;
    }


}
