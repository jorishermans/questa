import { Model, Table, Column, BelongsTo, ForeignKey } from "sequelize-typescript";
import User from "./user.model";
import Question from "./question.model";

@Table({tableName: 'answer'})
export default class Answer extends Model<Answer> {
  @Column
  text: string;

  @BelongsTo(() => User, 'userId')
  user: User;

  @BelongsTo(() => Question, 'questionId')
  question: Question;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Question)
  @Column
  questionId: number;
}