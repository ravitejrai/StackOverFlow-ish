import { async, ComponentFixture, TestBed, inject  } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { SearchstockService } from './searchstock.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SearchstockService', () => {
  beforeEach(() => TestBed.configureTestingModule({  
    imports:[HttpClientTestingModule],
    providers:[
      SearchstockService
    ] }));

  it('should be created', () => {
    const service: SearchstockService = TestBed.get(SearchstockService);
    expect(service).toBeTruthy();
  });

  it('testing http get', inject([HttpTestingController,SearchstockService],(httpMock: HttpTestingController, SearchstockService: SearchstockService)=>{
    const mockData = [
      {
        "id": "1",
        "name": "Apple",
        "price": "2508"
      },
      {
        "id": "2",
        "name": "Amazon",
        "price": "1907"
      }
    ];

    SearchstockService.getDisplayStocks().subscribe(mockData => {
      expect((Object.keys(mockData).length)).toBe(2); 
    });
// We set the expectations for the HttpClient mock
const req = httpMock.expectOne('http://localhost:3000/stocks');
expect(req.request.method).toEqual('GET');

// Then we set the fake data to be returned by the mock
req.flush(mockData);
  })
);
});
