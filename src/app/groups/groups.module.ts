import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { GroupsAddComponent } from './groups-add/groups-add.component';
import { GroupsEditComponent } from './groups-edit/groups-edit.component';

@NgModule({
    declarations: [GroupsListComponent, GroupsAddComponent, GroupsEditComponent],
    // imports: [CommonModule]
    imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
    exports: [RouterModule]
})
export class GroupsModule { }
