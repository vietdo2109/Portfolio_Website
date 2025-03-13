import { Component, signal } from '@angular/core';
import { RectangleCardComponent } from '../components/rectangle-card/rectangle-card.component';

@Component({
  selector: 'app-home',
  imports: [RectangleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('message from home component');
}
