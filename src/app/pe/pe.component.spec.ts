import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEComponent } from './pe.component';

describe('PEComponent', () => {
  let component: PEComponent;
  let fixture: ComponentFixture<PEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
