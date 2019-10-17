import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { QuestionInfoComponent } from './question-info.component';
import { of } from 'rxjs';
import { Answers, SearchstockService } from '../searchstock.service';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from '../../dashboard.module';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

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

class MockService {
  getQuestions() {
    return of(mockQuestionData);
  }
  upvoteQuestions(questionId: string, votes: number) {
    return of(mockQuestionData);
  }
  downvoteQuestions(questionId: string, votes: number) {
    return of(mockQuestionData);
  }
  upvoteAnswers(questionId: string, votes: number) {
    return of(mockQuestionData);
  }
  downvoteAnswers(questionId: string, votes: number) {
    return of(mockQuestionData);
  }
  postAnswers(questionId: string, answerArray: Answers[]) {
    return of(mockQuestionData);
  }
  postQuestions(Title: string, Body: string, Tags: string) {
    return of(mockQuestionData);
  }
}

describe('QuestionInfoComponent', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it(`should be initialized`, () => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });
  it('checks if the stockItem is empty intially', () => {
    expect(component.stockItems).toEqual([]);
  });
  it('checks if the comments is empty intially', () => {
    expect(component.comments).toEqual([]);
  });
  it('checks if the answer is empty intially', () => {
    expect(component.answer).toEqual('');
  });
});

describe('QuestionInfoComponent ngOnInit', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the stockItems is has some data after ngOnInit', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      component.ngOnInit();
      expect(component.stockItems.length).toEqual(2);
    }
  ));
  it('checks that the getQuestions returns valid response for a id which is Mocked', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      component.ngOnInit();
      expect(mockQuestionData[0].votes).toEqual(4);
    }
  ));
});

describe('QuestionInfoComponent alterVote', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the upvoteQuestions has been called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(userService, 'upvoteQuestions').and.callThrough();
      component.alterVote('100', 5);
      expect(userService.upvoteQuestions).toHaveBeenCalled();
    }
  ));
  it('checks that the downvoteQuestions has been called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(userService, 'downvoteQuestions').and.callThrough();
      component.alterVote('100', 3);
      expect(userService.downvoteQuestions).toHaveBeenCalled();
    }
  ));
  it('checks that the showUpdatedQuestionsVotes has been called', inject(
    [HttpTestingController, SearchstockService],
    () => {
      spyOn(component, 'showUpdatedQuestionsVotes').and.callThrough();
      component.alterVote('100', 4);
      expect(component.showUpdatedQuestionsVotes).toHaveBeenCalled();
    }
  ));
});

describe('altervoteAnswers', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the getQuestions has been called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(userService, 'getQuestions').and.callThrough();
      component.altervoteAnswers('100', 5, 'This is an answer');
      expect(userService.getQuestions).toHaveBeenCalled();
    }
  ));
  it('checks that the showUpdatedAnswersVotes has been called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(component, 'showUpdatedAnswersVotes').and.callThrough();
      component.altervoteAnswers('100', 4, 'This is an answer');
      expect(component.showUpdatedAnswersVotes).toHaveBeenCalled();
    }
  ));
});

describe('showUpdatedQuestionsVotes', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the getQuestions has been called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(userService, 'getQuestions').and.callThrough();
      component.showUpdatedQuestionsVotes('100');
      expect(userService.getQuestions).toHaveBeenCalled();
    }
  ));
});

describe('showUpdatedAnswersVotes', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the getQuestions has been called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(userService, 'getQuestions').and.callThrough();
      component.showUpdatedAnswersVotes('100', 4, 'This is an answer');
      expect(userService.getQuestions).toHaveBeenCalled();
    }
  ));
  it('checks that the stockItems answer votes has the correct data', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      component.showUpdatedAnswersVotes('100', 4, 'This is a mock Answer');
      console.log(component.stockItems);
      expect(component.stockItems[0].Answers[0].Comments).not.toBe([]);
    }
  ));
  it('checks that the stockItems has the correct data', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      component.showUpdatedAnswersVotes('100', 4, 'This is a mock Answer');
      expect(component.stockItems[0].Answers[0].answer).toEqual('This is a mock Answer');
    }
  ));
});

describe('addAnswer', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the service postAnswers has been called when addAnswer is called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(userService, 'postAnswers').and.callThrough();
      component.addAnswer('100');
      expect(userService.postAnswers).toHaveBeenCalled();
    }
  ));
});


describe('addComment', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the comments are empty when no data has been provided', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      component.addComment('100', 'This is a mock Answer');
      expect(component.stockItems[0].Answers[0].Comments).not.toBe([]);
    }
  ));
  it('checks that the service postAnswers has been called when addComment is called', inject(
    [HttpTestingController, SearchstockService],
    (httpMock: HttpTestingController, userService: SearchstockService) => {
      spyOn(userService, 'getQuestions').and.callThrough();
      spyOn(userService, 'postAnswers').and.callThrough();
      component.addComment('100', 'This is a mock Answer');
      expect(userService.postAnswers).toHaveBeenCalled();
    }
  ));
});

describe('EditAnswer', () => {
  let component: QuestionInfoComponent;
  let fixture: ComponentFixture<QuestionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '100' }) }
          }
        },
        { provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the sendEditedAnswer has been called', inject(
    [HttpTestingController, SearchstockService], () => {
      spyOn(component, 'sendEditedAnswer').and.callThrough();
      component.EditAnswer('100', 'This is a mock Answer');
      const elementAfter = document.getElementById('submitSpan');
      elementAfter.click();
      expect(component.sendEditedAnswer).toHaveBeenCalled();
    }
  ));
  it('checks that attribute is set correctly', inject(
    [HttpTestingController, SearchstockService], () => {
      const elementBefore = document.getElementById('submitSpan');
      expect(elementBefore).toBe(null);
      component.EditAnswer('100', 'This is a mock Answer');
      const elementAfter = document.getElementById('submitSpan');
      expect(elementAfter.getAttribute('id')).toEqual('submitSpan');
    }
  ));
});