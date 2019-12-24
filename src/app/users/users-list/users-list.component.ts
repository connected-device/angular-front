import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-services/users.service';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    users: object;
    organizationId: string;

    constructor(
        private userService: UsersService,
        private appService: AppService
    ) { }

    ngOnInit() {
        this.appService.cast.subscribe(id => {
            this.organizationId = id;
            this.list();
        });
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
