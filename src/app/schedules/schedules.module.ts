import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SchedulesComponent } from "./schedules.component";
import { SchedulesListComponent } from './schedules-list/schedules-list.component';
import { SchedulesAddComponent } from './schedules-add/schedules-add.component';
import { SchedulesEditComponent } from './schedules-edit/schedules-edit.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';
import { SettingsEditComponent } from './settings-edit/settings-edit.component';
import { DevicesEditComponent } from './devices-edit/devices-edit.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesAddComponent } from './devices-add/devices-add.component';

@NgModule({
  declarations: [SchedulesComponent, SchedulesListComponent, SchedulesAddComponent, SchedulesEditComponent, SettingsViewComponent, SettingsEditComponent, DevicesEditComponent, DevicesListComponent, DevicesAddComponent],
  imports: [CommonModule]
})
export class SchedulesModule {}