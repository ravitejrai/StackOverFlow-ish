import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AskquestionsComponent } from './askquestions.component';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from '../../dashboard.module';
import { of } from 'rxjs';
import { SearchstockService } from '../searchstock.service';

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
  postQuestions(Title: string, Body: string, Tags: string) {
    return of(mockQuestionData);
  }
}

describe('AskquestionsComponent', () => {
  let component: AskquestionsComponent;
  let fixture: ComponentFixture<AskquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule],
      providers: [{ provide: SearchstockService, useClass: MockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskquestionsComponent);
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
  it('checks if the submitted is false initially', () => {
    expect(component.submitted).toEqual(false);
  });
  it('checks if the submitted is true after onSubmit is called', () => {
    component.onSubmit();
    expect(component.submitted).toEqual(true);
  });
  it('checks that the SearchstockService postQuestions is called after finalSubmit is called', inject(
    [SearchstockService], (userService: SearchstockService) => {
      spyOn(userService, 'postQuestions').and.callThrough();
      component.finalSubmit();
      expect(userService.postQuestions).toHaveBeenCalled();
    }
  ));
});
