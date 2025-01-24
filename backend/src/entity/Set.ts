import { Entity, Column, OneToMany, Relation, PrimaryColumn } from "typeorm"
import { Card } from "./Card"

@Entity()
export class Set {

    @PrimaryColumn('text')
    id: string

    @Column('text')
    name: string

    @Column('text')
    series: string

    @Column('int4')
    printed_total: number

    @Column('int4')
    total: number

    @Column('text')
    ptcgo_code: string

    @Column({ type: 'date'})
    release_date: Date

    @Column({ type: 'timestamptz'})
    updated_at: Date

    @Column('text')
    symbol_url: string

    @Column('text')
    logo_url: string

    @OneToMany(() => Card, (card) => card.set)
    cards: Relation<Card[]>

}