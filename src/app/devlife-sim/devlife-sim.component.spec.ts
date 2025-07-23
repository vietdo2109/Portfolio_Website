/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DevlifeSimComponent } from './devlife-sim.component';

describe('DevlifeSimComponent', () => {
  let component: DevlifeSimComponent;
  let fixture: ComponentFixture<DevlifeSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevlifeSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevlifeSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
