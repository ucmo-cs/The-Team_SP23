import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAreasWouldYouLikeComponent } from './component-areas-would-you-like.component';

describe('ComponentAreasWouldYouLikeComponent', () => {
  let component: ComponentAreasWouldYouLikeComponent;
  let fixture: ComponentFixture<ComponentAreasWouldYouLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAreasWouldYouLikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAreasWouldYouLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
