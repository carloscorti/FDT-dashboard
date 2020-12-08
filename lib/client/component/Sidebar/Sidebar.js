import React, { useState } from 'react';

import Icon from '../Icon/Icon';

import './sidebar.css';

/**
 * Sidebar comoponent: Displays 5 linkable icons as aside tag sidebar
 *
 */

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(1);

  const onClickHandler = (event) => {
    setActiveItem(event.currentTarget.value);
  };
  return (
    <>
      <aside className="sidebar">
        <ul>
          <li onClick={onClickHandler} value={1}>
            <a className={activeItem === 1 ? 'sidebar-active' : ''} href="#">
              <Icon icon="meter" />
            </a>
          </li>

          <li onClick={onClickHandler} value={2}>
            <a className={activeItem === 2 ? 'sidebar-active' : ''} href="#">
              <Icon icon="bubbles" />
            </a>
          </li>

          <li onClick={onClickHandler} value={3}>
            <a className={activeItem === 3 ? 'sidebar-active' : ''} href="#">
              <Icon icon="folder" />
            </a>
          </li>

          <li onClick={onClickHandler} value={4}>
            <a className={activeItem === 4 ? 'sidebar-active' : ''} href="#">
              <Icon icon="evenlop" />
            </a>
          </li>

          <li onClick={onClickHandler} value={5}>
            <a className={activeItem === 5 ? 'sidebar-active' : ''} href="#">
              <Icon icon="gear" />
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
