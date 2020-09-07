import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveeListComponent } from './approvee-list.component';

describe('ApproveeListComponent', () => {
  let component: ApproveeListComponent;
  let fixture: ComponentFixture<ApproveeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
