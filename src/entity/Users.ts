import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "users" /* Relation name in database */})
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

//    @Column()
//    address: string;

}

export default Users;