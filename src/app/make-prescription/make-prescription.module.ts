import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakePrescriptionPageRoutingModule } from './make-prescription-routing.module';

import { MakePrescriptionPage } from './make-prescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakePrescriptionPageRoutingModule
  ],
  declarations: [MakePrescriptionPage]
})
export class MakePrescriptionPageModule {}
