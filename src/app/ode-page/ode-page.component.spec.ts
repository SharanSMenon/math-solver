import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdePageComponent } from './ode-page.component';

describe('OdePageComponent', () => {
  let component: OdePageComponent;
  let fixture: ComponentFixture<OdePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
