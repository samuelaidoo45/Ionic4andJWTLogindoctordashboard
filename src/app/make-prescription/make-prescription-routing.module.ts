import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakePrescriptionPage } from './make-prescription.page';

const routes: Routes = [
  {
    path: '',
    component: MakePrescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakePrescriptionPageRoutingModule {}
