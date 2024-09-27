import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NoPages from './Pages/PagesNo/NoPages';
import Dashboard from './Pages/PagesNo/Dashboard';


const Rotuer = () => {
  return (
    <Routes>

      <Route path='/*' element={<NoPages></NoPages>} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default Rotuer;
