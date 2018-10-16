import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Question } from "../entity/question";
import { Answer } from "../entity/answer";
import { Vote } from "../entity/vote";
// import { createConnection, Connection } from "typeorm";

@injectable()
export class QuestionService {

    public questions: Question[];
    // public connection: Connection;

    constructor() {
        console.log('make a new instance of question service on the server ...')
        
        this.makeConnection();
    }

    public makeConnection() {
        /* createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "admin",
            database: "questa",
            entities: [
                Answer, Question, Vote
            ],
            synchronize: true,
            logging: false
        }).then(connection => {
            this.connection = connection;
            console.log("connection is been made");
        }).catch(error => console.log(error)); */
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