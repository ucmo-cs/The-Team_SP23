import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PEComponentAdmin } from './pe-admin.component';

describe('PEComponentAdmin', () => {
  let component: PEComponentAdmin;
  let fixture: ComponentFixture<PEComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PEComponentAdmin ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PEComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
