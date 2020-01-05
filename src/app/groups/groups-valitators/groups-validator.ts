import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { GroupsService } from "../groups-services/groups.service";

@Injectable({
    providedIn: "root"
})
export class GroupsValidators {
    constructor(private groupsService: GroupsService) { }

    searchGroup(groupId: string) {
        return timer(100).pipe(
            switchMap(() => {
                return this.groupsService.findByGroupId(groupId);
            })
        );
    }

    groupValidator(): AsyncValidatorFn {
        return (
            control: AbstractControl
        ): Observable<{ [key: string]: any } | null> => {
            return this.searchGroup(control.value).pipe(
                map((res: Array<object>) => {
                    if (res.length) {
                        return { groupIdExists: true };
                    }
                })
            );
        };
    }
}
