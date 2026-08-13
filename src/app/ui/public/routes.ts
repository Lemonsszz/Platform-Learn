import { Routes } from '@angular/router';
    //admin

    //public
export const PublicRoutes: Routes = [


    {
        path: 'inicio',
        loadComponent: () => import('./pages/home/container/component').then ((m) => m.HomePublicComponent),
    },
    {
        path: 'iniciar-sesion',
        loadComponent: () => import('./pages/login/container/component').then ((m) => m.LoginPublicComponent),
    },


];