import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';
/* import UsersRepository from '../../typeorm/repositories/UsersRepository'; */

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
