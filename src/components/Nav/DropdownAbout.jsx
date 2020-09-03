import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import styles from './DropdownAbout.css';
import { AboutItems } from './AboutItems';

const DropdownAbout = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {AboutItems.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className={item.className}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropdownAbout;
