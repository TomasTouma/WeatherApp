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
    path: 'galway',
    loadComponent: () => import('./galway/galway.page').then( m => m.GalwayPage)
  },
  {
    path: 'dublin',
    loadComponent: () => import('./dublin/dublin.page').then( m => m.DublinPage)
  },
  {
    path: 'limerick',
    loadComponent: () => import('./limerick/limerick.page').then( m => m.LimerickPage)
  },
  {
    path: 'cork',
    loadComponent: () => import('./cork/cork.page').then( m => m.CorkPage)
  },
  {
    path: 'sligo',
    loadComponent: () => import('./sligo/sligo.page').then( m => m.SligoPage)
  },
  {
    path: 'belfast',
    loadComponent: () => import('./belfast/belfast.page').then( m => m.BelfastPage)
  },
  {
    path: 'waterford',
    loadComponent: () => import('./waterford/waterford.page').then( m => m.WaterfordPage)
  },
  {
    path: 'athlone',
    loadComponent: () => import('./athlone/athlone.page').then( m => m.AthlonePage)
  },
];
