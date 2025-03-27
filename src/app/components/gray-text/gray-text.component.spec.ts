import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayTextComponent } from './gray-text.component';

describe('GrayTextComponent', () => {
  let component: GrayTextComponent;
  let fixture: ComponentFixture<GrayTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrayTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrayTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
