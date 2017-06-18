import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventModal } from './event-modal';

@NgModule({
  declarations: [
    EventModal,
  ],
  imports: [
    IonicPageModule.forChild(EventModal),
  ],
  exports: [
    EventModal
  ]
})
export class EventModalModule {}
