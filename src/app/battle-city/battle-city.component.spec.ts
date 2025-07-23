/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BattleCityComponent } from './battle-city.component';

describe('BattleCityComponent', () => {
  let component: BattleCityComponent;
  let fixture: ComponentFixture<BattleCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
