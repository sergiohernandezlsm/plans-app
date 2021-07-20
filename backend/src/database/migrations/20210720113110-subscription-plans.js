module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("subscription_plans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      planCode: {
        type: Sequelize.STRING(2),
      },
      name: {
        type: Sequelize.STRING(50),
      },
      monthlyCost: {
        type: Sequelize.INTEGER,
      },
      annualCost: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("subscription_plans");
  },
};
