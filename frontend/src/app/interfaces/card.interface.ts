import { ImageInterface } from "./image.interface";
import { MarketInferface } from "./market.interface";

export interface CardInterface {
    id: string,
    name: string,
    number: string,
    rarity: string,
    subtypes: string[],
    supertype: string,
    types: string[],
    images: ImageInterface[],
    markets: MarketInferface[]
}