/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PresentationVideoComponent } from './presentation-video.component';

describe('PresentationVideoComponent', () => {
  let component: PresentationVideoComponent;
  let fixture: ComponentFixture<PresentationVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
