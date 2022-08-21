import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixMultipleComponent } from './matrix-multiple.component';

describe('MatrixMultipleComponent', () => {
  let component: MatrixMultipleComponent;
  let fixture: ComponentFixture<MatrixMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
