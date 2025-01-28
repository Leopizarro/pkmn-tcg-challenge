import { AppDataSource } from "../data-source";
import { Set as SetEntity } from "../entity/Set";
import { Card } from "../entity/Card";

const setsRepo = AppDataSource.getRepository(SetEntity);
const cardsRepo = AppDataSource.getRepository(Card);

export const fetchAllSets = async (): Promise<SetEntity[]> => {
    try {
        const allSets = await setsRepo.find();
        return allSets;
    } catch (error) {
        throw Error('Ha ocurrido un error al obtener las etapas de hito');
    }
} 

export const fetchCardsBySetId = async (setIdToSearch: string): Promise<{cards: Card[], cardTypes: string[], rarities: string[]}> => {
    try {
        const cardSetToSearch = await setsRepo.findOneBy({ id: setIdToSearch });
        if (cardSetToSearch === null) {
            return { cards: [], cardTypes: [], rarities: [] };
        }
        const cardsBySetId = await cardsRepo.find({
            where: {set: cardSetToSearch},
            relations: ['images']
        });

        const typesSet = new Set<string>();
        const raritiesSet = new Set<string>();
        // Base on the cards retrieved by the database, we get all the unique types and rarities
        for (const card of cardsBySetId) {
            if (card?.types) {
            card.types.forEach((type) => typesSet.add(type));
            }
            if (card?.rarity) {
                raritiesSet.add(card.rarity);
            }
        }
        const cardTypes = Array.from(typesSet);
        const rarities = Array.from(raritiesSet);

        return { cards: cardsBySetId, cardTypes, rarities };
    } catch(error) {
        throw Error('Ha ocurrido un error al obtener las cartas del set');
    }
}