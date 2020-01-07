import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesEditComponent } from './schedules-edit.component';

describe('SchedulesEditComponent', () => {
  let component: SchedulesEditComponent;
  let fixture: ComponentFixture<SchedulesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
