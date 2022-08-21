import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixPageComponent } from './matrix-page.component';

describe('MatrixPageComponent', () => {
  let component: MatrixPageComponent;
  let fixture: ComponentFixture<MatrixPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
