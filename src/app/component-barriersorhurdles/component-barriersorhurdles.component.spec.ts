import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBarriersorhurdlesComponent } from './component-barriersorhurdles.component';

describe('ComponentBarriersorhurdlesComponent', () => {
  let component: ComponentBarriersorhurdlesComponent;
  let fixture: ComponentFixture<ComponentBarriersorhurdlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBarriersorhurdlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBarriersorhurdlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
