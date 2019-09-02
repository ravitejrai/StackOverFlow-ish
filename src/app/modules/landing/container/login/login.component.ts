import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageService } from './login-page.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private loginPageService: LoginPageService) { }

  ngOnInit() {
  }
  email : string;
  password : string;

  login():void{
    this.loginPageService.getUserDetails(this.email, this.password).subscribe((data : any) => { 
      console.log(data, "service response");
      console.log(data.email1,"inside post");
      console.log(data.password2);
      console.log(data.id);

      if(data.id == 4) {
        console.log(data.email1,"inside if");
        this.router.navigate(['/dashboard']);
      }else {
        alert("Invalid credentials");
      }
    },error =>{
      console.log(error,'inside ......');
      this.handleError(error);
    } )
  }
  private handleError(errorResponse : HttpErrorResponse) {
    //client side or server error
    if(errorResponse.error instanceof ErrorEvent){
      console.error("client side error",errorResponse.error.message);
      alert("client side error,please try again");
    }else {
      console.error("Server side error",errorResponse);
      alert("server side error,please try again");
    }
    return throwError('there is problem with service');
  }



}
