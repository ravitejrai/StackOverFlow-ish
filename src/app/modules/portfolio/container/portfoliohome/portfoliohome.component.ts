import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MessageService } from 'src/app/message.service';
import { PortfolioAuthServiceService } from '../portfolio-auth-service.service';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.scss']
})
export class PortfoliohomeComponent implements OnInit {

  userForm : FormGroup;
  private isButtonVisible = true;
  enableFlag:Boolean;

  constructor( private fb: FormBuilder, private DataService: MessageService, private updateuser:PortfolioAuthServiceService) { 
    this.enableFlag= false;
  }

  
  
  ngOnInit() {


    this.userForm= this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required]],
       ssn: ['', [Validators.required]],
       accountValue: ['', [Validators.required]],
      phone: ['',  [Validators.required, Validators.maxLength(10)]],
      creditcardno: ['',  [Validators.required]],
      cvv: ['',  [Validators.required]],
      expirydate: ['',  [Validators.required]],

      
    });

    this.DataService.getMessage().subscribe((data)=> {
      console.log(data.tabledata.ssn);
      // this.userForm.patchValue({firstname:'abc'});
      this.userForm.patchValue({firstName:data.tabledata.firstName});
      this.userForm.patchValue({lastName:data.tabledata.lastName});
      this.userForm.patchValue({email:data.tabledata.email});
      this.userForm.patchValue({password:data.tabledata.password});
      this.userForm.patchValue({ssn:data.tabledata.ssn});
      this.userForm.patchValue({accountValue:data.tabledata.accountvalue});
      this.userForm.patchValue({phone:data.tabledata.phone});
      this.userForm.patchValue({creditcardno:data.tabledata.creditcardno});
      this.userForm.patchValue({cvv:data.tabledata.cvv});
      this.userForm.patchValue({expirydate:data.tabledata.expirydate});
      //  this.firstName=data.tabledata.firstName;
    });
    // this.DataService.getUserDetails().subscribe((response) => {
    //   this.users = response;
    //   console.log(response);
    // })
    
      

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
    this.enableFlag = true;
    document.getElementById('editButton').className = "disable";
    document.getElementById('saveButton').className = "enable";
    this.userForm.controls['accountValue'].disable();
    this.userForm.controls['email'].disable();
  }

  save() {
    console.log("entered save");
    this.updateuser.updateUserDetails(
      this.userForm.get('password').value,
      this.userForm.get('firstName').value,
      this.userForm.get('lastName').value,
      this.userForm.get('phone').value,
      this.userForm.get('ssn').value
   ).subscribe((data)=>{
       console.log("Entered save success function");
       alert("Registration Sucessful !!");
      //this.router.navigate(['/']);
    });
  }

  // isDisabled() : boolean {
  //   if(this.enableFlag) {
  //     document.getElementById('editButton').className = "disable";
  //     document.getElementById('saveButton').className = "enable";
  //   } else {
  //     document.getElementById('saveButton').className = "disable";
  //     document.getElementById('editButton').className = "enable";
  //   }
  //   return false;
  //  }

}





