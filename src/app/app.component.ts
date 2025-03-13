import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />

    <div [className]="'container'">
      <router-outlet />
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        background-color: #111111;
        padding: 0px 12px;
        gap: 20px;
      }
      div {
        height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-angular-app';
}
