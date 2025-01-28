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

    @Column({type: 'text', name: 'ptcgo_code'})
    ptcgoCode: string

    @Column({ type: 'date', name: 'release_date'})
    releaseDate: Date

    @Column({ type: 'timestamptz', name: 'updated_at'})
    updatedAt: Date

    @Column({type: 'text', name: 'ptcgo_code'})
    symbolUrl: string

    @Column({type: 'text', name: 'logo_url'})
    logoUrl: string

    @OneToMany(() => Card, (card) => card.set)
    cards: Relation<Card[]>

}