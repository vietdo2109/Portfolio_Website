import { NgIf } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rectangle-card',
  imports: [RouterLink, NgIf],
  templateUrl: './rectangle-card.component.html',
  styleUrl: './rectangle-card.component.scss',
})
export class RectangleCardComponent {
  imgSrc = input();
  bgColor = input();
  title = input();
  desc = input();
  link = input();
  isLocked = input(false);
  isMouseOver = signal<boolean>(false);

  handleMouseOver() {
    this.isMouseOver.set(true);
  }

  handleMouseLeave() {
    this.isMouseOver.set(false);
  }
}
