import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchstockService {

  private stocksUrl = 'http://localhost:3000/Tag';

  name: any;
  id: any;
  questionId: string;
  userEmail: string;

  /**
   * Parameterized constructor to fetch the backend data
   * @param StockService The HttpClient to test the backend database
   * @param http used for adding stocks
   */
    constructor(private StockService: HttpClient) {}

  /**
   * This function returns the data from the fake json
   * server. It uses the stocksUrl and makes a get Request
   * to get the data which is then used to render on the view
   */
  public getQuestions(): Observable<Tag[]> {
    return this.StockService.get<Tag[]>
      (this.stocksUrl);
  }

  public upvoteQuestions(questionId: string, votes: number) {
    this.questionId = questionId;
    const newvotes = {
      votes : votes + 1,
    };
    this.id = questionId;
    return this.StockService.patch(`http://localhost:3000/Tag/${this.id}`, newvotes);
  }

  public downvoteQuestions(questionId: string, votes: number) {
    this.questionId = questionId;
    const newvotes = {
      votes : votes - 1,
    };
    this.id = questionId;
    return this.StockService.patch(`http://localhost:3000/Tag/${this.id}`, newvotes);
  }

  public upvoteAnswers(questionId: string, votes: number) {
    this.questionId = questionId;
    const newvotes = {
      votes : votes + 1,
    };
    this.id = questionId;
    return this.StockService.patch(`http://localhost:3000/Tag/${this.id}`, newvotes);
  }

  public downvoteAnswers(questionId: string, votes: number) {
    this.questionId = questionId;
    const newvotes = {
      votes : votes - 1,
    };
    this.id = questionId;
    return this.StockService.patch(`http://localhost:3000/Tag/${this.id}`, newvotes);
  }

  public postAnswers(questionId: string, answerArray: Answers[]) {
    this.id = questionId;
    const newAnswers = {
      Answers : answerArray
    };
    return this.StockService.patch(`http://localhost:3000/Tag/${this.id}`, newAnswers);
  }

  public postQuestions(Title: string, Body: string, Tags: string ) {
    const postQuestionsData = {
      questions: Title,
      votes: 0,
      Answers: []
    };
    return this.StockService.post(`http://localhost:3000/Tag`, postQuestionsData);
  }
}

export class Tag {
  questions: string;
  questionId: string;
  votes: number;
  Answers: Answers[] = [];
  id: number;
}

export class Answers {
  answer: string;
  votes: number;
  Comments: Comments[] = [];
}

export class Comments {
  name: string;
  value: string;
}


