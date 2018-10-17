import { Table, Model, Column } from "sequelize-typescript";

@Table({tableName: 'user'})
export default class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  userName: string;
  
  @Column
  password: string;

}
