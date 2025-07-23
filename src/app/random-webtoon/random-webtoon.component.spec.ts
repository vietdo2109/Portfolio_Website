/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomWebtoonComponent } from './random-webtoon.component';

describe('RandomWebtoonComponent', () => {
  let component: RandomWebtoonComponent;
  let fixture: ComponentFixture<RandomWebtoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomWebtoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomWebtoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
