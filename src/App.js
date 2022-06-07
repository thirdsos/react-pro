import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {Switch} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';



function App() {
  const [isLogin, setIsLogin] = useState(false)
  console.log(isLogin)
  return (
    <Router>
      <Navbar />
      <Container style={{ paddingTop: 10 }}>
        <Routes>
          <Route exact path="/login" element={<Login callback={setIsLogin} isLogin={isLogin} />} />
          <Route exact path="/" element={<Home isLogin={isLogin} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
