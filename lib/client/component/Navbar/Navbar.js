import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './navbar.css';

/**
 * Navbar comoponent: Displays navbar with user image, link tags Overview, Campaings, Analytics
 *
 * @props  {String}    userImg      user image location
 */

const Navbar = ({ userImg }) => {
  const [activeItem, setActiveItem] = useState(1);

  const onClickHandler = (event) => {
    setActiveItem(event.currentTarget.value);
  };

  return (
    <>
      <div className="user-img">
        <img src={userImg} alt="user image" />
      </div>

      <nav className="navbar">
        <ul>
          <li onClick={onClickHandler} value={1}>
            <a className={activeItem === 1 ? 'navbar-active' : ''} href="#">
              Overview
            </a>
          </li>
          <li onClick={onClickHandler} value={2}>
            <a href="#" className={activeItem === 2 ? 'navbar-active' : ''}>
              Campaings
            </a>
          </li>
          <li onClick={onClickHandler} value={3}>
            <a href="#" className={activeItem === 3 ? 'navbar-active' : ''}>
              Analytics
            </a>
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
