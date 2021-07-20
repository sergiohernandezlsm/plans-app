const subscriptionPlans = [
  {
    planCode: 'gb',
    name: 'UK',
    monthlyCost: 10,
    annualCost: 50,
  },
  {
    planCode: 'fr',
    name: 'France',
    monthlyCost: 10,
    annualCost: 60,
  },
  {
    planCode: 'de',
    name: 'Germany',
    monthlyCost: 15,
    annualCost: 75,
  },
  {
    planCode: 'us',
    name: 'USA',
    monthlyCost: 25,
    annualCost: 150,
  },
  {
    planCode: 'jp',
    name: 'Japan',
    monthlyCost: 15,
    annualCost: 65,
  }
];

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('subscription_plans', subscriptionPlans);
  },

  down: queryInterface => queryInterface.bulkDelete('subscription_plans', null, {}),
};
