import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-text',
  imports: [],
  templateUrl: './sliding-text.component.html',
  styleUrl: './sliding-text.component.scss',
})
export class SlidingTextComponent {
  displayedText: string =
    'DESIGN_INSPIRED_BY_JOSEPH_ZHANG_ヾ(≧▽≦*)o_DEVELOPED_USING_ANGULAR_（づ￣3￣）づ╭❤️～_DEPLOYED_ON_VERCEL_(👉ﾟヮﾟ)👉_NOT_FOR_COMMERCIAL_USE_👈(ﾟヮﾟ👈)_DESIGN_INSPIRED_BY_JOSEPH_ZHANG_ヾ(≧▽≦*)o_DEVELOPED_USING_ANGULAR_（づ￣3￣）づ╭❤️～_DEPLOYED_ON_VERCEL_(👉ﾟヮﾟ)👉_NOT_FOR_COMMERCIAL_USE_👈(ﾟヮﾟ👈)_DESIGN_INSPIRED_BY_JOSEPH_ZHANG_ヾ(≧▽≦*)o_DEVELOPED_USING_ANGULAR_（づ￣3￣）づ╭❤️～_DEPLOYED_ON_VERCEL_(👉ﾟヮﾟ)👉_NOT_FOR_COMMERCIAL_USE_👈(ﾟヮﾟ👈)_DESIGN_INSPIRED_BY_JOSEPH_ZHANG_ヾ(≧▽≦*)o_DEVELOPED_USING_ANGULAR_（づ￣3￣）づ╭❤️～_DEPLOYED_ON_VERCEL_(👉ﾟヮﾟ)👉_NOT_FOR_COMMERCIAL_USE_👈(ﾟヮﾟ👈)_DESIGN_INSPIRED_BY_JOSEPH_ZHANG_ヾ(≧▽≦*)o_DEVELOPED_USING_ANGULAR_（づ￣3￣）づ╭❤️～_DEPLOYED_ON_VERCEL_(👉ﾟヮﾟ)👉_NOT_FOR_COMMERCIAL_USE_👈(ﾟヮﾟ👈)_';
  private intervalId!: number;

  ngOnInit(): void {
    this.startSliding();
  }

  startSliding(): void {
    this.intervalId = window.setInterval(() => {
      this.displayedText =
        this.displayedText.slice(-1) + this.displayedText.slice(0, -1);
    }, 600);
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
