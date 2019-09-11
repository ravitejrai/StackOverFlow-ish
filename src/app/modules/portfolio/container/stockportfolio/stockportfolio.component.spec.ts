import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatExpansionModule} from '@angular/material/expansion';
import { StockportfolioComponent } from './stockportfolio.component';
import { PortfolioAuthServiceService, Stock } from '../portfolio-auth-service.service';
import { of, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';


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

class fakePortfolioService {
  getStockDetails(): Observable<Stock[]> {
    return of([fakeStock]);
  }
}

describe('StockportfolioComponent', () => {
  let component: StockportfolioComponent;
  let fixture: ComponentFixture<StockportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockportfolioComponent ],
      imports:[MatExpansionModule,RouterTestingModule,HttpClientTestingModule,AppModule],
      providers: [
        {
          provide: PortfolioAuthServiceService,
          useClass: fakePortfolioService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockportfolioComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get data through service', () => {
    fixture.detectChanges();
    component.stocks$.subscribe((data) => {
      console.log(data[0]);
      expect(data[0]).toEqual(fakeStock);
    })
  });

});