import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import App from './App';
import { UserProvider } from './contexts/UserContext'; // Import UserProvider
import VerifyEmail from './Pages/Verify/VerifyEmail';
import Authenticate from './Pages/Authenticate/Authenticate';
import Forgetpass from './Pages/Forgetpass/Forgetpass';
import UpdatePassword from './Pages/Forgetpass/UpdatePassword';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap the app with UserProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<App />} />
          <Route path="/verify-email" element={<VerifyEmail/>} />
          <Route path="/authenticate" element={<Authenticate/>} /> 
          <Route path='/forget-password'  element={<Forgetpass/>}/>
          <Route path='/update-password'  element={<UpdatePassword/>}/>
          
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
