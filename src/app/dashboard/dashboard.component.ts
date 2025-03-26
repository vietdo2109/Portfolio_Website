import { Component } from '@angular/core';
import { ProjectNameComponent } from '../components/project-name/project-name.component';

@Component({
  selector: 'app-dashboard',
  imports: [ProjectNameComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
