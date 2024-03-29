import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  Tag,
  SearchstockService,
  Comments
} from 'src/app/modules/dashboard/container/searchstock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.scss']
})
export class QuestionInfoComponent implements OnInit {
  stockItems: Tag[] = [];
  comments: Comments[] = [];
  questionId: string;
  votes: number;
  answer = '';

  constructor(
    private StockList: SearchstockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    this.questionId = param;
    this.StockList.getQuestions().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === parseInt(this.questionId, 10)) {
          this.stockItems.push(response[i]);
        }
      }
    });
  }

  alterVote(questionId: string, votes: number) {
    if (this.stockItems[0].votes === votes - 1) {
      this.StockList.upvoteQuestions(
        questionId,
        this.stockItems[0].votes
      ).subscribe(response => {
        console.log(response);
      });
    } else {
      this.StockList.downvoteQuestions(
        questionId,
        this.stockItems[0].votes
      ).subscribe(response => {
        console.log(response);
      });
    }
    this.showUpdatedQuestionsVotes(questionId);
  }

  altervoteAnswers(questionId: string, votes: number, answers: string) {
    this.StockList.getQuestions().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === parseInt(questionId, 10)) {
          for (let j = 0; j < response[i].Answers.length; j++) {
            if (response[i].Answers[j].answer === answers) {
              response[i].Answers[j].votes = votes;
              this.StockList.postAnswers(
                questionId,
                response[i].Answers
              ).subscribe(newResponse => {
                console.log(newResponse);
              });
            }
          }
        }
      }
    });
    this.showUpdatedAnswersVotes(questionId, votes, answers);
  }

  showUpdatedQuestionsVotes(questionId: string) {
    this.StockList.getQuestions().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === parseInt(questionId, 10)) {
          this.stockItems[0].votes = response[i].votes;
        }
      }
    });
  }

  showUpdatedAnswersVotes(questionId: string, votes: number, answers: string) {
    this.StockList.getQuestions().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === parseInt(questionId, 10)) {
          for (let j = 0; j < response[i].Answers.length; j++) {
            if (response[i].Answers[j].answer === answers) {
              if (this.stockItems[0].Answers[j].votes === votes - 1) {
              this.stockItems[0].Answers[j].votes =
                response[i].Answers[j].votes + 1;
              } else {
                this.stockItems[0].Answers[j].votes =
                response[i].Answers[j].votes - 1;
              }
            }
          }
        }
      }
    });
  }

  addAnswer(questionId: string) {
    const contenteditable = document.querySelector('[contenteditable]');
    const text = contenteditable.textContent;
    const answerData = {
      answer: text,
      votes: 0,
      Comments: this.comments
    };
    this.StockList.getQuestions().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === parseInt(questionId, 10)) {
          response[i].Answers.push(answerData);
          this.StockList.postAnswers(questionId, response[i].Answers).subscribe(
            newResponse => {
              console.log(newResponse);
            }
          );
        }
      }
    });
  }

  addComment(questionId: string, answer: string) {
    const contenteditable = document.getElementsByClassName('commenteditable');
    let text = '';
    for (let p = 0; p < contenteditable.length; p++) {
      if (contenteditable[p].innerHTML !== '') {
        text = contenteditable[p].innerHTML;
      }
    }
    const commentData = {
      name: 'Ashish',
      value: text
    };
    this.StockList.getQuestions().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === parseInt(questionId, 10)) {
          for (let j = 0; j < response[i].Answers.length; j++) {
            if (response[i].Answers[j].answer === answer) {
              response[i].Answers[j].Comments.push(commentData);
              this.StockList.postAnswers(
                questionId,
                response[i].Answers
              ).subscribe(newResponse => {
                console.log(newResponse);
              });
            }
          }
        }
      }
    });
  }

  EditAnswer(questionId: string, answer: string) {
    const element = document.getElementsByClassName('Answer');
    let index = 0;
    for (let i = 0; i < element.length; i++) {
      if (element[i].innerHTML === answer) {
        index = i;
        element[i].setAttribute('contenteditable', 'true');
      }
    }
    const buttonElement = document.getElementsByClassName('Edit');
    const newSpan = document.createElement('span');
    newSpan.setAttribute('_ngcontent-gbu-c8', '');
    newSpan.setAttribute('id', 'submitSpan');
    newSpan.innerHTML = '&nbsp;&nbsp;Submit';
    buttonElement[index].append(newSpan);
    newSpan.onclick = () => {
      this.sendEditedAnswer(questionId, index, answer, newSpan);
    };
  }

  sendEditedAnswer(
    questionId: string,
    index: number,
    answer: string,
    newSpan: HTMLSpanElement
  ) {
    const editedAnswer = document.getElementsByClassName('Answer');
    const text = editedAnswer[index].innerHTML;
    this.StockList.getQuestions().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].id === parseInt(questionId, 10)) {
          for (let j = 0; j < response[i].Answers.length; j++) {
            if (response[i].Answers[j].answer === answer) {
              response[i].Answers[j].answer = text;
              this.StockList.postAnswers(
                questionId,
                response[i].Answers
              ).subscribe(newResponse => {
                console.log(newResponse);
              });
            }
          }
        }
      }
    });
    const element = document.getElementsByClassName('Answer');
    element[index].setAttribute('contenteditable', 'false');
    const buttonElement = document.getElementsByClassName('Edit');
    buttonElement[index].removeChild(newSpan);
  }
}
