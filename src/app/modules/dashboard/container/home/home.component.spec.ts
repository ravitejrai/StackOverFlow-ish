import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from '../../dashboard.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchstockService } from '../searchstock.service';
import { of } from 'rxjs';

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
}

describe('HomeComponent ngOnInit', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule, HttpClientTestingModule],
      providers: [
        { provide: SearchstockService, useClass: MockService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });
  afterEach(() => {
    fixture = null;
    component = null;
  });
  it('checks that the stockItems has some data after ngOnInit', inject(
    [HttpTestingController, SearchstockService], () => {
      component.ngOnInit();
      expect(component.stockItems.length).toEqual(1);
    }
  ));
});
