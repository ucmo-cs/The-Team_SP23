import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDPComponent } from './pdp.component';

describe('PDPComponent', () => {
  let component: PDPComponent;
  let fixture: ComponentFixture<PDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
