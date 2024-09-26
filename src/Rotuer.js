import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NoPages from './Pages/PagesNo/NoPages';


const Rotuer = () => {
  return (
    <Routes>

      <Route path='/*' element={<NoPages></NoPages>} />

    </Routes>
  );
}

export default Rotuer;
