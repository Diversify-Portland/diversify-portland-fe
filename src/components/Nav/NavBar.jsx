import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonNav from './ButtonNav.css';
import Dropdown from './Dropdown';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  const x = (
    <FontAwesomeIcon
      icon='times'
      className='menu-icon'
    ></FontAwesomeIcon>
  );
  const bars = (
    <FontAwesomeIcon
      icon='bars'
      className='menu-icon'
    ></FontAwesomeIcon>
  );
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Diversify Portland
        </Link>
        <div onClick={handleClick} className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
