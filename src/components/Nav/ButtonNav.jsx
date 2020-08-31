import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonNav.css';

const ButtonNav = () => {
  return (
    <>
      <div className='color'> 
        <Link to='join-us'>
          <button className={styles.btn}>Join Us</button>
        </Link>
      </div>
    </>
  );
};

export default ButtonNav;
