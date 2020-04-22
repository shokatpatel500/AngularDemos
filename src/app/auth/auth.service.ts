import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  private url='http://localhost:3000/api/common'
     headers = new HttpHeaders().set('Content-Type', 'application/json');

  register(register){
   return this.http.post(this.url +'/register',JSON.stringify(register),{headers:this.headers})
  }

  login(login){
    return this.http.post(this.url +'/login',JSON.stringify(login),{headers:this.headers})
  }
  
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
