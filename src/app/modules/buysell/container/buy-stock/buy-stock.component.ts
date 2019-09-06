import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControl,NgForm } from '@angular/forms';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import {filter} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';
import { SearchstockService, Stock } from "../searchstock/searchstock.service";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-buy-stock',
  templateUrl: './buy-stock.component.html',
  styleUrls: ['./buy-stock.component.scss']
})
export class BuyStockComponent implements OnInit {
  buyForm: FormGroup;
  disabled: any;
  animal: any;
  type: string;
  hide : boolean; 
  values: any;
  presentUrl: any;
  errorMessage : string;
  remainingBal : number;
  stockId : number;
  email: any;
  name: any;
  price: any;
  param: string;
  emailId: unknown;
  accountValue: unknown;
  id: unknown;

  // logic for checking the url link whether it's a buy or sell
  constructor(private fb: FormBuilder,public dialog: MatDialog,private updateaccount: SearchstockService,private router: Router,private StockAdd: SearchstockService,private Stocksell: SearchstockService, private order: SearchstockService,private route: ActivatedRoute  ) { 
      router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe(event => {
        this.param = this.route.snapshot.paramMap.get('name');
          console.log(event.url);
          this.presentUrl = event.url;
          if(event.url == `/dashboard/buysell/home/${this.param}/info/buy`){
            this.hide = true;
          }else if(event.url ==`/dashboard/buysell/home/${this.param}/info/sell`){
            this.hide = false;
          }
      });
  }
  // To validate the input field and to even check if total price is less than remaining balance when buying and checking input less or equal  than amount of stocks they have when selling a particular stocks
  onKey(event: any) { // without type info
    this.values = +event.target.value;
    if(this.presentUrl == '/dashboard/buysell/home/buy/id'){
      // if((this.values*100) > this.remainingBal){
      //   this.errorMessage = "Value more than remaining Balance";
      // }
      if(this.values == ('e' || 'E')){
        this.errorMessage = "it's an inavalid Number";
        console.log(this.errorMessage);

      }
      if(this.values % 1 !== 0){
        this.errorMessage = "Number should be an integer";
        console.log(this.errorMessage);
      }
    }else if(event.url =='sell/:id'){
      this.hide = false;
    }
  }

 //to open dialog once user clicks on buy
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {name: this.type, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result == 'true'){
          this.StockAdd.buyStocks(this.emailId,'1',this.param,this.buyForm.controls['quantity'].value,this.price,this.buyForm.controls['quantity'].value * this.price,this.accountValue,this.id
            // this.email,this.stockId,this.name,
            // this.buyForm.controls['quantity'].value,
            // this.price,this.values
     
        ).subscribe((data)=>{
            
            alert("Stocks bought Sucessful !!");
         });
         this.updateaccount.updateAccount(5000,this.id).subscribe((data)=>{
            
          alert("Account updated Sucessful !!");
       });

        console.log('stocks are bought');
        // route to portfolio
        
      }
      console.log(result);
    });
  };
  //logic for selling the code
   sellStock(quant : number) : void {
    this.Stocksell.sellStocks(this.emailId,'1',this.param,this.buyForm.controls['quantity'].value,'100','500',this.id
            // this.email,this.stockId,this.name,
            // this.buyForm.controls['quantity'].value,
            // this.price,this.values
     
        ).subscribe((data)=>{
            alert("Stocks Sold Sucessful !!");
           
         });
   }
 

  ngOnInit() {
    
    this.param = this.route.snapshot.paramMap.get('name');
    this.order.getOrders(
      ).subscribe((data)=>{
    alert("Stocks found Sucessful !!");
   
    });

    const user = JSON.parse(localStorage.getItem('testObject'))
    console.log(user,"**after**")
    Object.entries(user).forEach(
      ([key, value]) => {
        switch(key) {
          case "email":
              this.emailId = value
              break;
          case "amount":
                this.accountValue = value
                break;
          case "id":
                this.id = value
                break;
        }

      });

    this.buyForm = this.fb.group({
      quantity: ['',[Validators.required]],
      price: [''],
    });

  }

}
