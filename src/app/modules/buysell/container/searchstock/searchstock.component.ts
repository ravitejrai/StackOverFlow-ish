import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchstockService, Stock } from './searchstock.service';

@Component({
  selector: 'app-searchstock',
  templateUrl: './searchstock.component.html',
  styleUrls: ['./searchstock.component.scss']
})
export class SearchstockComponent implements OnInit {

  static stockName: any;
  static email: any;
  stockItems: Stock[] = [];
  displayedColumns: any ;
  dataSource: any ;

  constructor(private StockList: SearchstockService) {}

  ngOnInit() {
    this.StockList.getDisplayStocks().subscribe(response => {
      this.stockItems = response;
      console.log(response);
      this.displayedColumns = ['id', 'name', 'postId'];
      this.dataSource = new MatTableDataSource(this.stockItems);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
