import SubscriptionPlan from '../../database/models/SubscriptionPlan/SubscriptionPlan';
import express from 'express';
import request from 'supertest';
import routes from '.';

jest.mock('../../database/models/SubscriptionPlan/SubscriptionPlan');

const mockFindAll = SubscriptionPlan.findAll as jest.Mock;
const mockFindByPk = SubscriptionPlan.findByPk as jest.Mock;

const app = express();
app.use(express.json());
app.use('/', routes);

const mockSubscriptionPlan = { id: 1 };

describe('test subscription plans router', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFindAll.mockImplementation(() => [mockSubscriptionPlan]);
    mockFindByPk.mockImplementation(() => mockSubscriptionPlan);
  });
  it('should get all subscription plans', async () => {
    const response = await request(app).get('/subscription-plans');
    expect(response.status).toEqual(200);
    expect(SubscriptionPlan.findAll).toHaveBeenCalledTimes(1);
  });
  it('should NOT get all subscription plans', async () => {
    mockFindAll.mockImplementation(() => []);
    const response = await request(app).get('/subscription-plans');
    expect(response.status).toEqual(404);
  });
  it('should get subscription plan by id', async () => {
    mockFindByPk.mockImplementation(() => mockSubscriptionPlan);
    const response = await request(app).get('/subscription-plans/1');
    expect(response.status).toEqual(200);
    expect(SubscriptionPlan.findByPk).toHaveBeenCalledTimes(1);
  });
  it('should NOT get subscription plan by id', async () => {
    mockFindByPk.mockImplementation(() => { });
    const response = await request(app).get('/subscription-plans/1');
    expect(response.status).toEqual(404);
  });
});