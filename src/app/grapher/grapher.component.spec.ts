import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapherComponent } from './grapher.component';

describe('GrapherComponent', () => {
  let component: GrapherComponent;
  let fixture: ComponentFixture<GrapherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
