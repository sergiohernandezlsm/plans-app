
import { Router, Response, Request } from 'express';
import SubscriptionPlan from '../database/models/SubscriptionPlan';
import { test } from '../database/models/index';

const router = Router();

router.get('/subscription-plans', async (req: Request, res: Response) => {
  res.send(
    await SubscriptionPlan.findAll()
  );
});

test();

export default router;
