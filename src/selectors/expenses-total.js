export default expenses =>
  expenses.map(item => item.amount).reduce((sum, value) => sum + value, 0);
