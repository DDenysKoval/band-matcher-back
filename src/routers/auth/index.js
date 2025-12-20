import { Router } from 'express';
import checkSessionRouter from '../auth/checkSessionRouter.js';
import loginRouter from '../auth/loginRouter.js';
import logoutRouter from '../auth/logoutRouter.js';
import refreshRouter from '../auth/refreshRouter.js';
import registerRouter from '../auth/registerrouter.js';
import resetPwdRouter from '../auth/resetPwdRouter.js';
import sendResetEmailRouter from '../auth/sendResetEmailRouter.js';

const authRouter = Router();

authRouter.use(checkSessionRouter);
authRouter.use(loginRouter);
authRouter.use(logoutRouter);
authRouter.use(refreshRouter);
authRouter.use(registerRouter);
authRouter.use(resetPwdRouter);
authRouter.use(sendResetEmailRouter);

export default authRouter;
