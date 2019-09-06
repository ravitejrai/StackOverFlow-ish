import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAuthServiceService {

  constructor(private http:HttpClient, private user:MessageService) { }

  getUserDetails():Observable<User[]>{ 
    return this.http.get<User[]>('http://localhost:3000/users')
  }

  getStockDetails():Observable<Stock[]> {
    var email = '';
    this.user.getMessage().subscribe((data) => {
      email = data.tabledata.email;
    });
    //const email = "jsmith@virtusa.com"
    return this.http.get<Stock[]>(`http://localhost:3000/orders?email=${email}`)
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