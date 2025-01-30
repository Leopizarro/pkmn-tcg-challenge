import { CardInterface } from "./interfaces/card.interface";
import { SetInterface } from "./interfaces/set.interface";

export const getAllSets = async () => {
    try {
        const data = await fetch(`${process.env.SERVER_BACKEND_URL}/sets`);
        const response = await data.json();
        const pkmnSets = response?.allSets as SetInterface[];
        return pkmnSets;
      } catch (error) {
        console.log(error);
        throw new Error('Error obteniendo sets de cartas')
      }
}

export const getCardById = async (cardIdToSearch: string) => {
    try {
        const response = await fetch(`${process.env.SERVER_BACKEND_URL}/cards/${cardIdToSearch}/`);
        if (response.status === 200) {
            const data = await response.json();
            const card = data?.card as CardInterface
            return card;
        }
        return null;
    } catch (error) {
        console.log(error);
        throw new Error('Error obteniendo sets de cartas')
    }
}