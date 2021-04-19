import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
        <h2>Sorry</h2>
        <p>Not implemented yet</p>
        <Link to="/">
          <button type="button">
            Go Home!
          </button>
        </Link>
    </div>
  );
};

export default NotFound;
