import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/members/appointment',
		pathMatch: 'full'
	},
	
		{
		path: '',
		component: TabsPage,
		children: [
			{
				path: 'appointment',
				children: [
					{
						path: '',
						loadChildren: () =>
						import('../appointment/appointment.module').then(m => m.AppointmentPageModule)
					}
				]
			},
	  
	  
			  {
				path: 'diagnosis',
				children: [
				  {
					path: '',
					loadChildren: () =>
					  import('../diagnosis/diagnosis.module').then(m => m.DiagnosisPageModule)
				  }
				]
			  }
		  ]
		}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
