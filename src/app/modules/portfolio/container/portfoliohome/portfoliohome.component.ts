import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.scss']
})
export class PortfoliohomeComponent implements OnInit {

  userForm : FormGroup;
  private isButtonVisible = true;
  
  

  constructor( private fb: FormBuilder, private DataService: MessageService ) { }

  
  
  ngOnInit() {


    this.userForm= this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required]],
       ssn: ['', [Validators.required]],
       accountValue: ['', [Validators.required]],
      phone: ['',  [Validators.required, Validators.maxLength(10)]],
      
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
      //  this.firstName=data.tabledata.firstName;
    });
    // this.DataService.getUserDetails().subscribe((response) => {
    //   this.users = response;
    //   console.log(response);
    // })
    
      

    this.userForm.disable();

    // this.userForm.patchValue({phone:'12345'});
    //this.userForm.setValue({phone : '12345'});
  }

  edit() {
    console.log(this.userForm);
    this.userForm.enable();
    this.userForm.controls['accountValue'].disable();
    this.userForm.controls['email'].disable();
    this
  }


}
