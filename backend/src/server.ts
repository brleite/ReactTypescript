import express from 'express';
import routes from './routes';

const SERVER_PORT = 19002;

const app = express();

app.use(express.json());
// Rotas como middlewares
app.use(routes);

app.listen(19002, () => {
  console.log(`👌 Server started on port ${SERVER_PORT}`);
});
