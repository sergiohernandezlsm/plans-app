import express, { Response, Request, Application } from 'express';
import { test } from './database/models/index';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hellos2');
});

test();

app.listen(5000, () => console.log('server running'));