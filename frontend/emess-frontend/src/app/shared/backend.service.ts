import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { GenpwdResponse, LoginResponse } from '../models/auth.model';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  baseUrl = 'http://127.0.0.1:8000'
  username = '';
  isLoggedIn = false;
  currentUser = null;
  authToken = '';
  userType = '';
  constructor(
    private http: HttpClient,
    private router: Router) {}

  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  async login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    await this.http.post(
      this.baseUrl + '/api/login',
      {
        username,
        password
      },
      httpOptions
    ).subscribe(
      (res: LoginResponse ) => {
        if (res.code === 'success') {
          console.log('Login Successful', res);
          this.username = username
          this.isLoggedIn = true;
          this.currentUser = res.userInfo;
          this.authToken = res.authToken;
          this.userType = res.userType;
          if (this.userType === 'student') {
            this.router.navigate(['/', 'student']);
          } else if (this.userType === 'messadmin') {
            this.router.navigate(['/', 'messadmin']);
          } else {
            this.router.navigate(['/', 'auth']);
          }
          // Redirect to student/admin home page
        } else {
          if (res.code === 'invalid_username') {
            console.log('Invalid Username', res);
          } else {
            console.log('Invalid Password', res);
          }
          // Show a popup under the login button that login failed
          // Don't redirect
        }
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }

  async genpwd(username: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    await this.http.post(
      this.baseUrl + '/api/getpwd',
      {
        username,
      },
      httpOptions
    ).subscribe(
      (res: GenpwdResponse) => {
        if (res.code === 'success') {
          console.log('Password successfully generated!', res);
          // Show popup that password has been generated successfully.
          // redirect to login page
        } else {
          if (res.code === 'invalid_roll') {
            console.log('Invalid roll', res);
            // Let the user try again
            // Say that roll number is invalid
          } else {
            // Unknown error
            console.log(res);
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async logout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    // console.log(stringify(this.username), stringify(this.authToken))
    await this.http.post(
      this.baseUrl + '/api/logout',
      {
        username: this.username,
        authToken: this.authToken
      },
      httpOptions
    ).subscribe(
      (res : any) => {
        if(res.code == 'success') {
          this.username = null;
          this.currentUser = null;
          this.authToken = null;
          this.userType = null;
          console.log('Logged out')
          this.router.navigate(['/', 'auth']);
        } else {
          console.log(res);
          this.router.navigate(['/', 'auth']);
        }
      },
      (err) => {
        console.log(err);
        this.router.navigate(['/', 'auth']);
      }
    )
  }

  async autologin(){
    const username = this.getCookie('username')
    const authToken = this.getCookie('authToken')
    if (username == null || authToken == null ) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    await this.http.post(
      this.baseUrl + '/api/autologin',
      {
        username,
        authToken
      },
      httpOptions
    ).subscribe(
      (res: any) => {
        if(res.code == 'success'){
          this.username = username
          this.currentUser = res.userInfo;
          this.authToken = authToken;
          this.userType = res.userType;
          if(this.userType == 'student'){
            this.router.navigate(['/', 'student']);
          } else {
            this.router.navigate(['/', 'messadmin']);
          }
        } else {
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
