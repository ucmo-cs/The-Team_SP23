import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentImproveyourperformanceComponent } from './component-improveyourperformance.component';

describe('ComponentImproveyourperformanceComponent', () => {
  let component: ComponentImproveyourperformanceComponent;
  let fixture: ComponentFixture<ComponentImproveyourperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentImproveyourperformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentImproveyourperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
