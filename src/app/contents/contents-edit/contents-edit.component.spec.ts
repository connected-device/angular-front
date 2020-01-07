import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsEditComponent } from './contents-edit.component';

describe('ContentsEditComponent', () => {
  let component: ContentsEditComponent;
  let fixture: ComponentFixture<ContentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
