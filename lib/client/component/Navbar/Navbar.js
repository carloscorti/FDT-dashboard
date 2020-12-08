import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import './navbar.css';

/**
 * Navbar comoponent: Displays navbar with user image, link tags Overview, Campaings, Analytics
 *
 * @props  {String}    userImg      user image location
 */

const Navbar = ({ userImg }) => {
  const location = useLocation();

  return (
    <>
      <div className="user-img">
        <img src={userImg} alt="user image" />
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <Link
              className={location.pathname === '/' ? 'navbar-active' : ''}
              to="/"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/campaings' ? 'navbar-active' : ''
              }
              to="/campaings"
            >
              Campaings
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/analytics' ? 'navbar-active' : ''
              }
              to="/analytics"
            >
              Analytics
            </Link>
          </li>
        </ul>
        <button>Premium</button>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  userImg: PropTypes.string,
};

export default Navbar;
