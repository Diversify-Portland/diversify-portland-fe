import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonNav from './ButtonNav';
import DropdownAbout from './DropdownAbout';
// import logo from '../../assets/diversifyLogoPng.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  const caret = (
    <FontAwesomeIcon icon='caret-down' className='menu-icon'></FontAwesomeIcon>
  );
  // const x = (
  //   <FontAwesomeIcon
  //     icon='times'
  //     className='menu-icon'
  //   ></FontAwesomeIcon>
  // );
  // const bars = (
  //   <FontAwesomeIcon
  //     icon='bars'
  //     className='menu-icon'
  //   ></FontAwesomeIcon>
  // );
  const [click, setClick] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobile = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
         Diversify Portland
        </Link>
        <div onClick={handleClick} className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobile}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobile}>
              About Us {caret}
            </Link>
            {dropDown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobile}>
              Community {caret}
            </Link>
            {dropDown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobile}>
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/join' className='nav-links-mobile' onClick={closeMobile}>
            Join Us
            </Link>
          </li>
        </ul>
        <ButtonNav />
      </nav>
    </>
  );
};

export default NavBar;
