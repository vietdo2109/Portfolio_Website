import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationImageComponent } from './presentation-image.component';

describe('PresentationImageComponent', () => {
  let component: PresentationImageComponent;
  let fixture: ComponentFixture<PresentationImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
