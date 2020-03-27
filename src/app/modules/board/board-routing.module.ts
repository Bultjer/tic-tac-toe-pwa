import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent
  }
];
export const BoardRoutes = RouterModule.forChild(routes);
