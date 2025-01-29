import { AppDataSource } from "../data-source";
import { Card } from "../entity/Card";

const cardsRepo = AppDataSource.getRepository(Card);

export const fetchCardById = async (cardIdToSearch: string): Promise<Card> => {
    try {
        let uniqueMarkets = []
        const card = await cardsRepo.findOne({ where: { id: cardIdToSearch }, relations: ['images', 'markets'] });
        if (card?.markets?.length) {
            uniqueMarkets = Array.from(
                new Map(card?.markets?.map((item) => [item.url, item])).values()
              );
            card.markets = uniqueMarkets
        }
        return card;
    } catch(error) {
        throw Error('Ha ocurrido un error al obtener las cartas del set');
    }
}