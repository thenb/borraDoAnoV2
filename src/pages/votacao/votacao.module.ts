import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotacaoPage } from './votacao';

@NgModule({
  declarations: [
    VotacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(VotacaoPage),
  ],
  exports: [
    VotacaoPage
  ]
})
export class VotacaoPageModule {}
