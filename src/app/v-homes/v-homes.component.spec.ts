/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VHomesComponent } from './v-homes.component';

describe('VHomesComponent', () => {
  let component: VHomesComponent;
  let fixture: ComponentFixture<VHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VHomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
