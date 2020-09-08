import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApproversDialogComponent } from './add-approvers-dialog.component';

describe('AddApproversDialogComponent', () => {
  let component: AddApproversDialogComponent;
  let fixture: ComponentFixture<AddApproversDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApproversDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApproversDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
