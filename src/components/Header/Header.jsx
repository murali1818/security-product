import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../images/Infoziant Logo Final.png';
import { account } from '../../lib/appwrite';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [logoutMessage, setLogoutMessage] = useState(''); // State for logout message

    const logout = async () => {
        try {
            await account.deleteSession('current'); // Delete the current session
            console.log('User logged out');
            setLogoutMessage('You have successfully logged out.'); // Show logout message
            setTimeout(() => {
                setLogoutMessage(''); // Clear the message after a timeout
                navigate('/'); // Redirect to login page
            }, 3000); // Redirect after 3 seconds
        } catch (err) {
            console.error('Error during logout:', err);
            setLogoutMessage('Error logging out. Please try again.');
            setTimeout(() => setLogoutMessage(''), 3000); // Clear the message after a timeout
        }
    };

    return (
        <header className='header'>
            <div className="header-content">
                <img src={logo} alt="Logo" className="logo" />
                {logoutMessage && (
                <div className="logout-message">
                    {logoutMessage}
                </div>
            )}
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
                            onClick={logout}
                            activeClassName="active"
                            className="menu-item closed"
                        >
                            <FaSignOutAlt />
                        </NavLink>
                    </div>
                </div>
            </div>
            
        </header>
    );
}

export default Header;
