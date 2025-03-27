import { Component, input } from '@angular/core';

@Component({
  selector: 'app-navigate-button',
  imports: [],
  templateUrl: './navigate-button.component.html',
  styleUrl: './navigate-button.component.scss',
})
export class NavigateButtonComponent {
  text = input();
}
