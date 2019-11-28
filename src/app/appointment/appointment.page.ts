import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
	
	public results:any =[] ;

  constructor(private authService: AuthService) { 
	this.results = '';
  }

  ngOnInit() {
  }
  
  search(){
    this.results=this.authService.SearchData().subscribe((data)=>{
		var anyData = <any>data;
		this.results = anyData.data;
  });
  }

}
