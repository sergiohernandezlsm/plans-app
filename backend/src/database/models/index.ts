import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: 'mysql',
  }
);

interface SubscriptionPlanTypes {
  id: number;
  planCode: string;
  name: string;
  monthlyCost: number;
  annualCost: number;
}

export default class SubscriptionPlan extends Model<SubscriptionPlanTypes> {
  public id!: number;
  public planCode!: string;
  public name!: string;
  public monthlyCost!: number;
  public annualCost!: number;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at?: Date;
}

SubscriptionPlan.init(
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
    tableName: "subscription_plans",
    sequelize,
  }
);

export const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully Sergio.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
