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
  {
    path: 'nextjs-dashboard',
    loadComponent: () => {
      return import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      );
    },
  },
  {
    path: 'random-webtoon',
    loadComponent: () => {
      return import('./random-webtoon/random-webtoon.component').then(
        (m) => m.RandomWebtoonComponent
      );
    },
  },
  {
    path: 'v-homes',
    loadComponent: () => {
      return import('./v-homes/v-homes.component').then(
        (m) => m.VHomesComponent
      );
    },
  },
  {
    path: 'battle-city',
    loadComponent: () => {
      return import('./battle-city/battle-city.component').then(
        (m) => m.BattleCityComponent
      );
    },
  },
  {
    path: 'devlife-sim',
    loadComponent: () => {
      return import('./devlife-sim/devlife-sim.component').then(
        (m) => m.DevlifeSimComponent
      );
    },
  },
  {
    path: 'expense-tracker',
    loadComponent: () => {
      return import('./expense-tracker/expense-tracker.component').then(
        (m) => m.ExpenseTrackerComponent
      );
    },
  },
];
