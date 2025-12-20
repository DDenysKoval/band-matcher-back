import getGenreByIdRouter from './getGenreById.js';
import getAllGenresRouter from './getAllGenresRouter.js';
import { Router } from 'express';

const genresRouter = Router();

genresRouter.use(getGenreByIdRouter);
genresRouter.use(getAllGenresRouter);

export default genresRouter;
