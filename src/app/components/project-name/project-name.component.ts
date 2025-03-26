import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-name',
  imports: [],
  templateUrl: './project-name.component.html',
  styleUrl: './project-name.component.scss',
})
export class ProjectNameComponent {
  title = input();
  subTitle = input();
}
