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

class Plan extends Model {
  public id!: number;
  public planCode!: string;
  public name!: string;
  public monthlyCost!: number;
  public annualCost!: number;
}

Plan.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    planCode: {
      type: new DataTypes.STRING(2),
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    monthlyCost: {
      type: new DataTypes.INTEGER,
      allowNull: false,
    },
    annualCost: {
      type: new DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "plans",
    sequelize,
  }
);

export const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
