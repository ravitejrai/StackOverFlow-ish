import { Component, OnInit } from '@angular/core';
import { PortfolioAuthServiceService , Stock } from '../portfolio-auth-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-stockportfolio',
  templateUrl: './stockportfolio.component.html',
  styleUrls: ['./stockportfolio.component.scss']
})
export class StockportfolioComponent implements OnInit {

  stocks:Stock[]=[];
  constructor(  private DataService:PortfolioAuthServiceService) { }

  ngOnInit() {
    this.DataService.getStockDetails().subscribe((data) => {
      this.stocks=data;
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
