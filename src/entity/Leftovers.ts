import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Genres } from "./Genres";

@Entity({name: "leftovers" /* Relation name in database */})
export class Leftovers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    titlename: string;

    @Column("text")
    genre: string;

    @Column("text")
    useleftover: string;

}

export default Leftovers;