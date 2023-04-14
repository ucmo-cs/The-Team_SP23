import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponentAdmin } from './select-admin.component';

describe('SelectComponent', () => {
  let component: SelectComponentAdmin;
  let fixture: ComponentFixture<SelectComponentAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectComponentAdmin ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
