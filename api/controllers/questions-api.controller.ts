import { Request, Response, NextFunction } from 'express';
import { interfaces, controller, httpGet, httpPost, request, response, requestParam, queryParam } from 'inversify-express-utils';
import { QuestionService } from '../services/question.service';
import { Question } from '../entity/question';

@controller('/api')
export class ApiController implements interfaces.Controller {

    constructor(private questionApi: QuestionService) { }

    @httpGet("/questions")
    private getAll(req: Request, res: Response, next: NextFunction): Question[] {
        return this.questionApi.getAll();
    }

    @httpGet("/question/:id")
    private getOne(@requestParam("id") id: string, req: Request, res: Response, next: NextFunction): Question {
        return this.questionApi.getOne(parseInt(id));
    }

    @httpPost("/question")
    private async create(@request() req: Request, @response() res: Response) {
        try {
            console.log(req.body);
            this.questionApi.create(req.body);
            res.status(201).end();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    @httpPost("/add/:id")
    private async add(@requestParam("id") id: string, @request() req: Request, @response() res: Response) {
        try {
            console.log('add anwser', req.body);
            this.questionApi.addAnwser(parseInt(id), req.body);
            res.status(201).end();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}