import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  getUserDetails(email, password){
    const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'my-auth-token'
    })
  };
    const postData = { 
      email:email,
      password:password,
    };
    return this.http.post(`http://localhost:3000/users`,postData)
  }
}

