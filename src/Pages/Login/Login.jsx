import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { account } from '../../lib/appwrite';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const SESSION_TIMEOUT = 18000000; // 30 seconds for testing (adjust as needed)
    const [sessionTimer, setSessionTimer] = useState(null);

    useEffect(() => {
        // Check if a session exists when the component mounts
        const checkSession = async () => {
            try {
                const session = await account.get();
                if (session) {
                    console.log('Active session:', session);
                    navigate('/targets');
                    startSessionTimer(); // Start session timer if logged in
                }
            } catch (err) {
                console.log('No active session, user is not logged in');
            }
        };
        checkSession();

        // Cleanup session timer on unmount
        return () => {
            if (sessionTimer) {
                clearTimeout(sessionTimer);
            }
        };
    }, [navigate, sessionTimer]);

    const startSessionTimer = () => {
        // Automatically log out after a timeout period
        const timer = setTimeout(() => {
            console.log('Session expired');
            logout();
        }, SESSION_TIMEOUT);
        setSessionTimer(timer); // Store timer in state
    };

    const logout = async () => {
        try {
            await account.deleteSession('current'); // Delete the current session
            console.log('User logged out');
            navigate('/'); // Redirect to login page after logout
        } catch (err) {
            console.error('Error during logout:', err);
        }
    };

    const login = async (email, password) => {
        setError(''); // Clear previous errors
        try {
            // Check if the user is already logged in
            const session = await account.get();
            if (session) {
                // If the session is active, redirect to dashboard
                setError('You are already logged in!');
                navigate('/targets');
                startSessionTimer(); // Start session timer if logged in
            }
        } catch (err) {
            console.log('No active session, proceeding to login');
            try {
                // If no session, create a new session
                await account.createEmailPasswordSession(email, password);
                navigate('/targets'); // Redirect after successful login
                startSessionTimer(); // Start session timer after login
            } catch (loginErr) {
                console.error('Login error:', loginErr.message);
                setError(`Login failed: ${loginErr.message}`);
            }
        }
    };

    return (
        <div className="container-login">
            <div className="left-section-login">
                <img src="/infoziant-logo.png" alt="logo" className='infz-logo'/>
                <h2 className='title-login'>Cyber Security</h2>
                <p className='subtitle-login'>
                    Our team of cybersecurity experts utilizes advanced methodologies to assess and protect your digital assets, ensuring top-tier security against potential threats. Explore our range of services, including VAPT, security testing, and more.
                </p>
                <button className='learn-more-button-login'>Learn More</button>
            </div>
            <div className="right-section-login">
                <form className="form-login" onSubmit={(e) => { e.preventDefault(); login(email, password); }}>
                    <h2 className="form-title-login">Login your account</h2>

                    <div className="input-group-login">
                        <label className="label-login" htmlFor="email">Email</label>
                        <input
                            className={`input-login ${error ? 'input-error-login' : ''}`}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group-login">
                        <label className="label-login" htmlFor="password">Password</label>
                        <input
                            className={`input-login ${error ? 'input-error-login' : ''}`}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <span className="error-message-login">{error}</span>}

                    <button className="login-button-login" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
