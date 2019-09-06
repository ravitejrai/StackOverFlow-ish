import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchstockService {
  private stocksUrl ='http://localhost:3000/stocks';
  private ordersUrl ='http://localhost:3000/orders';
  name: any;
  id: any;

  /**
     * Parameterized constructor to fetch the backend data
     * @param StockService The HttpClient to test the backend database
     * @param http used for adding stocks
     */

  constructor(private StockService: HttpClient, private http: HttpClient) {}

    

    /**
     * This function returns the data from the fake json
     * server. It uses the stocksUrl and makes a get Request
     * to get the data which is then used to render on the view
     */
    getProduct(): Observable < Stock[] > {
      const url = `${this.stocksUrl}`;
      return this.StockService.get<Stock[]>(url).pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data)))
      );
    }

    getOrders(): Observable < Orders[] > {
      const url = `${this.ordersUrl}`;
      return this.StockService.get<Orders[]>(url).pipe(
        tap(data => console.log('getOrders: ' + JSON.stringify(data)))
      );
    }

  public getDisplayStocks(): Observable<Stock[]> {
    return this.StockService.get<Stock[]>
      (this.stocksUrl);
  }

  public buyStocks(userEmail, stockId, name, quantity, price, value,accountValue,id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.id = id
    const postData = {
      email: userEmail,
      stockid: stockId,
      name: name,
      quantity: quantity,
      price: price,
      value: value,
    };
    return this.http.put(`http://localhost:3000/orders/${this.id}`, postData)
  }

  public updateAccount(accountValue,id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.id = id;
    const putAccount = {
      amount : accountValue,
    };
    return this.http.patch(`http://localhost:3000/users/${this.id}`, putAccount)
  }

  public sellStocks(userEmail, stockId, name, quantity, price, value,id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.id = id;
    const patchData = {
      email: userEmail,
      stockid: stockId,
      name: name,
      quantity: quantity,
      price: price,
      value: value,
    };
    return this.http.patch(`http://localhost:3000/orders/${this.id}`, patchData,httpOptions)
  }
}


export class Stock {
  id: number;
  name: string;
  postId: number;
}

export class Orders {
  email: string;
  stockid: number;
  name: string;
  quantity: number;
  price: number;
  value: number;
}


