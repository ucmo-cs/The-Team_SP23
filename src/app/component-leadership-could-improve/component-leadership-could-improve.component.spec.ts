import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLeadershipCouldImproveComponent } from './component-leadership-could-improve.component';

describe('ComponentLeadershipCouldImproveComponent', () => {
  let component: ComponentLeadershipCouldImproveComponent;
  let fixture: ComponentFixture<ComponentLeadershipCouldImproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLeadershipCouldImproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLeadershipCouldImproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
