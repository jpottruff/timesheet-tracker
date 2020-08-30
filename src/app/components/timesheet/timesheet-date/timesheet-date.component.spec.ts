import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDateComponent } from './timesheet-date.component';

describe('TimesheetDateComponent', () => {
  let component: TimesheetDateComponent;
  let fixture: ComponentFixture<TimesheetDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
