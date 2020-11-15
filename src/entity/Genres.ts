import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "genres" /* Relation name in database */})
export class Genres {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    genre: string;

}

export default Genres;