import {Component, OnInit} from '@angular/core';
import { QuestionClientService } from '../services/question-client.service';
import { Observable } from 'rxjs';
import { Question } from '../../../api/services/question.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-questions',
  template: `<h3>Question and answer detail</h3>
<div *ngIf="!model">Couldn't find any details ...</div>
<div *ngIf="model">
    <h4>{{ model.title }}</h4>
    <p>{{ model.text }}</p>
    <app-answers [question]="model"></app-answers>
    <mat-divider></mat-divider>
    <form (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
        <mat-form-field>
            <textarea matInput placeholder="Answer" name="text" [(ngModel)]="answer" #text="ngModel" [ngClass]="{ 'is-invalid': f.submitted && text.invalid }" required></textarea>
        </mat-form-field>
        <div><button mat-flat-button color="primary">Add</button></div>
    </form>
</div>
`
})
export class QuestionComponent implements OnInit {
  public model: Question;
  public answer: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionClientService
  ) {}
 
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        console.log(params.get('id'));
        this.questionService.fetchOne(params.get('id')).subscribe(x => this.model = x);
      }
    );
  }

  onSubmit() {
    this.questionService.addAnwser(this.model.id, { text: this.answer, user: 'anonym', votes: []}).subscribe(_ => {
        
    });
  }

}