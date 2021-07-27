import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveforms1Component } from './reactiveforms1.component';

describe('Reactiveforms1Component', () => {
  let component: Reactiveforms1Component;
  let fixture: ComponentFixture<Reactiveforms1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveforms1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveforms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
