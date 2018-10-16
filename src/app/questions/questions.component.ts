import {Component, OnInit} from '@angular/core';
import { QuestionClientService } from '../services/question-client.service';
import { Observable } from 'rxjs';
import { Question } from '../../../api/entity/question';

@Component({
  selector: 'app-questions',
  template: `<h3>Questions</h3>
<mat-nav-list>
  <mat-list-item *ngFor="let question of questions$ | async; last as last">
    <a matLine routerLink="/question/{{question.id}}" routerLinkActive="active">
        {{ question.title }}
    </a>
    <button mat-raised-button color="primary"
      matBadge="{{ question.votes.length }}" matBadgePosition="before" matBadgeColor="accent">
      Vote
    </button>
    <mat-icon matBadge="{{ question.views }}" matBadgeColor="accent">visibility</mat-icon>
    <mat-icon matBadge="{{ question.answers ? question.answers.length : 0 }}" matBadgeColor="accent">view_list</mat-icon>
    <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
  </mat-list-item>
</mat-nav-list>
`
})
export class QuestionsComponent implements OnInit {
  public questions$: Observable<Question[]>;

  constructor(private questionService: QuestionClientService) {}

  ngOnInit() {
    this.questions$ = this.questionService.fetch();
  }
}
