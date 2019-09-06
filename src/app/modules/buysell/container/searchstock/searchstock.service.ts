import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchstockService {
  private stocksUrl =
    'http://localhost:3000/stocks';

  private ordersUrl =
    'http://localhost:3000/orders';

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
  getProduct(): Observable<Stock[]> {
    const url = `${this.stocksUrl}`;
    return this.StockService.get<Stock[]>(url).pipe(
      tap(data => console.log('getProduct: ' + JSON.stringify(data)))
    );
  }

  getOrders(): Observable<Orders[]> {
    const url = `${this.ordersUrl}`;
    return this.StockService.get<Orders[]>(url).pipe(
      tap(data => console.log('getOrders: ' + JSON.stringify(data)))
    );
  }

  public getDisplayStocks(): Observable<Stock[]> {
    return this.StockService.get<Stock[]>
    (`http://localhost:3000/stocks`)
    //(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`)
  }
}

//export class Stock{
  // id: number
  // name: string
  // age: number

//   stockId: number
//   stockName: string
//   stockSymbol: string
//   stockPrice: number
//   weekHigh: number
//   weekLow: number

//     (this.stocksUrl);
//   }
// }

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


