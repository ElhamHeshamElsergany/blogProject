import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient , private _router:Router) { 
    //handel page loading
    if(localStorage.getItem('userToken') != null){
      this.saveUserData();
    }

  }

  // save user data && decoded token
  userData = new BehaviorSubject(null);

  saveUserData() {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.userData.next(jwtDecode(encodedUserData));
    console.log(this.userData)

  }
  //logout
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['login'])
  }


  //login &&logup
  register(body: object): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/users/signup`, body)
  }
  login(body: object): Observable<any> {
    return this._HttpClient.post(`http://localhost:3000/users/signin`, body)
  }
}

