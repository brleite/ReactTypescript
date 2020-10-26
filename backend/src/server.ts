import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';
import AppError from './errors/AppError';

const SERVER_PORT = 19002;

const app = express();

app.use(
  cors({
    /* origin: 'http://localhost:8080', */
  }),
);
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
// Rotas como middlewares
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(19002, () => {
  console.log(`👌 Server started on port ${SERVER_PORT}`);
});
