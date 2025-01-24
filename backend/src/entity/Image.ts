import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation } from "typeorm"
import { Card } from "./Card"

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    url: string

    @Column('text')
    type: string

    @ManyToOne(() => Card, (card) => card.images)
    card: Relation<Card> 

}