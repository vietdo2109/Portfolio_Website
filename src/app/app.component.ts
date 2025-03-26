import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />

    <div [className]="'container'">
      <router-outlet />
    </div>

    <app-footer />
  `,
  styles: [
    `
      main {
        display: flex;
        flex-direction: column;
      }
      .container {
        z-index: 10;
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: #111111;
        padding: 0px 12px;
        gap: 20px;
        margin-bottom: 190px;
        border-bottom: 1px solid rgb(36, 36, 36);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-angular-app';
}
