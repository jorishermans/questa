import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Vote {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    text: string;
}