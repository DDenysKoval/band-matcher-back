import { Router } from 'express';
import addToFavouriteRouter from './addToFavouriteRouter.js';
import deleteToFavouriteRouter from './deleteFromFavouriteRouter.js';
import deleteMusicianRouter from './deleteMusicianRouter.js';
import getAllMusiciansRouter from './getAllMusiciansRouter.js';
import getFavouriteRouter from './getFavouriteRouter.js';
import getMeRouter from './getMerouter.js';
import getMusicianByIdRouter from './getMusicianByIdRouter.js';
import patchMusicianAvatarRouter from './patchMusicianAvatarRouter.js';
import patchMusicianRouter from './patchMusicianRouter.js';
import postMusicianRouter from './postMusicianRouter.js';

const musiciansRouter = Router();

musiciansRouter.use(addToFavouriteRouter);
musiciansRouter.use(deleteToFavouriteRouter);
musiciansRouter.use(deleteMusicianRouter);
musiciansRouter.use(getAllMusiciansRouter);
musiciansRouter.use(getFavouriteRouter);
musiciansRouter.use(getMeRouter);
musiciansRouter.use(getMusicianByIdRouter);
musiciansRouter.use(patchMusicianAvatarRouter);
musiciansRouter.use(patchMusicianRouter);
musiciansRouter.use(postMusicianRouter);

export default musiciansRouter;
