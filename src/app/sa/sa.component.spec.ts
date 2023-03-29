import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAComponent } from './sa.component';

describe('SAComponent', () => {
  let component: SAComponent;
  let fixture: ComponentFixture<SAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
