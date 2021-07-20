import SubscriptionPlan from '../../database/models/SubscriptionPlan';
import express from 'express';
import request from 'supertest';
import routes from '.';

jest.mock('../../database/models/SubscriptionPlan');

const mockFindAll = SubscriptionPlan.findAll as jest.Mock;
const mockFindByPk = SubscriptionPlan.findByPk as jest.Mock;

const app = express();
app.use(express.json());
app.use('/', routes);

const mockSubscriptionPlan = { id: 1 };

describe('test subscription plans router', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should get all subscription plans', async () => {
    mockFindAll.mockImplementation(() => [mockSubscriptionPlan]);
    const response = await request(app).get('/subscription-plans');
    expect(response.status).toEqual(200);
    expect(SubscriptionPlan.findAll).toHaveBeenCalledTimes(1);
  });
  it('should get all subscription plans', async () => {
    mockFindByPk.mockImplementation(() => mockSubscriptionPlan);
    const response = await request(app).get('/subscription-plans/1');
    expect(response.status).toEqual(200);
    expect(SubscriptionPlan.findByPk).toHaveBeenCalledTimes(1);
  });
});