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



  updateUserDetails(email, password, firstname, lastname, phonenumber, ssn, creditcardnumber, date, amount, cvv ){
      const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
      const putData = { 
        email:email,
        password:password,
        firstname: firstname,
        lastname: lastname,
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
}


/* Defines the product entity */
export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  ssn: string;
  phonenumber: string;
}

export class Stock {
  email: string;
  stockid: string;
  name: string;
  quantity: string;
  price: string;
  value: string;
}