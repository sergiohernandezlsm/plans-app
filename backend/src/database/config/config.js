const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('plans_database_new', 'root', 'password123', {
  host: 'plans_database',
  dialect: 'mysql'
});

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test();
