import { Component, signal } from '@angular/core';
import { SlidingTextComponent } from '../sliding-text/sliding-text.component';

@Component({
  selector: 'app-footer',
  imports: [SlidingTextComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
