import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }
  regDetailsForm = new FormGroup ({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    ssn: new FormControl('')
  })

  onRegitration(){
     this.auth.getUserDetails(
      this.regDetailsForm.get('email').value,
      this.regDetailsForm.get('password').value

   ).subscribe((data)=>{
      //  console.log("Entered reg function");
      this.router.navigate(["/login"]);

      
    });
  };




}
