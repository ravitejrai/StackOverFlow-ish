import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { MatDialogRef } from '@angular/material';


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
    document.body.classList.add('bg-img');


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
  this.auth.getDetails().subscribe(data =>{
    console.log(data,"..........data...");
    for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      console.log(this.regDetailsForm.get('email').value,"...input..")
      console.log(obj.email,"....db email...")
      if(obj.email !=  this.regDetailsForm.get('email').value ){

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
           console.log("Entered reg function");
           alert("Registration Sucessful !!");
          this.router.navigate(['/']);

        });
        break;
      } else {
        alert('email already exists');
        break;
      }

    }
  })
};


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

 phoneValidator() {
  // tslint:disable-next-line: prefer-const
  var patt = new RegExp("\d{3}[\-]\d{3}[\-]\d{4}");
  var x = (<HTMLInputElement>document.getElementById('phone'));
  var res = patt.test(x.value);
  if (!res) {
   x.value = x.value
       .match(/\d*/g).join('')
       .match(/(\d{0,3})(\d{0,3})(\d{0,4})/).slice(1).join('-')
       .replace(/-*$/g, '');
  }
}
 }
