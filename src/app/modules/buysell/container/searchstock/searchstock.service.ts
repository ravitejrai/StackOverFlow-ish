import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchstockService {

  constructor(private StockService: HttpClient,private http:HttpClient) { 

  }

  public getDisplayStocks(): Observable<Stock[]>{
    return this.StockService.get<Stock[]>
    (`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`)
  }

  public buyStocks(userEmail,stockId,name,quantity,price,value){
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    };
      const postData = { 
        email:userEmail,
        stockid:stockId,
        name: name,
        quantity: quantity,
        price: price,
        value: value,
      };
      return this.http.post(`http://localhost:3000/orders`,postData)
  }
}


export class Stock{
  id: number
  name: string
  age: number

}


