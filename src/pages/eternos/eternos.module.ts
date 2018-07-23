import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EternosPage } from './eternos';

@NgModule({
  declarations: [
    EternosPage,
  ],
  imports: [
    IonicPageModule.forChild(EternosPage),
  ],
  exports: [
    EternosPage
  ]
})
export class EternosPageModule {}
