import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsSelectorComponent } from './organizations-selector.component';

describe('OrganizationsSelectorComponent', () => {
  let component: OrganizationsSelectorComponent;
  let fixture: ComponentFixture<OrganizationsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
