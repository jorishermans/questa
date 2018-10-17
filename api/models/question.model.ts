import { Table, Model, Column, BelongsTo, HasMany, ForeignKey } from "sequelize-typescript";
import User from "./user.model";
import Answer from "./answer.model";

@Table({tableName: 'question'})
export default class Question extends Model<Question> {
  @Column
  text: string;

  @Column
  count: number;
  
  @BelongsTo(() => User, 'userId')
  user: User;

  @HasMany(() => Answer, 'questionId')
  answers: Answer[];

  @ForeignKey(() => User)
  @Column
  userId: number;
}