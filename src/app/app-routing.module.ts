import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 //{ path: '', redirectTo: 'movies', pathMatch: 'full' },
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
	  
  //{ path: 'movies', loadChildren: './login/login.module#LoginPageModule' },
   //{ path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'appointment/:id',
    loadChildren: () => import('./approve-appointment/approve-appointment.module').then( m => m.ApproveAppointmentPageModule)
  },
  {
    path: 'approve-appointment',
    loadChildren: () => import('./approve-appointment/approve-appointment.module').then( m => m.ApproveAppointmentPageModule)
  },
  {
    path: 'diagnosis',
    loadChildren: () => import('./diagnosis/diagnosis.module').then( m => m.DiagnosisPageModule)
  },
  {
    path: 'approved-appointment',
    loadChildren: () => import('./approved-appointment/approved-appointment.module').then( m => m.ApprovedAppointmentPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'make-prescription',
    loadChildren: () => import('./make-prescription/make-prescription.module').then( m => m.MakePrescriptionPageModule)
  },
  {
    path: 'get-medicalhistory',
    loadChildren: () => import('./get-medicalhistory/get-medicalhistory.module').then( m => m.GetMedicalhistoryPageModule)
  },
  {
    path: 'write-medicalhistory',
    loadChildren: () => import('./write-medicalhistory/write-medicalhistory.module').then( m => m.WriteMedicalhistoryPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
