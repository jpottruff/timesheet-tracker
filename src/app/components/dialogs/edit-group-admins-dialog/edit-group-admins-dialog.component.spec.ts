import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupAdminsDialogComponent } from './edit-group-admins-dialog.component';

describe('EditGroupAdminsDialogComponent', () => {
  let component: EditGroupAdminsDialogComponent;
  let fixture: ComponentFixture<EditGroupAdminsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroupAdminsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupAdminsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
