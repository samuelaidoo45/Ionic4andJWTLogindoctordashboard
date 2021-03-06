import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  credentialsForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
 
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
	  grant_type: ['password'],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
	  client_id: ['2'],
	  client_secret:['Z74s1YLfKaF3WxRYhO8feG42vY1zqmr7HNCX7Nh8'],
	  provider: ['doctors']
    });
  }
 
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe();
  }
 
  //register() {
    //this.authService.register(this.credentialsForm.value).subscribe(res => {
      // Call Login to automatically login the new user
      //this.authService.login(this.credentialsForm.value).subscribe();
    //});
  //}
 
}