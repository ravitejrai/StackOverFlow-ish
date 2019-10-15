import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchstockService } from 'src/app/modules/dashboard/container/searchstock.service';

@Component({
  selector: 'app-askquestions',
  templateUrl: './askquestions.component.html',
  styleUrls: ['./askquestions.component.scss']
})
export class AskquestionsComponent implements OnInit {

  constructor(private StockList: SearchstockService, private router: Router) { }

  Title: string;
  Tags: string;
  Body: string;

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  finalSubmit() {
    this.StockList.postQuestions(this.Title, this.Body, this.Tags).subscribe(response => {
      console.log(response);
    });
    this.router.navigateByUrl('dashboard/home');
  }

  ngOnInit() {
  }

}
