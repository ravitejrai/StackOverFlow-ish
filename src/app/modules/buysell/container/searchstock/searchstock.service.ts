import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchstockService {

  constructor(private StockService: HttpClient) { 

  }

  public getDisplayStocks(): Observable<Stock[]>{
    return this.StockService.get<Stock[]>
    (`http://localhost:3000/stocks`)
    //(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`)
  }
}

export class Stock{
  // id: number
  // name: string
  // age: number

  stockId: number
  stockName: string
  stockSymbol: string
  stockPrice: number
  weekHigh: number
  weekLow: number

}


