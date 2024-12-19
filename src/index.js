import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import App from './App';
import { UserProvider } from './contexts/UserContext'; // Import UserProvider

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> {/* Wrap the app with UserProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
