import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage.jsx';
import Register from '../pages/Register.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage /> }/>
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
