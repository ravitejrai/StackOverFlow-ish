import { Component, OnInit } from '@angular/core';
import { PortfolioAuthServiceService , Stock } from '../portfolio-auth-service.service';
import { element } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stockportfolio',
  templateUrl: './stockportfolio.component.html',
  styleUrls: ['./stockportfolio.component.scss']
})
export class StockportfolioComponent implements OnInit {
  stocks$:Observable<Stock[]>;
  constructor(  private DataService:PortfolioAuthServiceService) { }

  ngOnInit() {
    this.stocks$ = this.DataService.getStockDetails();
    this.stocks$.subscribe((data) => {
      if(data.length ==0) {
        document.getElementById('header').className="disable";
        alert("No Stocks available");
      } else {
        document.getElementById('header').className="enable";
      }
      //console.log(data);
    })
  }

  calculateTotal(price,quantity) {
    return price*quantity;
  }

}
