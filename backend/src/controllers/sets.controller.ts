import { RequestHandler } from "express";
import { fetchAllSets, fetchCardsBySetId } from "../services/sets.service";

export const getCardsBySetId: RequestHandler = async (req, res, next) => {
    try {
        const stageIdToSearch = (req.params as { id: string }).id;
        const cardsBySetId = await fetchCardsBySetId(stageIdToSearch);
        if (cardsBySetId.length === 0) {
            res.status(404).json({
                ok: false,
                message: `Cartas ligadas al set ${stageIdToSearch} no encontradas`
            });
            return;
        }
        res.status(200).json({
            ok: true,
            message: `Cartas ligadas al set ${stageIdToSearch} encontradas!`,
            cards: cardsBySetId,
        });
    } catch(error) {
        res.status(500).json({
            ok: false,
            message: 'Hubo un error intentando obtener las cartas'
        });
    }
}

export const getAllSets: RequestHandler = async (req, res, next) => {
    try {
        const allSets = await fetchAllSets();
        res.status(200).json({
            ok: true,
            message: 'Sets de cartas encontrados!',
            allSets
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Hubo un error intentando obtener los sets de cartas'
        });
    }
}