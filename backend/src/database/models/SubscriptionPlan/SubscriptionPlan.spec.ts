import { DataTypes } from 'sequelize';

const mSequelize = {};

jest.mock('..', () => {
  return { sequelize: mSequelize };
});

const modelStaticMethodMocks = {
  init: jest.fn(),
};

jest.mock('sequelize', () => {
  class MockModel {
    public static init(attributes: any, options: any) {
      modelStaticMethodMocks.init(attributes, options);
    }
  }
  return {
    ...jest.requireActual('sequelize'),
    Model: MockModel,
  };
});


describe('test SubscriptionPlan model', () => {
  it('should run the init method', async () => {
    await import('./SubscriptionPlan');
    expect(modelStaticMethodMocks.init).toBeCalledWith(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        planCode: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        monthlyCost: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        annualCost: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize: undefined,
        tableName: "subscription_plans"
      },
    );
  });
});
