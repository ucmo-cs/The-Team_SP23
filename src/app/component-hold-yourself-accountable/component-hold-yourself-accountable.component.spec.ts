import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHoldYourselfAccountableComponent } from './component-hold-yourself-accountable.component';

describe('ComponentHoldYourselfAccountableComponent', () => {
  let component: ComponentHoldYourselfAccountableComponent;
  let fixture: ComponentFixture<ComponentHoldYourselfAccountableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHoldYourselfAccountableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHoldYourselfAccountableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
