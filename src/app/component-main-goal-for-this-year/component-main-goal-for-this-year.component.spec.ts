import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMainGoalForThisYearComponent } from './component-main-goal-for-this-year.component';

describe('ComponentMainGoalForThisYearComponent', () => {
  let component: ComponentMainGoalForThisYearComponent;
  let fixture: ComponentFixture<ComponentMainGoalForThisYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMainGoalForThisYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMainGoalForThisYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
