import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div [className]="'header'">
      <div [className]="'container__authorName'" routerLink="">
        <p>Viet Do Van</p>
      </div>
      <div [className]="'container__roll'">
        <div [className]="'container__rollInner'">
          <p>Web Developer</p>
        </div>
      </div>
      <div [className]="'container__location'">
        <p>Hanoi, Viet Nam</p>
      </div>
    </div>
  `,
  styles: [
    `
      .header {
        z-index: 1000;
        margin: 0px 12px;
        font-family: 'Open Sans', sans-serif;
        position: sticky;
        top: 0px;
        display: flex;
        color: white;
        background-color: #111111;
        border-bottom: 0.5px solid rgb(50, 50, 50);
        border-bottom-width: 1px;
      }
      .container {
        &__authorName,
        &__location,
        &__roll {
          flex: 1;
          padding: 16px 0;
        }
        &__authorName {
          cursor: pointer;
        }
      }
      p {
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin: 0;
      }
    `,
  ],
})
export class HeaderComponent {
  title = signal('my first angular app');
}
