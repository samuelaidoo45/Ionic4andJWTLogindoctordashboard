import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveAppointmentPageRoutingModule } from './approve-appointment-routing.module';

import { ApproveAppointmentPage } from './approve-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveAppointmentPageRoutingModule
  ],
  declarations: [ApproveAppointmentPage]
})
export class ApproveAppointmentPageModule {}
