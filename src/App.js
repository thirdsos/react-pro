import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
// import {Switch} from 'react-router-dom'
import Home from './components/Home';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';



function App() {
  const [isLogin, setIsLogin] = useState(false)
  console.log(isLogin)
  return (
    <Home isLogin={isLogin} />
  );
}

export default App;
