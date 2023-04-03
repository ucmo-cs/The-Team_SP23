import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSupportTheImprovementComponent } from './component-support-the-improvement.component';

describe('ComponentSupportTheImprovementComponent', () => {
  let component: ComponentSupportTheImprovementComponent;
  let fixture: ComponentFixture<ComponentSupportTheImprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSupportTheImprovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSupportTheImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
