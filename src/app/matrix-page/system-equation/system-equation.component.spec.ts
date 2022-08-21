import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEquationComponent } from './system-equation.component';

describe('SystemEquationComponent', () => {
  let component: SystemEquationComponent;
  let fixture: ComponentFixture<SystemEquationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemEquationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemEquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
