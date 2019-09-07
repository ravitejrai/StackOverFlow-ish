import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MessageService } from 'src/app/message.service';
import { PortfolioAuthServiceService, User } from '../portfolio-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.scss']
})
export class PortfoliohomeComponent implements OnInit {
  user:User;
  userForm : FormGroup;
  private isButtonVisible = true;
  enableFlag:Boolean;

  constructor( private fb: FormBuilder, private service:PortfolioAuthServiceService, private router:Router) { 
    this.enableFlag= false;
  }

  
  
  ngOnInit() {


    this.userForm= this.fb.group({
      firstName: [''],
      lastName: [''],
       email: [''],
       password: ['', [Validators.required]],
       ssn: ['', [Validators.required]],
       accountValue: ['', [Validators.required]],
      phone: ['',  [Validators.required, Validators.maxLength(10)]],
      creditcardno: ['',  [Validators.required]],
      cvv: ['',  [Validators.required]],
      expirydate: ['',  [Validators.required]],
    });

    // const user = JSON.parse(localStorage.getItem('testObject'))
    // //console.log(user,"**after**")
    // Object.entries(user).forEach(
    //   ([key, value]) => {
    //     switch(key) {
    //       case "email":
    //           this.userForm.patchValue({email:value})
    //           break;
    //       case "firstName":
    //         this.userForm.patchValue({firstName:value})
    //             break;
    //       case "lastName":
    //         this.userForm.patchValue({lastName:value})
    //           break;
    //       case "password":
    //         this.userForm.patchValue({password:value})
    //           break;
    //       case "phonenumber":
    //         this.userForm.patchValue({phone:value})
    //           break;
    //       case "ssn":
    //         this.userForm.patchValue({ssn:value})
    //           break;
    //       case "creditCardNumber":
    //           this.userForm.patchValue({creditcardno:value})
    //             break;
    //       case "date":
    //           this.userForm.patchValue({expirydate:value});
    //             break;
    //       case "amount":
    //           this.userForm.patchValue({accountValue:value});
    //             break;
    //       case "cvv":
    //           this.userForm.patchValue({cvv:value});
    //             break;
    //     }

    //   });

    this.service.getUserDetails().subscribe((data) => {
      this.user = data;
      console.log(data,'on launch');
      this.userForm.patchValue({email:this.user.email});
      this.userForm.patchValue({firstName:this.user.firstName});
      this.userForm.patchValue({lastName:this.user.lastName});
      this.userForm.patchValue({password:this.user.password});
      this.userForm.patchValue({phone:this.user.phonenumber});
      this.userForm.patchValue({ssn:this.user.ssn});
      this.userForm.patchValue({creditcardno:this.user.creditCardNumber});
      this.userForm.patchValue({expirydate:this.user.date});
      this.userForm.patchValue({accountValue:this.user.amount});
      this.userForm.patchValue({cvv:this.user.cvv});
    });
    
    this.userForm.disable();
    this.enableFlag = false;
    document.getElementById('saveButton').className = "disable";
    document.getElementById('editButton').className = "enable";
    // this.userForm.patchValue({phone:'12345'});
    //this.userForm.setValue({phone : '12345'});
  }

  

  edit() {
   // console.log(this.userForm);
    this.userForm.enable();
    document.getElementById('editButton').className = "disable";
    document.getElementById('saveButton').className = "enable";
    this.userForm.controls['accountValue'].disable();
    this.userForm.controls['email'].disable();
  }

  save() {
    console.log("entered save");
    this.service.updateUserDetails(
      this.userForm.get('email').value,
      this.userForm.get('password').value,
      this.userForm.get('firstName').value,
      this.userForm.get('lastName').value,
      this.userForm.get('phone').value,
      this.userForm.get('ssn').value,
      this.userForm.get('creditcardno').value,
      this.userForm.get('expirydate').value,
      this.userForm.get('accountValue').value,
      this.userForm.get('cvv').value,
   ).subscribe((data)=>{
      this.userForm.disable();
      // console.log("Entered save success function");
      this.service.getUserDetails().subscribe((data)=> {
        console.log(data, 'get calll');
        localStorage.setItem('testObject',JSON.stringify(data));
        alert("User Details Sucessfully updated");
        this.router.navigateByUrl('/dashboard/portfolio/userportfolio');
      });
      
    });
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

}





