import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NoPages from './Pages/PagesNo/NoPages';
import ScanPage from './Pages/Scan/ScanPage';
import Target from './Pages/Target/Target';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reports from './Pages/Reports/Reports';
import Scan from "./Pages/Scan/Scan";
import Targetdata from './Pages/Targetdata/Targetdata';
import Vulnerabilities from './Pages/Vulnerabilities/Vulnerabilities';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Profile/Profile';


const Rotuer = () => {
  return (
    <Routes>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
      <Route path='/scans' element={<ScanPage></ScanPage>}/>
      <Route path='/targets' element={<Target></Target>}/>
      <Route path='/reports' element={<Reports></Reports>}/>
      <Route path='/scan/:id' element={<Scan></Scan>}/>
      <Route path='/*' element={<NoPages></NoPages>} />
      <Route path='target/:id' element={<Targetdata></Targetdata>}/>
      <Route path='/vulnerabilities' element={<Vulnerabilities></Vulnerabilities>}/>
      <Route path='/settings' element={<Settings></Settings>}/>
      <Route path='/profile' element={<Profile />}/>


    </Routes>
  );
}

export default Rotuer;
