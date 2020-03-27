import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/board',
    pathMatch: 'full'
  },
  {
    path: 'board',
    loadChildren: () =>
      import('@modules/board/board.module').then(m => m.BoardModule)
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
