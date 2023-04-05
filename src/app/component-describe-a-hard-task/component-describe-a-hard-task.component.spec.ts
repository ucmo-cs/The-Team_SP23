import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDescribeAHardTaskComponent } from './component-describe-a-hard-task.component';

describe('ComponentDescribeAHardTaskComponent', () => {
  let component: ComponentDescribeAHardTaskComponent;
  let fixture: ComponentFixture<ComponentDescribeAHardTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDescribeAHardTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDescribeAHardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
