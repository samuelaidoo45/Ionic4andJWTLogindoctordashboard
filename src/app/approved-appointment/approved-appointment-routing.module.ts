import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprovedAppointmentPage } from './approved-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApprovedAppointmentPageRoutingModule {}
