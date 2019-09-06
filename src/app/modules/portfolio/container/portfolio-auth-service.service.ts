import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAuthServiceService {
  email = '';

  constructor(private http:HttpClient, private user:MessageService) {
    this.user.getMessage().subscribe((data) => {
      this.email = data.tabledata.email;
    });
   }



  updateUserDetails(password, firstname, lastname, phonenumber, ssn ){
    //   const httpOptions = {
    //   headers : new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization' : 'my-auth-token'
    //   })
    // };
      const putData = { 
        password:password,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        ssn: ssn
      };
      return this.http.put(`http://localhost:3000/users?email=${this.email}`,putData)
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