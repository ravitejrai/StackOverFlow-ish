import { Component, OnInit } from '@angular/core';
import { SearchstockService, Tag } from 'src/app/modules/dashboard/container/searchstock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stockItems: Tag[] = [];
  constructor(private StockList: SearchstockService) { }

  ngOnInit() {
    this.StockList.getQuestions().subscribe(response => {
      this.stockItems = response;
    });
  }

}
