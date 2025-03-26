import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rectangle-card',
  imports: [RouterLink],
  templateUrl: './rectangle-card.component.html',
  styleUrl: './rectangle-card.component.scss',
})
export class RectangleCardComponent {
  bgColor = input();
  title = input();
  desc = input();
  link = input();
  isMouseOver = signal<boolean>(false);

  handleMouseOver() {
    this.isMouseOver.set(true);
  }

  handleMouseLeave() {
    this.isMouseOver.set(false);
  }
}
