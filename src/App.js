import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from "./components/Header/Header";
import './App.css';
//  Assuming you meant 'Router' instead of 'Rotuer'
import Dashboard from './Pages/PagesNo/Dashboard';
 // Import the Dashboard

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="App">
            <Header />
            <div className="container">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div id="main" className={isSidebarOpen ? 'main-shrink' : 'main-expand'}>
                    <Dashboard isSidebarOpen={isSidebarOpen} /> {/* Pass the state */}
                </div>
            </div>
        </div>
    );
}

export default App;
