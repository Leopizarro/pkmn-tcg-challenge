import { Router } from 'express';
import { getCardById } from '../controllers/cards.controller';

const router = Router();

router.get('/:id', getCardById);

export default router;