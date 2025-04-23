import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'weather-result',
    loadComponent: () => import('./weather-result/weather-result.page').then( m => m.WeatherResultPage)
  },
  {
    path: 'weather-location',
    loadComponent: () => import('./weather-location/weather-location.page').then( m => m.WeatherLocationPage)
  },
];
