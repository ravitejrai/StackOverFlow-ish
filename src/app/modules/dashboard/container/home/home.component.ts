import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
    // const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    // this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo',{ headers: Headers }).subscribe(
    //   (data)=>{
    //     console.log(data)
    //   }
    // ) 

  }

}
