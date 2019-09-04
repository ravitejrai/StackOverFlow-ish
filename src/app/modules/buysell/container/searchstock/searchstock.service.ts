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
    (`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`)
  }
}

export class Stock{
  id: number
  name: string
  age: number

}
