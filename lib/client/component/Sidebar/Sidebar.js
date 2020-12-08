import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import Icon from '../Icon/Icon';

import './sidebar.css';

/**
 * Sidebar comoponent: Displays 5 linkable icons as aside tag sidebar
 *
 */

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <aside className="sidebar">
        <ul>
          <li>
            <Link
              className={location.pathname === '/meter' ? 'sidebar-active' : ''}
              to="/meter"
            >
              <Icon icon="meter" />
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/bubbles' ? 'sidebar-active' : ''
              }
              to="/bubbles"
            >
              <Icon icon="bubbles" />
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/folder' ? 'sidebar-active' : ''
              }
              to="/folder"
            >
              <Icon icon="folder" />
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === '/evenlop' ? 'sidebar-active' : ''
              }
              to="/evenlop"
            >
              <Icon icon="evenlop" />
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === '/gear' ? 'sidebar-active' : ''}
              to="/gear"
            >
              <Icon icon="gear" />
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
