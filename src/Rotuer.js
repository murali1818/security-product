import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NoPages from './Pages/PagesNo/NoPages';
import ScanPage from './Pages/Scan/ScanPage';
import Target from './Pages/Target/Target';


const Rotuer = () => {
  return (
    <Routes>
      <Route path='/scans' element={<ScanPage></ScanPage>}/>
      <Route path='/targets' element={<Target></Target>}/>
      <Route path='/*' element={<NoPages></NoPages>} />

    </Routes>
  );
}

export default Rotuer;
