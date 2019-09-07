import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAuthServiceService {
  email:any;
  id:any;

  constructor(private http:HttpClient) {
    const user = JSON.parse(localStorage.getItem('testObject'))
    //console.log(user,"**after**")
    Object.entries(user).forEach(
      ([key, value]) => {
        switch(key) {
          case "email":
              this.email = value;
              break;
          case "id":
              this.id = value;
        }

      });
   }



  updateUserDetails(email, password, firstName, lastName, phonenumber, ssn, creditcardnumber, date, amount, cvv ){
      const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
      const putData = { 
        email:email,
        password:password,
        firstName: firstName,
        lastName: lastName,
        phonenumber: phonenumber,
        ssn: ssn,
        creditCardNumber:creditcardnumber,
        date:date,
        amount:amount,
        cvv:cvv
      };
      return this.http.put(`http://localhost:3000/users/${this.id}`,putData,httpOptions)
    }

    getStockDetails():Observable<Stock[]> {
      //const email = "jsmith@virtusa.com"
      return this.http.get<Stock[]>(`http://localhost:3000/orders?email=${this.email}`)
    }

    getUserDetails():Observable<User> {
      return this.http.get<User>(`http://localhost:3000/users/${this.id}`)
    }
}


/* Defines the product entity */
export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phonenumber: string;
  ssn: string;
  creditCardNumber:string;
  date:string;
  amount:any;
  cvv:string;
  id:any
}

export class Stock {
  email: string;
  stockid: string;
  name: string;
  quantity: string;
  price: string;
  value: string;
}