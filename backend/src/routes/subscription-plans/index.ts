import { Router, Response, Request } from 'express';
import SubscriptionPlan from '../../database/models/SubscriptionPlan/SubscriptionPlan';

const router = Router();
const notFound = 'Subscription plan not found';

router.get('/subscription-plans', async (req: Request, res: Response) => {
  const subscriptionPlans = await SubscriptionPlan.findAll();
  if (!subscriptionPlans.length) {
    return res.status(404).send({ message: notFound });
  }
  res.send(subscriptionPlans);
});

router.get('/subscription-plans/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const subscriptionPlan = await SubscriptionPlan.findByPk(+id);
  if (!subscriptionPlan) {
    return res.status(404).send({ message: notFound });
  }
  res.send(subscriptionPlan);
});

export default router;
