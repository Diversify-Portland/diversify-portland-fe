import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonNav from './ButtonNav';
import DropdownAbout from './DropdownAbout';
// import logo from '../../assets/diversifyLogoPng.png';
import styles from './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  const caret = (
    <FontAwesomeIcon icon='caret-down' className='menu-icon'></FontAwesomeIcon>
  );
  const x = (
    <FontAwesomeIcon icon='times' className='menu-icon'></FontAwesomeIcon>
  );
  const bars = (
    <FontAwesomeIcon icon='bars' className='menu-icon'></FontAwesomeIcon>
  );
  const [click, setClick] = useState(false);
  const [dropdownAbout, setDropDownAbout] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobile = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropDownAbout(false);
    } else {
      setDropDownAbout(true);
    }
    // window.innerWidth < 960 ? setDropDownAbout(false) : setDropDownAbout(true);
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropDownAbout(false);
    } else {
      setDropDownAbout(false);
    }
    // window.innerWidth < 960 ? setDropDownAbout(false) : setDropDownAbout(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link to='/' className={styles.navbar_logo}>
          Diversify Portland
        </Link>
        <div onClick={handleClick} className={styles.menu_icon}>
          <div className={`${styles[bars]} ${click ? [x] : [bars]}`}></div>
        </div>
        {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}

        <ul
          className={`${styles.nav_menu} ${
            click ? styles.active : styles.inactive
          }`}
        >
          {/* <ul className={click ? 'nav_menu active' : 'nav_menu'}> */}
          <li className={styles.nav_item}>
            <Link to='/' className={styles.nav_links} onClick={closeMobile}>
              Home
            </Link>
          </li>
          <li
            className={styles.nav_item}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/about'
              className={styles.nav_links}
              onClick={closeMobile}
            >
              About Us {caret}
            </Link>
            {dropdownAbout && <DropdownAbout />}
          </li>
          <li className={styles.nav_item}>
            <Link
              to='/about'
              className={styles.nav_links}
              onClick={closeMobile}
            >
              Community {caret}
            </Link>
            {dropdownAbout && <DropdownAbout />}
          </li>
          <li className={styles.nav_item}>
            <Link
              to='/contact'
              className={styles.nav_links}
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to='/join'
              className={styles.nav_links__mobile}
              onClick={closeMobile}
            >
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
