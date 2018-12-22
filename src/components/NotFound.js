import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        404 Error (page not found)
        <Link to="/" >Dashboard</Link>
    </div>
);

export default NotFound;