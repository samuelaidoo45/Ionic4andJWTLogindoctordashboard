import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteMedicalhistoryPage } from './write-medicalhistory.page';

const routes: Routes = [
  {
    path: '',
    component: WriteMedicalhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteMedicalhistoryPageRoutingModule {}
