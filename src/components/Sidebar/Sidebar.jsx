import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaTachometerAlt, FaShieldAlt, FaCrosshairs, FaQrcode, FaFileAlt, FaCog} from 'react-icons/fa';
import { FaCrosshairs, FaQrcode} from 'react-icons/fa';
import './Sidebar.css';


function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div>
            <div className="menu-items">
                {/* <NavLink 
                    to="/dashboard" 
                    activeClassName="active"
                    className={`menu-item ${isOpen ? 'open' : 'closed'}`}
                >
                    <FaTachometerAlt /> {isOpen && 'Dashboard'}
                </NavLink> */}
                <NavLink 
                    to="/targets" 
                    activeClassName="active"
                    className={`menu-item ${isOpen ? 'open' : 'closed'}`}
                >
                    <FaCrosshairs /> {isOpen && 'Targets'}
                </NavLink>
                {/* <NavLink 
                    to="/vulnerabilities" 
                    activeClassName="active"
                    className={`menu-item ${isOpen ? 'open' : 'closed'}`}
                >
                    <FaShieldAlt /> {isOpen && 'Vulnerabilities'}
                </NavLink> */}
                <NavLink 
                    to="/scans" 
                    activeClassName="active"
                    className={`menu-item ${isOpen ? 'open' : 'closed'}`}
                >
                    <FaQrcode /> {isOpen && 'Scans'}
                </NavLink>
                {/* <NavLink 
                    to="/reports" 
                    activeClassName="active"
                    className={`menu-item ${isOpen ? 'open' : 'closed'}`}
                >
                    <FaFileAlt /> {isOpen && 'Reports'}
                </NavLink> */}
                {/* <NavLink 
                    to="/settings" 
                    activeClassName="active"
                    className={`menu-item ${isOpen ? 'open' : 'closed'}`}
                >
                    <FaCog /> {isOpen && 'Settings'}
                </NavLink> */}
            </div>
            </div>

        </div>
    );
}

export default Sidebar;
