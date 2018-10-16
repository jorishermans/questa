import {Entity, Column, JoinColumn, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Answer} from "./answer";
import {Vote} from "./vote";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    title: string;
    @Column()
    text: string;
    @Column()
    views: number;
    @Column()
    votes: number;
    @OneToMany(type => Answer, answer => answer.question)
    answers: Answer[];
}