import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: any;
  flag = 0;
  users: any;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }
  regDetailsForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    ssn: new FormControl(''),
    creditCardNumber: new FormControl(''),
    date: new FormControl(''),
    cvv: new FormControl(''),
    amount: new FormControl('')
 })



 onRegitration(){
  this.auth.getDetails().subscribe((data: any[]) => {
    // tslint:disable-next-line: prefer-for-of
    for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      if (obj.email !==  this.regDetailsForm.get('email').value ) {

        this.auth.getUserDetails(
          this.regDetailsForm.get('email').value,
          this.regDetailsForm.get('password').value,
          this.regDetailsForm.get('firstName').value,
          this.regDetailsForm.get('lastName').value,
          this.regDetailsForm.get('phonenumber').value,
          this.regDetailsForm.get('ssn').value,
          this.regDetailsForm.get('creditCardNumber').value,
          this.regDetailsForm.get('date').value,
          this.regDetailsForm.get('cvv').value,
          this.regDetailsForm.get('amount').value

          ).subscribe((data)=>{
           alert("Registration Sucessful !!");
          this.router.navigate(['/']);

        }, error => {
          this.handleError(error); //handling error
 
         }
        );
        break;
      } else {
        alert('email already exists');
        break;
      }

    }
  })
};

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

ssnValidator() {
    var patt = new RegExp("\d{3}[\-]\d{2}[\-]\d{4}");
    var x = (<HTMLInputElement>document.getElementById("ssn"));
    var res = patt.test(x.value);
    if(!res){
     x.value = x.value
         .match(/\d*/g).join('')
         .match(/(\d{0,3})(\d{0,2})(\d{0,4})/).slice(1).join('-')
         .replace(/-*$/g, '');
    }
 }

 cardValidator() {
  var patt = new RegExp("\d{4}[\-]\d{4}[\-]\d{4}[\-]\d{4}");
  var x = (<HTMLInputElement>document.getElementById("card"));
  var res = patt.test(x.value);
  if(!res){
   x.value = x.value
       .match(/\d*/g).join('')
       .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/).slice(1).join('-')
       .replace(/-*$/g, '');
  }
}

cvvValidator() {
  var patt = new RegExp("\d{4}");
  var x = (<HTMLInputElement>document.getElementById("cvv"));
  var res = patt.test(x.value);
  if(!res){
   x.value = x.value
       .match(/\d*/g).join('')
       .match(/(\d{0,4})/).slice(1).join('-')
       .replace(/-*$/g, '');
  }
}

 phoneValidator() {
  var patt = new RegExp("\d{3}[\-]\d{3}[\-]\d{4}");
  var x = (<HTMLInputElement>document.getElementById('phone'));
  var res = patt.test(x.value);
  if(!res){
   x.value = x.value
       .match(/\d*/g).join('')
       .match(/(\d{0,3})(\d{0,3})(\d{0,4})/).slice(1).join('-')
       .replace(/-*$/g, '');
  }
}
}
