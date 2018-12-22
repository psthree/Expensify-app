//export a stateless functional component
//description, amount created at
import React from 'react';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    console.log(`test ${id}`);
    return (
        <div>
            <Link to={`/edit/${id}`} >
                <h3>{description}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>

        </div>


    )
}

export default (ExpenseListItem);