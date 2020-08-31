import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faTimes, faBars);
// import Splash from '../Pages/Splash';
import NavBar from '../Nav/NavBar';

export default function App() {
  return (

    <Router>
      <NavBar />
    </Router>
  );
}
