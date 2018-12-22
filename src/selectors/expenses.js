import moment from 'moment';

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      //figure out if expenses.description contains the text variable
      //includes and toLowerCase()

      //return if all are true
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      //if we are sorting by date
      if (sortBy === 'date') {
        //if a < b
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if ((sortBy = 'amount')) {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
