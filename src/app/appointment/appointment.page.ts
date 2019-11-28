import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
	
	results: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  searchChanged(){
    this.results=this.authService.SearchData();
    
  }

}
