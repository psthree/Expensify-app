export default expenses =>
  expenses.map(item => expenses.amount).reduce((sum, value) => sum + value, 0);
