import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchstockService, Orders } from '../searchstock/searchstock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-sell-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.scss']
})
export class SearchInfoComponent implements OnInit {
  orderItems: Orders[] = [];
  displayedOrderColumns: any;
  quantity;
  ordersDataSourceJson: any;

  /**
   * @param StockList The service for connecting with backend data
   * @param route This takes the id from the frontend to match it with
   * data from backend.
   */
  constructor(
    private StockList: SearchstockService,
    private route: ActivatedRoute  ) {}

    /**
     * A callback method that is invoked immediately after the
     * default change detector has checked the directive's
     * data-bound properties for the first time, and before
     * any of the view or content children have been checked.
     * It is invoked only once when the directive is instantiated.
     */
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('name');
    if (param) {
      this.getOrder(param);
    }
  }

  getOrder(name: string) {
    this.StockList.getOrders().subscribe(response => {
      this.orderItems = response;
      console.log(this.orderItems);
      this.displayedOrderColumns = ['email', 'stockid', 'name', 'quantity', 'price', 'value'];
      this.ordersDataSourceJson = new MatTableDataSource(
        this.checkOrderResponse(this.orderItems, name)
      );
    });
  }

  /**
   * Checks for the id to be present in the database, if present returns the info of that
   * id else returns error msg to the console;
   * @param dataResponse cannot be null
   * @param id cannot be null
   */
  checkOrderResponse(dataResponse: any[], name: string) {
    if (dataResponse.length === 0 || dataResponse === null) {
      throw new Error('The response was empty or null');
    }
    for (const entry of dataResponse) {
      if (entry.name === name ) {
        const result = new Array(entry);
        return result;
      } else {
        continue;
      }
    }
  }
}
