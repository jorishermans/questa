import {Component, OnInit} from '@angular/core';
import { QuestionClientService } from '../services/question-client.service';
import { Observable } from 'rxjs';
import { Question } from '../../../api/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  template: `<h3>Add a question</h3>
  <div class="form-container">
    <form (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm" novalidate>
        <mat-form-field>
            <input matInput placeholder="Title" name="title" [(ngModel)]="model.title" #title="ngModel" [ngClass]="{ 'is-invalid': f.submitted && title.invalid }" required>
        </mat-form-field>
        <mat-form-field>
            <textarea matInput placeholder="Question" name="text" [(ngModel)]="model.text" #text="ngModel" [ngClass]="{ 'is-invalid': f.submitted && text.invalid }" required></textarea>
        </mat-form-field>
        <div><button mat-flat-button color="primary">Add</button></div>
    </form>
  </div>
`
})
export class AddQuestionsComponent implements OnInit {
  public model: Question;

  constructor(private questionService: QuestionClientService, private router: Router) {
      this.model = { title: '', text: '', views: 0, votes: [], labels: [] };
  }

  ngOnInit() {}

  onSubmit() {
    this.questionService.post(this.model).subscribe(_ => {
        this.router.navigate(['/questions']);
    });
  }
}
