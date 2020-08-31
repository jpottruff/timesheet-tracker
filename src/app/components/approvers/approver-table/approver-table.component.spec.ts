import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverTableComponent } from './approver-table.component';

describe('ApproverTableComponent', () => {
  let component: ApproverTableComponent;
  let fixture: ComponentFixture<ApproverTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
