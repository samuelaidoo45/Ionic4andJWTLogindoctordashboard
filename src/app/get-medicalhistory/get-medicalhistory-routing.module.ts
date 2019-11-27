import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetMedicalhistoryPage } from './get-medicalhistory.page';

const routes: Routes = [
  {
    path: '',
    component: GetMedicalhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetMedicalhistoryPageRoutingModule {}
