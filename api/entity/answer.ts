import {Entity, Column, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Question} from "./question";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    text: string;
    @Column()
    user: string;
    @Column()
    votes: number;
    @ManyToOne(type => Question, question => question.answers)
    question: Question;
}