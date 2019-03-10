//export a stateless functional component
//description, amount created at
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  console.log(`test ${id}`);
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}-
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  );
};

export default ExpenseListItem;

//npm run test -- --watch
