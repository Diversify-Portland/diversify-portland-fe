import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Splash from '../Pages/Splash';
import NavBar from '../Nav/NavBar';

export default function App() {
  return (
    <Router>
      <NavBar />;
    </Router>
  );
}
