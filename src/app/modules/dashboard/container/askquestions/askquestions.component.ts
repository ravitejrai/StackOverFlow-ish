import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-askquestions',
  templateUrl: './askquestions.component.html',
  styleUrls: ['./askquestions.component.scss']
})
export class AskquestionsComponent implements OnInit {

  constructor() { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
  }

}
