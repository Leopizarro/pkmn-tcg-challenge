import { AppDataSource } from "../data-source";
import { Set } from "../entity/Set";
import { Card } from "../entity/Card";

const setsRepo = AppDataSource.getRepository(Set);
const cardsRepo = AppDataSource.getRepository(Card);

export const fetchAllSets = async (): Promise<Set[]> => {
    try {
        const allSets = await setsRepo.find();
        return allSets;
    } catch (error) {
        throw Error('Ha ocurrido un error al obtener las etapas de hito');
    }
} 

export const fetchCardsBySetId = async (setIdToSearch: string): Promise<Card[]> => {
    try {
        const cardSetToSearch = await setsRepo.findOneBy({ id: setIdToSearch });
        if (cardSetToSearch === null) {
            return [];
        }
        const cardsBySetId = await cardsRepo.findBy({
            set: cardSetToSearch
        });
        return cardsBySetId;
    } catch(error) {
        throw Error('Ha ocurrido un error al obtener las cartas del set');
    }
}