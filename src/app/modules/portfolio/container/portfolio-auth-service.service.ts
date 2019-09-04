import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioAuthServiceService {

  constructor(private http:HttpClient) { }

  getUserDetails():Observable<User[]>{ 
    return this.http.get<User[]>('http://localhost:3000/users')
  }

  getStockDetails():Observable<Stock[]> {
    return this.http.get<Stock[]>('http://localhost:3000/stocks')
  }
}


/* Defines the product entity */
export class User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  ssn: string;
  phonenumber: string;
}

export class Stock {
  productname: string;
  numberofstock: string;
  soldout: string;
}