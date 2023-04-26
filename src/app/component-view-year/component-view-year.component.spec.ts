import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewYearComponent } from './component-view-year.component';

describe('ComponentViewYearComponent', () => {
  let component: ComponentViewYearComponent;
  let fixture: ComponentFixture<ComponentViewYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentViewYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentViewYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
