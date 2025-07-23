import { NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf],
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
      <!-- X Button shown only if not on home route -->
      <div *ngIf="!isHome()" class="container__closeButton" (click)="goHome()">
        <p class="x_button">✕</p>
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
          :hover {
            color: #fde047;
          }
        }
        &__roll {
          flex: 2;
          @media (min-width: 770px) {
            flex: 1;
          }
        }
        &__location {
          display: none;

          @media (min-width: 770px) {
            display: block;
          }
        }
      }
      p {
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin: 0;
      }
      .container__closeButton {
        position: absolute;
        right: 0;
        height: 100%;
        display: flex;
        justify-content: center;
      }
      .x_button {
        cursor: pointer;
        margin: auto auto;
      }
      .x_button:hover {
        color: #fde047;
      }
    `,
  ],
})
export class HeaderComponent {
  private router = inject(Router);
  currentUrl = signal(this.router.url);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
  }

  isHome = () => this.currentUrl() === '/';

  goHome() {
    this.router.navigateByUrl('/');
  }
}
