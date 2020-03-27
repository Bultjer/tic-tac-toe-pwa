import { NgModule } from '@angular/core';

import { BoardRoutes } from './board-routing.module';
import { BoardComponent } from './pages/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BoardRoutes,
    SharedModule
  ]
})
export class BoardModule { }
