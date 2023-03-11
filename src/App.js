import React from 'react';

import Home from './pages/Home';
import Login12 from './pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';


const App = () => {
  return (
    // <Router>
    // {' '}
    <div>
    
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/Register' element={<Login12 />} />
      </Routes>
    
    </div>
    // {/* </Router> */}
  );
};

export default App;
