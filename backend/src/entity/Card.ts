import { Entity, Column, OneToMany, ManyToOne, Relation, PrimaryColumn, JoinColumn } from "typeorm"
import { Set } from "./Set"
import { Market } from "./Market"
import { Image } from "./Image"

@Entity()
export class Card {

    @PrimaryColumn('text')
    id: string

    @Column('text')
    name: string

    @Column('text')
    supertype: string

    @Column('text', { array: true })
    subtypes: string

    @Column('text', { array: true })
    types: string

    @Column('text')
    number: string

    @Column('text')
    rarity: string

    @ManyToOne(() => Set, (set) => set.cards, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'set_id' })
    set: Relation<Set>

    @OneToMany(() => Market, (market) => market.card)
    markets: Relation<Market[]>

    @OneToMany(() => Image, (image) => image.card)
    images: Relation<Image[]>

}