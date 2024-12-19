import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NoPages from './Pages/PagesNo/NoPages';
import Target from './Pages/Target/Target';
import Reports from './Pages/Reports/Reports';
import ScanPage from "./Pages/Scan/ScanPage"
import Profile from './Pages/Profile/Profile';
import Scandetails from './Pages/Scandetails/Scandetails';


const Rotuer = () => {
  return (
    <Routes>
      <Route path='/targets' element={<Target></Target>}/>
      <Route path='/scans' element={<ScanPage></ScanPage>}/>
      <Route path='/reports' element={<Reports></Reports>}/> 
      <Route path='/*' element={<NoPages></NoPages>} />
      <Route path='/profile' element={<Profile />}/>
      <Route path='/scandetail' element={<Scandetails></Scandetails>}/>
    </Routes>
  );
}

export default Rotuer;
