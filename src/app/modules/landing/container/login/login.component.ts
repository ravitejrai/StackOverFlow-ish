import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageService, User } from './login-page.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { LayoutComponent } from '../layout/layout.component';
import { MatDialogRef } from '@angular/material';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /** UserInput from keyboard */
  email: string;
  password: string;

  /** Storing http get response */
  users: User[] = [];

   /** display error message */
  @Input() errorMessage: string;

   /** Injecting services */
  constructor(private router: Router, private loginPageService: LoginPageService, 
              public dialogRef: MatDialogRef<LayoutComponent>,
              private messageService :MessageService) { }

  ngOnInit() {
  }

  /** function triggers on Submit */
  login() {

    /**  calls the service which has http.get logic and subscribes to the response */
    this.loginPageService.getUserDetails().subscribe((data) =>{

      this.users = data;

      /**loops through the Json object untill matched record is found */
      this.users.forEach((element) => {
      
        if( (this.email == element.email) && (this.password == element.password) )  {

          console.log('element...',element)
          this.messageService.sendMessage(element);  //send response data to access globally
          this.dialogRef.close(); //closing login Dialog box
          this.router.navigate(['/dashboard']); //navigating to dashboard
          //break;

        } else {

          this.errorMessage = 'Email id or Password is incorrect. Please try again.';

        }
      })
    }, error => {

         console.log(error,'inside ......');
         this.handleError(error); //handling error

        })
  }
  
  private handleError(errorResponse: HttpErrorResponse) {
    // client side or server error
    if (errorResponse.error instanceof ErrorEvent) {
      // console.error("client side error",errorResponse.error.message);
      alert('client side error,please try again');
    } else {
      // console.error("Server side error",errorResponse);
      alert('server side error,please try again');
    }
    return throwError('there is problem with service');
  }

}
