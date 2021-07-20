import express, { Response, Request, Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hellos');
});

app.listen(5000, () => console.log('server running'));