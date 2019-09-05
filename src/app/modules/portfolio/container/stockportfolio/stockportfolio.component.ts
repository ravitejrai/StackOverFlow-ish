import { Component, OnInit } from '@angular/core';
import { PortfolioAuthServiceService , Stock } from '../portfolio-auth-service.service';

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
      console.log(data);
    })
  }

}
