import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveAppointmentPage } from './approve-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveAppointmentPageRoutingModule {}
