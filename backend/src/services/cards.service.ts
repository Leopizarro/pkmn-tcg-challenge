import { AppDataSource } from "../data-source";
import { Card } from "../entity/Card";

const cardsRepo = AppDataSource.getRepository(Card);

export const fetchCardById = async (cardIdToSearch: string): Promise<Card> => {
    try {
        const card = await cardsRepo.findOneBy({ id: cardIdToSearch });
        return card;
    } catch(error) {
        throw Error('Ha ocurrido un error al obtener las cartas del set');
    }
}