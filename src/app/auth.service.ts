import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { expressionType } from '@angular/compiler/src/output/output_ast';

@Injectable({
providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  getUserDetails(email, password, firstName, lastName, phonenumber, ssn, creditCardNumber, date, amount, cvv ) {
    const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization : 'my-auth-token'
    })
  };
    const postData = {
      email:email,
      password:password,
      firstName: firstName,
      lastName: lastName,
      phonenumber: phonenumber,
      ssn: ssn,
      creditCardNumber: creditCardNumber,
      date: date,
      amount: amount,
      cvv: cvv
  };
    return this.http.post(`http://localhost:3000/users`, postData)
  }
}

