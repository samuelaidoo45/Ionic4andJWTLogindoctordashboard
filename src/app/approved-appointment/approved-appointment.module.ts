import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApprovedAppointmentPageRoutingModule } from './approved-appointment-routing.module';

import { ApprovedAppointmentPage } from './approved-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApprovedAppointmentPageRoutingModule
  ],
  declarations: [ApprovedAppointmentPage]
})
export class ApprovedAppointmentPageModule {}
