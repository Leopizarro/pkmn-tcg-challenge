import { ImageInterface } from "./image.interface";

export interface CardInterface {
    id: string,
    name: string,
    number: string,
    rarity: string,
    subtypes: string[],
    supertype: string,
    types: string[],
    images: ImageInterface[],
}