import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SearchstockService {
  private stocksUrl =
    'http://localhost:3000/stocks';
  stockName: string;

  /**
   * Parameterized constructor to fetch the backend data
   * @param StockService The HttpClient to test the backend database
   */
  constructor(private StockService: HttpClient) {}

  /**
   * This function returns the data from the fake json
   * server. It uses the stocksUrl and makes a get Request
   * to get the data which is then used to render on the view
   */
  getProduct(name: string): Observable<Stock[]> {
    this.stockName = name;
    return this.StockService.get<Stock[]>(`http://localhost:3000/stocks?name=${this.stockName}`).pipe(
      tap(data => console.log('getProduct: ' + JSON.stringify(data)))
    );
  }

 /**
  * This function returns the data from the fake json
  * server. It uses the stocksUrl and makes a get Request
  * to get the data which is then used to render on the view
  * @param name cannot be null
  */
  getOrders(name: string): Observable<Orders[]> {
    const user = JSON.parse(localStorage.getItem('testObject'));
    this.stockName = name;
    return this.StockService.get<Orders[]>(`http://localhost:3000/orders?name=${this.stockName}&email=${user.email}`).pipe(
      tap(data => console.log('getOrders: ' + JSON.stringify(data)))
    );
  }

  /**
   * This function returns the data from the fake json
   * server. It uses the stocksUrl and makes a get Request
   * to get the data which is then used to render on the view
   */
  public getDisplayStocks(): Observable<Stock[]> {
    return this.StockService.get<Stock[]>
    (this.stocksUrl);
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


