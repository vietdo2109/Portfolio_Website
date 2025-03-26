import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },

  {
    path: 'nextjsdashboard',
    loadComponent: () => {
      return import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      );
    },
  },
];
