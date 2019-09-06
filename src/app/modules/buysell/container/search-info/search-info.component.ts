import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchstockService, Orders } from '../searchstock/searchstock.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-buy-sell-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.scss']
})
export class SearchInfoComponent implements OnInit {
  orderItems: Orders[] = [];
  displayedOrderColumns: any;
  isDisabled = false;
  ordersDataSourceJson: any;

  /**
   * @param StockList The service for connecting with backend data
   * @param route This takes the id from the frontend to match it with
   * data from backend.
   */
  constructor(
    private StockList: SearchstockService,
    private route: ActivatedRoute, private router: Router  ) {}

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

 /**
  * This functions maps the returned data to columns in our
  * table and also calls the checkOrderResponse function which 
  * checks for the name and emailid.
  * @param name cannot be null
  */
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
   * Checks for the name to be present in the database, if present returns the info of that
   * stock else returns error msg to the console;
   * @param dataResponse cannot be null
   * @param id cannot be null
   */
  checkOrderResponse(dataResponse: any[], name: string) {
    if (dataResponse.length === 0 || dataResponse === null) {
      throw new Error('The response was empty or null');
    }
    for (const entry of dataResponse) {
        const result = new Array(entry);
        if (entry.quantity === 0) {
          this.isDisabled = true;
        }
        return result;
    }
  }
}
