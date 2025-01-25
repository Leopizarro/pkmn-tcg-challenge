import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation, JoinColumn } from "typeorm"
import { Card } from "./Card"

@Entity()
export class Market {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    url: string

    @Column('date')
    updated_at: Date

    @Column('text')
    market: string

    @ManyToOne(() => Card, (card) => card.markets, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'card_id' })
    card: Relation<Card> 

}