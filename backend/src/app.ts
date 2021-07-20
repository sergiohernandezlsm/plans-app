import express, { Response, Request, Application } from 'express';
import SubscriptionPlan from './database/models';
import { test } from './database/models/index';

const app: Application = express();

app.get('/', async (req: Request, res: Response) => {
  res.send(
    await SubscriptionPlan.findAll()
  );
});

test();

app.listen(5000, () => console.log('server running'));