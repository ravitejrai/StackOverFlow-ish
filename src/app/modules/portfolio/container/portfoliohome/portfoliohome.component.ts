import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.scss']
})
export class PortfoliohomeComponent implements OnInit {

  userForm : FormGroup;
  

  constructor( private fb: FormBuilder ) { }

  
  
  ngOnInit() {
    // this.DataService.getUserDetails().subscribe((response) => {
    //   this.users = response;
    //   console.log(response);
    // })
    
      this.userForm= this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      // email: ['', [Validators.required, Validators.email]],
      phone: ['',  [Validators.required, Validators.maxLength(10)]],
      
    });

    this.userForm.disable();

    this.userForm.patchValue({phone:'12345'});
    //this.userForm.setValue({phone : '12345'});
  }

  edit() {
    console.log(this.userForm);
    this.userForm.enable();
    
  }


}
