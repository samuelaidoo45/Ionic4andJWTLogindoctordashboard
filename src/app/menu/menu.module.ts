import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

const routes: Routes = [
	{
		path: '',
		component:MenuPage,
		children: [
			{
			path : 'first',
			loadChildren: 'src/app/appointment/appointment.module#AppointmentPageModule'
			},
			{
			path : 'second',
			loadChildren: 'src/app/diagnosis/diagnosis/diagnosis.module#DiagnosisPageModule'
			}
			
		]
	}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
