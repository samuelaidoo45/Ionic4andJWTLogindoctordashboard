import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteMedicalhistoryPageRoutingModule } from './write-medicalhistory-routing.module';

import { WriteMedicalhistoryPage } from './write-medicalhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteMedicalhistoryPageRoutingModule
  ],
  declarations: [WriteMedicalhistoryPage]
})
export class WriteMedicalhistoryPageModule {}
