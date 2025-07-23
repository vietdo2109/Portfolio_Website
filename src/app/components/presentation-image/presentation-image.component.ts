import { Component, input } from '@angular/core';

@Component({
  selector: 'app-presentation-image',
  imports: [],
  templateUrl: './presentation-image.component.html',
  styleUrl: './presentation-image.component.scss',
})
export class PresentationImageComponent {
  imgSrc = input();
}
