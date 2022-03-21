import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emess-frontend';

  constructor(public http: HttpClient) {

  }
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

  CallAPI(){
    let csrftoken = this.getCookie('csrftoken')
    let data = {
      'username' : '190772',
      'password_hash' : 'dfg',
      'email' : 'sarthak2024@gmail.com',
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'X-CSRFToken': csrftoken,
      }),
      withCredentials: true
    }
    this.http.post(
      'http://127.0.0.1:8000/api/signup',
      data,
      httpOptions
      ).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
