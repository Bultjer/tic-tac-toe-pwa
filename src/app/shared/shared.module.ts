import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule, NbButtonModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbThemeModule.forRoot({ name: 'cosmic' })
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbThemeModule,
  ]
})
export class SharedModule { }
