import { Routes } from '@angular/router';
    //admin

    //public
export const routes: Routes = [


    {
        path: 'public',
        loadComponent: () => import('./ui/public/container/component').then ((m) => m.PublicComponent),
    },


];

//https://learn-uniorz.web.app/public
//https://learn-uniorz.web.app/public/inicio
//https://learn-uniorz.web.app/public/programas
//https://learn-uniorz.web.app/public/programa/diplomado-en-adminstracion-de-servidroes :slug
//https://learn-uniorz.web.app/public/iniciar-sesion


//https://learn-uniorz.web.app/admin/panel
