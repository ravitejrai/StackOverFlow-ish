import { Component, OnInit } from '@angular/core';
import { PortfolioAuthServiceService , User } from '../portfolio-auth-service.service';

@Component({
  selector: 'app-portfoliohome',
  templateUrl: './portfoliohome.component.html',
  styleUrls: ['./portfoliohome.component.scss']
})
export class PortfoliohomeComponent implements OnInit {

  users:User[]=[];
  constructor(  private DataService:PortfolioAuthServiceService) { }

  ngOnInit() {
    this.DataService.getUserDetails().subscribe((response) => {
      this.users = response;
      console.log(response);
    })
  }

}
