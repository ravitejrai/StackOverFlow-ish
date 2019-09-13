import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SearchstockService } from './searchstock.service';

const mockData = [
  {
    id: 1,
    name: 'Apple',
    postId: 1,
    price: 100
  },
  {
    id: 2,
    name: 'Google',
    postId: 2,
    price: 200
  }
];

const mockOrderData = [
  {
    email: 'tom@gmail.com',
    stockid: 1,
    name: 'Google',
    quantity: 9,
    price: 100,
    value: 900,
    id: 1
  },
  {
    email: 'mahes@hgf.com',
    stockid: 1,
    name: 'Apple',
    quantity: 10,
    price: 100,
    value: 1000,
    id: 2
  }
];

describe('SearchstockService getProduct test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchstockService]
    });
  });

  it('should be created', () => {
    const service: SearchstockService = TestBed.get(SearchstockService);
    expect(service).toBeTruthy();
  });

  it('testing http get for getDisplayStocks', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      myService: SearchstockService
    ) => {
      myService.getDisplayStocks().subscribe(mockData => {
        expect(Object.keys(mockData).length).toBe(2);
      });
      const req = httpMock.expectOne('http://localhost:3000/stocks');
      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
    }
  ));

  it('testing http get for getProduct', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, myService: SearchstockService) => {
      // tslint:disable-next-line: no-shadowed-variable
      myService.getProduct('Google').subscribe(mockData => {
        expect(Object.keys(mockData).length).toBe(2);
      });
      const req = httpMock.expectOne(
        'http://localhost:3000/stocks?name=Google'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
    }
  ));
  it('testing mock data to match field name', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, myService: SearchstockService) => {
      // tslint:disable-next-line: no-shadowed-variable
      myService.getProduct('Google').subscribe(data => {
        console.log(data);
        expect(data).toEqual(mockData);
      });
      const req = httpMock.expectOne(
        'http://localhost:3000/stocks?name=Google'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
    }
  ));
});

describe('SearchstockService getorder test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchstockService]
    });
  });
  it('testing http get for GetOrders', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, myService: SearchstockService) => {
      // tslint:disable-next-line: no-shadowed-variable
      myService.getOrders('Google', 'tom@gmail.com').subscribe(mockOrderData => {
        expect(Object.keys(mockOrderData).length).toBe(2);
      });
      const req = httpMock.expectOne(
        'http://localhost:3000/orders?name=Google&email=tom@gmail.com'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockOrderData);
    }
  ));
  it('testing mock data to match field name', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, myService: SearchstockService) => {
      // tslint:disable-next-line: no-shadowed-variable
      myService.getOrders('Google', 'tom@gmail.com').subscribe(mockOrderData => {
        expect(mockOrderData).toEqual(mockOrderData);
      });
      const req = httpMock.expectOne(
        'http://localhost:3000/orders?name=Google&email=tom@gmail.com'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(mockOrderData);
    }
  ));
});
