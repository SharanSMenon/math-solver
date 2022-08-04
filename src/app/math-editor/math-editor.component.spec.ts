import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathEditorComponent } from './math-editor.component';

describe('MathEditorComponent', () => {
  let component: MathEditorComponent;
  let fixture: ComponentFixture<MathEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
