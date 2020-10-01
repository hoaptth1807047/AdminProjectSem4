import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/accounts/login'

  constructor(private http: HttpClient, private router: Router) { }

  doLogin(acc: Login) {
    return new Promise<any>((resolve, reject) => {
      let body = new HttpParams();
      body = body.set('email', acc.email);
      body = body.set('password', acc.password);
      this.http.post(this.loginUrl, body).subscribe(item => {
        console.log(item);
        this.router.navigate(['/dashboard']);
      }, (error) => console.log("",
        error))
    })
  }
}