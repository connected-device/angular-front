import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { OrganizationsService } from "../organizations-services/organizations.service";

@Injectable({
  providedIn: "root"
})
export class OrganizationValidators {
  constructor(private organizationsService: OrganizationsService) {}

  searchOrganization(organizationId: string) {
    return timer(100).pipe(
      switchMap(() => {
        return this.organizationsService.findByOrganizationId(organizationId);
      })
    );
  }

  organizationValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return this.searchOrganization(control.value).pipe(
        map((res: Array<object>) => {
          if (res.length) {
            return { organizationIdExists: true };
          }
        })
      );
    };
  }
}
