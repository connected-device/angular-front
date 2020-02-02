import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { OrganizationsListComponent, OrganizationsAddComponent, OrganizationsEditComponent } from './organizations';
import { UsersListComponent, UsersAddComponent, UsersEditComponent } from './users';
import { GroupsListComponent, GroupsAddComponent, GroupsEditComponent } from './groups';
import { SchedulesComponent } from './schedules';
import { ContentsComponent } from './contents';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    { path: 'groups-list', component: GroupsListComponent },
    { path: 'groups-add', component: GroupsAddComponent },
    { path: 'groups-edit/:_id', component: GroupsEditComponent },
    { path: 'users-list', component: UsersListComponent },
    { path: 'users-add', component: UsersAddComponent },
    { path: 'users-edit/:_id', component: UsersEditComponent },
    { path: 'organizations-list', component: OrganizationsListComponent },
    { path: 'organizations-add', component: OrganizationsAddComponent },
    { path: 'organizations-edit/:_id', component: OrganizationsEditComponent },
    { path: 'schedules/:_id', component: SchedulesComponent },
    { path: 'contents/:_id', component: ContentsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
