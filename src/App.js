import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';

import Header from './components/Header/Header';
import './App.css';
import Rotuer from './Rotuer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
            <div className="App">
                <div className="container">
                    <Header></Header>
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div id="main" className={isSidebarOpen ? 'main-shrink' : 'main-expand'}>
                        <Rotuer />
                    </div>
                </div>
            </div>

    );
}

export default App;
