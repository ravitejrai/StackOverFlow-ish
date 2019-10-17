import { TestBed, inject } from '@angular/core/testing';
import { SearchstockService } from './searchstock.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

const mockUserData = [
  {
    email: 'tom@gmail.com',
    stockid: 1,
    name: 'Apple',
    quantity: 5,
    price: 100,
    value: 500,
    id: 1
  }
];

const mockQuestionData = [
  {
    questions: 'What is Testing?',
    questionsId: '100',
    votes: 4,
    Answers: [
      {
        answer: 'This is a mock Answer',
        votes: 1,
        Comments: [
          {
            name: 'Ravi',
            value: 'This is a mock Test'
          }
        ]
      }
    ],
    id: 100
  }
];

const mockpatchData = [
    {
      questions: 'What is Testing?',
      questionsId: '100',
      votes: 5,
      Answers: [
        {
          answer: 'This is a mock Answer',
          votes: 1,
          Comments: [
            {
              name: 'Ravi',
              value: 'This is a mock Test'
            }
          ]
        }
      ],
      id: 100
    }
  ];

describe('SearchstockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchstockService]
    });
  });

  it('testing http get for display questions', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      SearchstockService: SearchstockService
    ) => {
      SearchstockService.getQuestions().subscribe(mockData => {
        expect(Object.keys(mockData).length).toBe(1);
      });
      const req = httpMock.expectOne('http://localhost:3000/Tag');
      expect(req.request.method).toEqual('GET');
      req.flush(mockQuestionData);
    }
  ));

  it('Testing patch for upvote', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      SearchstockService: SearchstockService
    ) => {
      SearchstockService.upvoteQuestions('100', 4).subscribe(mockpatchData => {
        expect(mockpatchData[0].votes).toBe(5);
      });
      const req = httpMock.expectOne('http://localhost:3000/Tag/100');
      expect(req.request.method).toEqual('PATCH');
      req.flush(mockpatchData);
    }
  ));

  it('Testing patch for downvote', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      SearchstockService: SearchstockService
    ) => {
      SearchstockService.downvoteQuestions('100', 4).subscribe(mockpatchData => {
        expect(mockpatchData[0].votes).toBe(5);
      });
      const req = httpMock.expectOne('http://localhost:3000/Tag/100');
      expect(req.request.method).toEqual('PATCH');
      req.flush(mockpatchData);
    }
  ));

  it('Testing patch for upvoteAnswers', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      SearchstockService: SearchstockService
    ) => {
      SearchstockService.upvoteAnswers('100', 4).subscribe(mockpatchData => {
        expect(mockpatchData[0].Answers.length).toBe(1);
      });
      const req = httpMock.expectOne('http://localhost:3000/Tag/100');
      expect(req.request.method).toEqual('PATCH');
      req.flush(mockpatchData);
    }
  ));

  it('Testing patch for downvoteAnswers', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      SearchstockService: SearchstockService
    ) => {
      SearchstockService.downvoteAnswers('100', 4).subscribe(mockpatchData => {
        expect(mockpatchData[0].Answers[0].votes).toBe(1);
      });
      const req = httpMock.expectOne('http://localhost:3000/Tag/100');
      expect(req.request.method).toEqual('PATCH');
      req.flush(mockpatchData);
    }
  ));

  it('Testing for postAnswers', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      SearchstockService: SearchstockService
    ) => {
      SearchstockService.postAnswers('100', []).subscribe(mockpatchData => {
        expect(mockpatchData[0].Answers.length).toBe(1);
      });
      const req = httpMock.expectOne('http://localhost:3000/Tag/100');
      expect(req.request.method).toEqual('PATCH');
      req.flush(mockpatchData);
    }
  ));

  it('Testing for postQuestions', inject(
    [HttpTestingController, SearchstockService],
    (
      httpMock: HttpTestingController,
      SearchstockService: SearchstockService
    ) => {
      SearchstockService.postQuestions('What is Testing?', 'This is a test', 'Jasmine').subscribe(mockpatchData => {
        expect(mockpatchData[0].questions).toEqual('What is Testing?');
      });
      const req = httpMock.expectOne('http://localhost:3000/Tag');
      expect(req.request.method).toEqual('POST');
      req.flush(mockpatchData);
    }
  ));
});

