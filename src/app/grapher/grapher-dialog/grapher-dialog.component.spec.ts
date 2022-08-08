import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapherDialogComponent } from './grapher-dialog.component';

describe('GrapherDialogComponent', () => {
  let component: GrapherDialogComponent;
  let fixture: ComponentFixture<GrapherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapherDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
