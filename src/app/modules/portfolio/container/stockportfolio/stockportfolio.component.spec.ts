import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatExpansionModule} from '@angular/material/expansion';
import { StockportfolioComponent } from './stockportfolio.component';
import { PortfolioAuthServiceService } from '../portfolio-auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

// describe('StockportfolioComponent', () => {
//   let component: StockportfolioComponent;
//   let fixture: ComponentFixture<StockportfolioComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ StockportfolioComponent ],
//       imports:[MatExpansionModule,HttpClientModule],
//       providers:[PortfolioAuthServiceService]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(StockportfolioComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

// });

describe('Testing Stockportfolio', () => {
  let cmp: StockportfolioComponent;

  beforeEach(() => {
    cmp = new StockportfolioComponent(fakePortfolioService);
  });

  const fakeStock = 
    {
      "email": "tom@gmail.com",
      "stockid": "1",
      "name": "Apple",
      "quantity": "5",
      "price": "100",
      "value": "500",
      "id": "1"
    }

  const fakePortfolioService = {
    getStockDetails: () => of([fakeStock]),
    productsUrl: '0',
    handleError: err => { },
    http:{}
  } as any;

  it('Get data through service', () => {
    cmp.ngOnInit();
    cmp.stocks$.subscribe((data) => {
      console.log(data[0]);
      expect(data[0]).toEqual(fakeStock);
    })
  });

});
