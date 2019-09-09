import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { from } from 'rxjs';
import { emit } from 'cluster';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
providers: [AuthService],
imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('authService in Registration for get details', inject([HttpTestingController,AuthService], (service: AuthService) => {
    expect(service.getDetails()).toBeTruthy();
  }));

it('testing http get for registration details', inject([HttpTestingController,AuthService],(httpMock: HttpTestingController, service: AuthService)=>{
    const mockData = [
      {
        "email": "manogna.madineni6@gmail.com",
        "password": "Passwoerrcdf12",
        "firstName": "arg",
        "lastName": "madineni",
        "phonenumber": "5182568300",
        "ssn": "232-43-24322",
        "creditCardNumber": "4324-3543-5465-476568",
        "date": "09-2019",
        "cvv": "234334",
        "amount": 123,
        "id": 1
      },
      {
        "email": "xzcvxcv@gmail.com",
        "password": "Password@123",
        "firstName": "zcvcxz",
        "lastName": "xvcxb",
        "phonenumber": "432-353-44567",
        "ssn": "214-23-54357",
        "creditCardNumber": "3223-5656-4565-46656",
        "date": "09-2019",
        "cvv": "23244",
        "amount": 34535,
        "id": 2
      }
    ];
    
    service.getDetails().subscribe(mockData => {
     
      expect(mockData[1].email).toBe("xzcvxcv@gmail.com");

    });
// We set the expectations for the HttpClient mock
const req = httpMock.expectOne('http://localhost:3000/users');
expect(req.request.method).toEqual('POST');

// Then we set the fake data to be returned by the mock
req.flush(mockData);

  })
  
  );
  

  it('testing http get for registration', inject([HttpTestingController,AuthService],(httpMock: HttpTestingController, service: AuthService)=>{
    const mockData = [
      {
        "email": "manogna.madineni6@gmail.com",
        "password": "Passwoerrcdf12",
        "firstName": "arg",
        "lastName": "madineni",
        "phonenumber": "5182568300",
        "ssn": "232-43-24322",
        "creditCardNumber": "4324-3543-5465-476568",
        "date": "09-2019",
        "cvv": "234334",
        "amount": 123,
        "id": 1
      },
      {
        "email": "xzcvxcv@gmail.com",
        "password": "Password@123",
        "firstName": "zcvcxz",
        "lastName": "xvcxb",
        "phonenumber": "432-353-44567",
        "ssn": "214-23-54357",
        "creditCardNumber": "3223-5656-4565-46656",
        "date": "09-2019",
        "cvv": "23244",
        "amount": 34535,
        "id": 2
      }
    ];
    
    service.getUserDetails("xzcvxcv@gmail.com", "Password@123", "zcvcxz", "xvcxb", "432-353-44567", "214-23-54357","3223-5656-4565-46656", "09-2019", "23244" , 34535 ).subscribe(mockData => {
     
      expect(mockData[1].email).toBe("xzcvxcv@gmail.com");

    });
// We set the expectations for the HttpClient mock
const req = httpMock.expectOne('http://localhost:3000/users');
expect(req.request.method).toEqual('POST');

// Then we set the fake data to be returned by the mock
req.flush(mockData);

  })
  
  );
});
