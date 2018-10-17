import {Sequelize} from 'sequelize-typescript';
import Answer from './answer.model';
import Question from './question.model';
import User from './user.model';

//Setting up the config
export const sequelize =  new Sequelize({
        database: 'qanda',
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '12345'
});