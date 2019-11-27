import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetMedicalhistoryPageRoutingModule } from './get-medicalhistory-routing.module';

import { GetMedicalhistoryPage } from './get-medicalhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetMedicalhistoryPageRoutingModule
  ],
  declarations: [GetMedicalhistoryPage]
})
export class GetMedicalhistoryPageModule {}
