import { Router } from 'express';
import deleteArtistRouter from './deleteArtistRouter.js';
import getAllArtistsRouter from './getAllArtistsRouter.js';
import getArtistByIdRouter from './getArtistByIdRouter.js';
import getMyArtistRouter from './getMyArtistRouter.js';
import patchArtistRouter from './patchArtistRouter.js';
import postArtistRouter from './postArtistRouter.js';

const artistsRouter = Router();

artistsRouter.use(deleteArtistRouter);
artistsRouter.use(getAllArtistsRouter);
artistsRouter.use(getArtistByIdRouter);
artistsRouter.use(getMyArtistRouter);
artistsRouter.use(patchArtistRouter);
artistsRouter.use(postArtistRouter);

export default artistsRouter;
