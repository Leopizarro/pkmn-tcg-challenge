import { RequestHandler } from "express";
import { fetchCardById } from "../services/cards.service";

export const getCardById: RequestHandler = async (req, res, next) => {
    try {
        const cardIdToSearch = (req.params as { id: string }).id;
        const card = await fetchCardById(cardIdToSearch);
        if (!card) {
            res.status(404).json({
                ok: false,
                message: `Carta con id ${cardIdToSearch} no encontrada`,
            });
            return;
        }
        res.status(200).json({
            ok: true,
            message: `Carta con id ${cardIdToSearch} encontrada`,
            card
        });
    } catch(error) {
        res.status(500).json({
            ok: false,
            message: 'Error intentando obtener la carta'
        });
    }
}