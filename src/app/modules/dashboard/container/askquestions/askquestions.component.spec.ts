import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskquestionsComponent } from './askquestions.component';

describe('AskquestionsComponent', () => {
  let component: AskquestionsComponent;
  let fixture: ComponentFixture<AskquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
