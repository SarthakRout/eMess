import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { BehaviorSubject } from 'rxjs';
import { GenpwdResponse, LoginResponse } from '../models/auth.model';

export interface meals {

};
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  // baseUrl = 'http://127.0.0.1:8000'
  baseUrl = 'https://emess-iitk.herokuapp.com'
  username = '';
  isLoggedIn = false;
  currentUser = null;
  authToken = '';
  userType = '';
  hallmeals = {};
  dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(
    private http: HttpClient,
    private router: Router) {
    }

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
          alert("Login Successful");
          this.username = username
          this.isLoggedIn = true;
          this.currentUser = res.userInfo;
          this.authToken = res.authToken;
          this.userType = res.userType;
          this.hallmeals = {};
          this.dataSubject.next(this.hallmeals);
          if (this.userType === 'student') {
            this.router.navigate(['/', 'student']);
          } else if (this.userType === 'messAdmin') {
            this.router.navigate(['/', 'messadmin']);
          } else {
            this.router.navigate(['/', 'auth']);
          }
          // Redirect to student/admin home page
        } else {
          if (res.code === 'invalid_username') {
            console.log('Invalid Username', res);
            alert("Invalid username");
          } else {
            console.log('Invalid Password', res);
            alert("Invalid password");
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
          alert("Password generated successfully! Check your mail");
          // Show popup that password has been generated successfully.
          // redirect to login page
        } else {
          if (res.code === 'invalid_roll') {
            console.log('Invalid roll', res);
            alert("Invalid roll number")
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
          console.log('Logged out');
          this.username = null;
          this.currentUser = null;
          this.authToken = null;
          this.userType = null;
          this.hallmeals = {};
          this.dataSubject.next(this.hallmeals);
          this.router.navigate(['/', 'auth']);
        } else {
          console.log(res);
          this.username = null;
          this.currentUser = null;
          this.authToken = null;
          this.userType = null;
          this.hallmeals = {};
          this.dataSubject.next(this.hallmeals);
          this.router.navigate(['/', 'auth']);
        }
      },
      (err) => {
        console.log(err);
        this.username = null;
        this.currentUser = null;
        this.authToken = null;
        this.userType = null;
        this.hallmeals = {};
        this.dataSubject.next(this.hallmeals);
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
          this.hallmeals = {};
          this.dataSubject.next(this.hallmeals);
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

  async getextras(hall: string){
    const username = this.username;
    const authToken = this.authToken;
    if (username == null || authToken == null || !(hall)) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    await this.http.post(
      this.baseUrl + '/api/extras',
      {
        username,
        authToken,
        hall
      },
      httpOptions
    ).subscribe(
      (res:any) => {
        if(res.code == 'success'){
          this.hallmeals[hall] = res.data;
          // this.dataSubject.next(this.hallmeals[hall]);
        } else {
          console.log("Error", res);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  async updateExtra(
    meal : any,
    extra: any
  ){
    const username = this.username;
    const authToken = this.authToken;
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
      this.baseUrl + '/api/updextras',
      {
        username,
        authToken,
        extra,
      },
      httpOptions
    ).subscribe(
      async (res:any) => {
        if(res.code == 'success'){
          await this.getextras(meal['hall']);
          this.dataSubject.next(this.hallmeals);
        } else {
          console.log("Err", res);
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  async addExtra(
    meal : any,
    extra: any
  ){
    const username = this.username;
    const authToken = this.authToken;
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
      this.baseUrl + '/api/addextras',
      {
        username,
        authToken,
        meal,
        extra,
      },
      httpOptions
    ).subscribe(
      async (res:any) => {
        if(res.code == 'success'){
          console.log("Added extra item")
          await this.getextras(meal['hall']);
          this.dataSubject.next(this.hallmeals);
          console.log("Sent next message")
        } else {
          console.log("Err", res);
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  async deleteExtra(
    hall:string,
    extra: any
  ){
    const username = this.username;
    const authToken = this.authToken;
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
      this.baseUrl + '/api/deleteextras',
      {
        username,
        authToken,
        extra,
      },
      httpOptions
    ).subscribe(
      async (res: any) => {
        if(res.code == 'success'){
          await this.getextras(hall);
          this.dataSubject.next(this.hallmeals);
        } else {
          console.log("Err", res);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  async bookExtra(
    extra: any,
    quantity: number
  ){
    const username = this.username;
    const authToken = this.authToken;
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
      this.baseUrl + '/api/book',
      {
        username,
        authToken,
        extra,
        quantity
      },
      httpOptions
    ).subscribe(
      async (res: any) => {
        if(res.code == 'success'){
          console.log("Booked successfully");
          alert("Booked Successfully");
        } else {
          console.log("Err", res);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getOrders(){
    const username = this.username;
    const authToken = this.authToken;
    if (username == null || authToken == null ) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    return this.http.post(
      this.baseUrl + '/api/orders',
      {
        username,
        authToken,
      },
      httpOptions
    )
  }

  async deleteOrder(order){
    const username = this.username;
    const authToken = this.authToken;
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
      this.baseUrl + '/api/deleteorder',
      {
        username,
        authToken,
        order,
      },
      httpOptions
    ).subscribe(
      async (res: any) => {
        if(res.code == 'success'){
          this.dataSubject.next(true);
          console.log("Deleted successfully");
        } else {
          console.log("Err", res);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  async updateOrder(
    order
  ){
    const username = this.username;
    const authToken = this.authToken;
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
      this.baseUrl + '/api/updateorder',
      {
        username,
        authToken,
        order,
      },
      httpOptions
    ).subscribe(
      async (res: any) => {
        if(res.code == 'success'){
          this.dataSubject.next(true);
          console.log("Updated successfully");
        } else {
          console.log("Err", res);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
  async getTot(hall? : string){
    const username = this.username;
    const authToken = this.authToken;
    if (username == null || authToken == null ) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    return this.http.post(
      this.baseUrl + '/api/total',
      {
        username,
        authToken,
        hall
      },
      httpOptions
    )
  }
  async search(
    hall, extra_name, date
  ){
    const username = this.username;
    const authToken = this.authToken;
    if (username == null || authToken == null ) {
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': this.getCookie('csrftoken'),
      }),
      withCredentials: true
    };
    return this.http.post(
      this.baseUrl + '/api/search',
      {
        username,
        authToken,
        hall,
        extra_name,
        date
      },
      httpOptions
    )
  }
}
