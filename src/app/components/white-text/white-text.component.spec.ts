import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteTextComponent } from './white-text.component';

describe('WhiteTextComponent', () => {
  let component: WhiteTextComponent;
  let fixture: ComponentFixture<WhiteTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
