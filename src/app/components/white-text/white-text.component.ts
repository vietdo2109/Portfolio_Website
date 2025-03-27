import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-white-text',
  imports: [NgStyle],
  templateUrl: './white-text.component.html',
  styleUrl: './white-text.component.scss',
})
export class WhiteTextComponent {
  fontSize = input<string>();
  fontWeight = input<string>();
  currentStyles: Record<string, string> = {};

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-family': '"Open Sans", sans-serif',
      color: 'white',
      'font-weight': `600`,
      'font-size': '14px',
    };
  }
  ngOnInit() {
    this.setCurrentStyles();
  }
}
