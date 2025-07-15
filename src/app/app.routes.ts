import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { breadcrumb: 'Главная' },
    },
    {
        path: 'organizers',
        loadComponent: () =>
            import('./features/organizers/organizers.component').then(
                (m) => m.OrganizersComponent,
            ),
        data: { breadcrumb: 'О лиге - Наша команда' },
    },
];
