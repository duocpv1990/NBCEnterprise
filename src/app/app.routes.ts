import { Routes } from '@angular/router';
import { CiAuthGuard } from '@consult-indochina/auth';
import { AppGuard } from './utils/guards/app.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
    canActivate: [CiAuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
];
