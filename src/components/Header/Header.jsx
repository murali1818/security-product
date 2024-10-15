import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

import {  FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../images/Infoziant Logo Final.png'

function Header() {



    return (
        <header className='header'>
            <div className="header-content">
            <img src={logo} alt="Logo" className="logo" />
                <div className="user-info">
                <div className="sidebar-bottom">
                <NavLink 
                    to="/profile" 
                    activeClassName="active"
                    className="menu-item closed"
                >
                    <FaUserCircle /> 
                </NavLink>
                <NavLink 
                    to="/notifications" 
                    activeClassName="active"
                    className="menu-item closed"
                >
                    <FaBell /> 
                </NavLink>
                <NavLink 
                    to="/logout" 
                    activeClassName="active"
                    className="menu-item closed"
                >
                    <FaSignOutAlt /> 
                </NavLink>

                {/* Copyright Info */}
                
            </div>
                </div>
                
            </div>
        </header>
    );
}

export default Header;
