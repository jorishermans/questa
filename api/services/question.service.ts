import { injectable, inject } from "inversify";
import "reflect-metadata";

export interface Question {
    id?: number;
    title: string;
    text: string;
    views: number;
    votes: string[];
    labels: string[];
    answers?: Answer[];
}

export interface Answer {
    votes: string[];
    text: string;
    user: string;
}

@injectable()
export class QuestionService {

    public questions: Question[];

    constructor() {
        console.log('make a new instance of question service on the server ...')
        this.questions = [{
            id: 0, title: "This is my question?", text: "Can we see a question?", views: 0, votes: [], labels: [], answers: []
        }];
    }

    public create(question: Question) {
        question.id = this.questions.length;
        this.questions.push(question);
    }

    public getAll() {
        console.log(this.questions);
        return this.questions;
    }

    public getOne(id: number) {
        console.log(id);
        let f = this.questions.find(x => {
            console.log(x, x.id, id);
            return x.id === id;
        });
        console.log('get one', f);
        return f;
    }

    public addAnwser(id: number, answer: Answer) {
        let f = this.questions.filter(x => x.id === id);
        if (!f[0].answers) {
            f[0].answers = [];
        }
        f[0].answers.push(answer);
    }
}