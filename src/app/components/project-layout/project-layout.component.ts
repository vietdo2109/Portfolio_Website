import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-layout',
  imports: [],
  templateUrl: './project-layout.component.html',
  styleUrl: './project-layout.component.scss',
})
export class ProjectLayoutComponent {
  heroImg = input();
  title = input();
  subTitle = input();
}
