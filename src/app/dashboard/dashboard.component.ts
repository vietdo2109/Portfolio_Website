import { Component } from '@angular/core';
import { ProjectLayoutComponent } from '../components/project-layout/project-layout.component';
import { WhiteTextComponent } from '../components/white-text/white-text.component';
import { GrayTextComponent } from '../components/gray-text/gray-text.component';
import { PresentationImageComponent } from '../components/presentation-image/presentation-image.component';
import { NavigateButtonComponent } from '../components/navigate-button/navigate-button.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ProjectLayoutComponent,
    WhiteTextComponent,
    GrayTextComponent,
    NavigateButtonComponent,
    PresentationImageComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
