import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatexCardComponent } from './latex-card.component';

describe('LatexCardComponent', () => {
  let component: LatexCardComponent;
  let fixture: ComponentFixture<LatexCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatexCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatexCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
