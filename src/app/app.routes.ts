import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'inicio', loadComponent: () => import('./features/home/home')
        .then(m => m.Home)
    },
    { 
        path: 'misproyectos', loadComponent: () => import('./features/mis-proyectos/mis-proyectos')
        .then(m => m.MisProyectos)
    },
    {
        path: 'sobremi', loadComponent: () => import('./features/sobre-mi/sobre-mi')
        .then(m => m.SobreMi)
    },
    {
        path: 'contacto', loadComponent: () => import('./features/contacto/contacto')
        .then(m => m.Contacto)
    },
    {
        path: 'habilidades', loadComponent: () => import('./features/habilidades/habilidades')
        .then(m => m.Habilidades)
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full' 
    },
    {
        path: '**',
        redirectTo: '/inicio'
    }
];
