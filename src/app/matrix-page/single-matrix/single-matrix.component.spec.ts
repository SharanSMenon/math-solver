import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMatrixComponent } from './single-matrix.component';

describe('SingleMatrixComponent', () => {
  let component: SingleMatrixComponent;
  let fixture: ComponentFixture<SingleMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
