import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GenpwdResponse, LoginResponse } from '../models/auth.model';

@Injectable()
export class BackendService {
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

  login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    return this.http.post(
      'http://127.0.0.1:8000/api/login',
      {
        username,
        password
      },
      httpOptions
    ).subscribe(
      (res: LoginResponse ) => {
        if (res.code === 'success') {
          console.log('Login Successful', res);
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

  genpwd(username: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    return this.http.post(
      'http://127.0.0.1:8000/api/getpwd',
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
            console.log('Invalid roll', res)
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

  logout() {
    console.log('Logout called!');
  }
}
