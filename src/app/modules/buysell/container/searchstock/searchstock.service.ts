import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
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
  stockName: string;

  /**
     * Parameterized constructor to fetch the backend data
     * @param StockService The HttpClient to test the backend database
     * @param http used for adding stocks
     */

  constructor(private StockService: HttpClient, private http: HttpClient) {}

   getOrders(name: string): Observable<Orders[]> {
     const user = JSON.parse(localStorage.getItem('testObject'));
     this.stockName = name;
    return this.StockService.get<Orders[]>(`http://localhost:3000/orders?name=${this.stockName}&email=${user.email}`).pipe(
       tap(data => console.log('getOrders: ' + JSON.stringify(data)))
     );
   }

  public getDisplayStocks(): Observable<Stock[]> {
    return this.StockService.get<Stock[]>
      (this.stocksUrl);
  }

  public getStocks(name): Observable<Stock[]> {
    this.stockName = name.replace(/"/g, '&quot;');;
    return this.StockService.get<Stock[]>
      (`http://localhost:3000/stocks?name= ${this.stockName}`);
  }

  public buyStocks(userEmail, stockId, name, quantity, price, value,id) {
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

  public buyStocksFirstTime(userEmail, stockId, name, quantity, price, value) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    const postData = {
      email: userEmail,
      stockid: stockId,
      name: name,
      quantity: quantity,
      price: price,
      value: value,
    };
      return this.http.post(`http://localhost:3000/orders`, postData)
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


