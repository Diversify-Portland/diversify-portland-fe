import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonNav from './ButtonNav.css';
import Dropdown from './Dropdown';
import './NavBar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Diversify Portland
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <svg viewBox='0 0 100 80' width='40' height='40'>
            <rect width='100' height='20' rx='8'></rect>
            <rect y='30' width='100' height='20' rx='8'></rect>
            <rect y='60' width='100' height='20' rx='8'></rect>
          </svg>
          {/* <i className={open ? 'fas fa-times' : 'fas fa-bars'} /> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
