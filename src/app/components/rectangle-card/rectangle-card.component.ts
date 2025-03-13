import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-rectangle-card',
  imports: [],
  templateUrl: './rectangle-card.component.html',
  styleUrl: './rectangle-card.component.scss',
})
export class RectangleCardComponent {
  bgColor = input();
  title = input();
  desc = input();

  isMouseOver = signal<boolean>(false);

  handleMouseOver() {
    this.isMouseOver.set(true);
    console.log(this.isMouseOver.toString());
  }

  handleMouseLeave() {
    this.isMouseOver.set(false);
    console.log(this.isMouseOver.toString());
  }
}
