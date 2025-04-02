import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {
    path: 'form',
    loadComponent: () =>
      import('./features/components/form-number/form-number.component').then(
        (m) => m.FormComponent
      ),
  },
  { path: '**', redirectTo: '/form' },
];
