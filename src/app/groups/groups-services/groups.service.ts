import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IGroup } from '../groups-entity/group';

@Injectable({
    providedIn: 'root'
})
export class GroupsService {
    constructor(private http: HttpClient) { }

    getGroups(organizationId: string) {
        return this.http.get<IGroup[]>(
            `${environment.apiUrl}/groups?organizationId=${organizationId}`
        );
    }

    getGroup(_id: string) {
        return this.http.get<IGroup>(`${environment.apiUrl}/groups/${_id}`);
    }

    findByGroupId(groupId: string) {
        return this.http.get(
            `${environment.apiUrl}/groups/findByGroupId?groupId=${groupId}`
        );
    }

    postGroups(data: IGroup) {
        return this.http.post(`${environment.apiUrl}/groups`, data);
    }

    putGroups(_id: string, data: IGroup) {
        return this.http.put(`${environment.apiUrl}/groups/${_id}`, data);
    }

    deleteGroup(id: string) {
        return this.http.delete(`${environment.apiUrl}/groups/${id}`);
    }
}
