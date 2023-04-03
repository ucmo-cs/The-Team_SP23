import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMetricsmilestonesComponent } from './component-metricsmilestones.component';

describe('ComponentMetricsmilestonesComponent', () => {
  let component: ComponentMetricsmilestonesComponent;
  let fixture: ComponentFixture<ComponentMetricsmilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMetricsmilestonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMetricsmilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
