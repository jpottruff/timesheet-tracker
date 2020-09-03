import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverExpansionPanelComponent } from './approver-expansion-panel.component';

describe('ApproverExpansionPannelComponent', () => {
  let component: ApproverExpansionPanelComponent;
  let fixture: ComponentFixture<ApproverExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
