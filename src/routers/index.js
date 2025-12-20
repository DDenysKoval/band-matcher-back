import { Router } from 'express';
import artistsRouter from './artists/index.js';
import musiciansRouter from './musicians/index.js';
import genresRouter from './genres/index.js';
import authRouter from './auth/index.js';

const router = Router();

router.use('/artists', artistsRouter);
router.use('/musicians', musiciansRouter);
router.use('/auth', authRouter);
router.use('/genres', genresRouter);

export default router;
