import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  getUserDetails(email, password, firstname, lastname, phonenumber, ssn,creditCardNumber ){
    const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'my-auth-token'
    })
  };
    const postData = { 
      email:email,
      password:password,
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      ssn: ssn,
      creditCardNumber: creditCardNumber

    };
    return this.http.post(`http://localhost:2000/users`,postData)
  }
}

