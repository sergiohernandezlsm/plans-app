import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import subscriptionPlans from './routes/subscription-plans';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/", subscriptionPlans).get('/', (req: Request, res: Response) => {
  res.send({ message: 'API is live' });
});

app.listen(5000, () => console.log('server running'));
