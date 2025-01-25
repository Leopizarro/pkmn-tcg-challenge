import { Router } from 'express';
import { getAllSets, getCardsBySetId } from '../controllers/sets.controller';

const router = Router();

router.get('/', getAllSets);

router.get('/:id/cards', getCardsBySetId);

export default router;