import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faTimes,
  faBars,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
library.add(faTimes, faBars, faCaretDown, faFacebook, faInstagram);
// import Splash from '../Pages/Splash';
import { sectionsData } from '../../../data/AboutPeople';
import AboutUsList from '../Pages/AboutUs';
import NavBar from '../Nav/NavBar';

export default function App() {
  return (

    <Router>
      <NavBar />
      <AboutUsList sections={sectionsData} />
    </Router>
  );
}
