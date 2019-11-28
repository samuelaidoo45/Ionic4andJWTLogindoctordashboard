import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap,catchError } from  'rxjs/operators';
import { Observable, BehaviorSubject,from, of  } from  'rxjs';

import { Storage } from  '@ionic/storage';
import { User } from  './user';
import { AuthResponse } from  './auth-response';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { take, map, switchMap } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";



 const helper = new JwtHelperService();

 
//const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})

export class AuthService  implements CanActivate {
 
  //url = environment.url;
  //user = null;
  //authenticationState = new BehaviorSubject(false);
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  
  AUTH_SERVER_ADDRESS:  string  =  'https://virtual-healthcare.herokuapp.com';
  authSubject  =  new  BehaviorSubject(false);

  

 
 
 // constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
   // private plt: Platform, private alertController: AlertController) {
    //this.plt.ready().then(() => {
      //this.checkToken();
    //});
  //}
  constructor(private  httpClient:  HttpClient,    private router: Router,private plt: Platform
,private  storage:  Storage, private alertController:AlertController,private auth: AuthService) {
		this.loadStoredToken();  
	}
  
  loadStoredToken() {
    let platformObs = from(this.plt.ready());
 
    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get("ACCESS_TOKEN"));
      }),
      map(token => {
        if (token) {
          let decoded = helper.decodeToken(token); 
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
	}
  
   canActivate(): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          this.alertController.create({
            header: 'Unauthorized',
            message: 'You are not allowed to access that page.',
            buttons: ['OK']
          }).then(alert => alert.present());
 
          this.router.navigateByUrl('/');
          return false;
        } else {
          return true;
        }
      })
    );
  }
	 getUser() {
    return this.userData.getValue();
  }
/* 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }*/
 
  
 /*
  login(credentials) {
	  const httpOptions = {
	headers: new HttpHeaders({
    'Accept': 'application/json'
  })
};
      
    return this.http.post('https://virtual-healthcare-herokuapp.com/oauth/token', 
	{
		"grant_type":"password",
		"username" : "mudashiruagm@email.com",
		"password" : "vhealth123",
		"client_id" : "2",
		"client_secret" : "Z74s1YLfKaF3WxRYhO8feG42vY1zqmr7HNCX7Nh8",
		"provider" : "doctors"
		},
	httpOptions)
      .pipe(
        tap(res => {
			console.log('Does code in this block even runs');
          this.storage.set(TOKEN_KEY, res['access_token']);
          this.user = this.helper.decodeToken(res['access_token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
		  console.log('What the heck is happening ');
          this.showAlert(e.error.msg);
          throw new Error(e);
		  return of(false);
        })
      );
  }*/
  
   login(credentials): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/oauth/token`,credentials).pipe(
      tap(async (res: AuthResponse) => {
			console.log(res['access_token']);
			
        if (res) {
          await this.storage.set("ACCESS_TOKEN", res['access_token']);
          await this.storage.set("EXPIRES_IN", res['expires_in']);
          this.authSubject.next(true);
        }
		 this.router.navigateByUrl('/menu');

      },err => {
		  let alert = this.alertController.create({
			message: '',
			header: 'Login Failed, Try Again',
			buttons: ['OK']
		});
		alert.then(alert => alert.present());
	  })
		
	   
    );
  }
  
  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }
  
   isLoggedIn() {
    return this.authSubject.value;
  }
  
   url = 'http://virtual-healthcare.herokuapp.com/api/doctor/';
  


  SearchData(): Observable<any> {
    return this.http.get(url)
      .pipe(
        map(results => {
          console.log('RAW: ', results);
          return results['Search'];
        })
      );
  }
 /*
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }*/
	
}