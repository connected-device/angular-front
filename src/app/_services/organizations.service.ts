import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Organization } from '../_models';

@Injectable({
    providedIn: 'root'
})
export class OrganizationsService {
    constructor(private http: HttpClient) { }

    getOrganizations() {
        return this.http.get<Organization[]>(
            `${environment.apiUrl}/organizations`
        );
    }

    getOrganization(_id: string) {
        return this.http.get<Organization>(
            `${environment.apiUrl}/organizations/${_id}`
        );
    }

    findByOrganizationId(organizationId: string) {
        return this.http.get(
            `${environment.apiUrl}/organizations/findByOrganizationId?organizationId=${organizationId}`
        );
    }

    postOrganizations(data: Organization) {
        return this.http.post(`${environment.apiUrl}/organizations`, data);
    }

    putOrganizations(_id: string, data: Organization) {
        return this.http.put(`${environment.apiUrl}/organizations/${_id}`, data);
    }

    deleteOrganization(id: string) {
        return this.http.delete(`${environment.apiUrl}/organizations/${id}`);
    }
}
