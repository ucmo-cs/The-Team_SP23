import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBiggesttakeawayComponent } from './component-biggesttakeaway.component';

describe('ComponentBiggesttakeawayComponent', () => {
  let component: ComponentBiggesttakeawayComponent;
  let fixture: ComponentFixture<ComponentBiggesttakeawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBiggesttakeawayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBiggesttakeawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
