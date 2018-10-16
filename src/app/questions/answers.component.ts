import { Input, Component, OnInit } from '@angular/core';
import { QuestionClientService } from '../services/question-client.service';
import { Question } from '../../../api/entity/question';

@Component({
  selector: 'app-answers',
  template: `
  <div *ngIf="question.answers && question.answers.length > 0">
    <mat-card *ngFor="let answer of question.answers">
        <mat-card-header>
            <mat-card-title>{{answer.user}}</mat-card-title>
            <mat-card-subtitle>gold user</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
            <p>
            {{answer.text}}
            </p>
        </mat-card-content>
        <mat-card-actions>
            <button mat-button matBadge="{{answer.votes.length}}" matBadgePosition="above after">VOTE</button>
            <!-- button mat-button>SHARE</button -->
        </mat-card-actions>
    </mat-card>
</div>
<div *ngIf="question.answers && question.answers.length === 0">Be the first to answer to this question.</div>
<div *ngIf="!question.answers">Be the first to answer to this question.</div>
`
})
export class AnswersComponent implements OnInit {
  @Input() public question: Question;

  constructor(
    private questionService: QuestionClientService
  ) {}
 
  ngOnInit() {
    
  }

}