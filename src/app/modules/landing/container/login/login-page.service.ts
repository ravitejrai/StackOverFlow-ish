import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http : HttpClient, private router : Router) { }
  getUserDetails():Observable<User[]>{ 
    return this.http.get<User[]>('http://localhost:3000/users')
  }


  // getUserDetails(email, password) {
  //   const postData = { email1: email, password2 : password };
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' ,
  //                                     'email': '',
  //                                     'password':'' });
                                      
  //   return this.http.post( `https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`, postData,
  //                           { headers: new HttpHeaders({
  //                             'Content-Type': 'application/json' ,
  //                             'email': postData.email1,
  //                             'password':postData.password2     
  //                             }) 
  //                           })
  //                               }
}
export class User {
  email: string;
  password: string
  firstName: string;
  lastName: string;
  phone: string
  ssn: string;
  accountvalue: string;
}