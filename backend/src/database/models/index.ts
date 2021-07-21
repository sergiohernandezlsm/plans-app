import { Sequelize } from "sequelize";

export const sequelizeConnection = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT as number | undefined,
    dialect: 'mysql',
  }
);
