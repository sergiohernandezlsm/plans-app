module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("plans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      planCode: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
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
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("plans");
  },
};
