import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageService, User } from './login-page.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { LayoutComponent } from '../layout/layout.component';
import { EventEmitter } from 'events';
import { MatDialogRef } from '@angular/material';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  @Input() errorMessage: string;

  constructor(private router: Router, private loginPageService: LoginPageService, 
              public dialogRef: MatDialogRef<LayoutComponent>,
              private messageService :MessageService) { }

  ngOnInit() {
  }
  users: User[] = [];
  login() {
    this.loginPageService.getUserDetails().subscribe((data) =>{
      this.users = data;
    //   console.log(data,"....1...")
    //   console.log(data[0],"....2...")
    //   console.log(this.users,".....3....")
    //  console.log(this.users[0],"......4.....")
    //   console.log(this.users[0].email,"......5.....")
      for (var i = 0; i < this.users.length; i++) { 
        if((this.email == this.users[i].email) && (this.password == this.users[i].password))  {
        //console.log(this.users[i]," users[i]....")
        this.messageService.sendMessage(this.users[i]);
        this.router.navigate(['/dashboard']);
        break;
        }
        else {
          this.errorMessage="invalid credentials"
        }

      }
    })
  }
  
  // login(): void {
  //   this.loginPageService.getUserDetails(this.email, this.password).subscribe((data: any) => {
  //     // console.log(data, "service response");
  //     // console.log(data.email1,"inside post");
  //     // console.log(data.password2);
  //     // console.log(data.id);
  //     if (data.id === 4) {
  //       // console.log(data.email1,"inside if");
  //       this.dialogRef.close();
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //   }, error => {
  //     // console.log(error,'inside ......');
  //     this.handleError(error);
  //   } );
  // }
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
