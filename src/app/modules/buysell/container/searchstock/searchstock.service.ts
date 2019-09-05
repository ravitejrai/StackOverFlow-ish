import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchstockService {
  private stocksUrl =
    'https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/';

  private ordersUrl = 
    'https://github.com/Web2Integrators/onlinestock/blob/master/db.json/orders/';

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
    const test = this.StockService.get<Stock[]>(url);
    return this.StockService.get<Stock[]>(url).pipe(
      tap(data => console.log('getProduct: ' + JSON.stringify(data)))
    );
  }

  public getDisplayStocks(): Observable<Stock[]> {
    return this.StockService.get<Stock[]>
    (this.stocksUrl);
  }
}

export class Stock {
  id: number;
  name: string;
  age: number;
}
