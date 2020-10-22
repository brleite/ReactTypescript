import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';

const SERVER_PORT = 19002;

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
// Rotas como middlewares
app.use(routes);

app.listen(19002, () => {
  console.log(`👌 Server started on port ${SERVER_PORT}`);
});
