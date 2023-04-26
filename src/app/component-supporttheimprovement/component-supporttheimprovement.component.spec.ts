import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSupporttheimprovementComponent } from './component-supporttheimprovement.component';

describe('ComponentSupporttheimprovementComponent', () => {
  let component: ComponentSupporttheimprovementComponent;
  let fixture: ComponentFixture<ComponentSupporttheimprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSupporttheimprovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSupporttheimprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
