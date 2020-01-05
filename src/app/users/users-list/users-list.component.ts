import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users-services/users.service';
import { AppService } from '../../app.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
    users: object;
    organizationId: string;
    private subscriptions = new Subscription();

    constructor(
        private userService: UsersService,
        private appService: AppService
    ) { }

    ngOnInit() {
        this.subscriptions.add(this.appService.organizationId.subscribe(id => {
            console.log('id', id);
            this.organizationId = id;
            this.list();
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    list() {
        // this.userService.getUsers().subscribe(data => {
        //   this.users = data;
        // });
        this.userService
            .getUsers(this.organizationId)
            .subscribe(data => {
                this.users = data;
            });
    }

    delete(id: string) {
        if (confirm('Are you sure to delete ?')) {
            this.userService.deleteUser(id).subscribe(data => {
                this.list();
            });
        }
    }

    //   get organizationId(): string {
    //     console.log('organizationId called');
    //     // this.list();
    //     return this.appService.organizationId;
    //   }
}
