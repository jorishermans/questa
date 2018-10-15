import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question, Answer } from '../../../api/services/question.service';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class QuestionClientService {

    constructor(private httpClient: HttpClient) {}

    public fetch(): Observable<Question[]> {
        return this.httpClient.get<Question[]>('/api/questions');
    }

    public fetchOne(id: string): Observable<Question> {
        return this.httpClient.get<Question>(`/api/question/${id}`);
    }

    public post(question: Question) {
        return this.httpClient.post<Question>('/api/question', question, httpOptions);
    }

    public addAnwser(id: number, answer: Answer): Observable<any> {
        return this.httpClient.post<Answer>(`/api/add/${id}`, answer, httpOptions);
    }
}