/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { account, databases, ID } from '../../lib/appwrite';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';  
//import e from 'cors';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [verificationMessage, setVerificationMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
    const twosteponeotp = false;
    const navigate = useNavigate();

    const SESSION_TIMEOUT = 18000000; // 30 seconds for testing (adjust as needed)
    const [sessionTimer, setSessionTimer] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const session = await account.get();
                if (session) {
                    console.log('Active session:', session);
                    navigate('/targets');
                    startSessionTimer();
                }
            } catch (err) {
                console.log('No active session, user is not logged in');
            }
        };
        checkSession();

        return () => {
            if (sessionTimer) {
                clearTimeout(sessionTimer);
            }
        };
    }, [navigate, sessionTimer]);

    const startSessionTimer = () => {
        const timer = setTimeout(() => {
            console.log('Session expired');
            logout();
        }, SESSION_TIMEOUT);
        setSessionTimer(timer);
    };

    const handlegoogleLogin = () => {
        account.createOAuth2Session(
            "google",
            "http://localhost:3000",
            "http://localhost:3000"
        );
    };

    const logout = async () => {
        try {
            await account.deleteSession('current');
            console.log('User logged out');
            navigate('/');
        } catch (err) {
            console.error('Error during logout:', err);
        }
    };

    const login = async (email, password) => {
        setError(''); // Clear previous errors
        try {
            // Check if a session already exists
            const session = await account.get();
            if (session) {
                setError('You are already logged in!');
                navigate('/targets');
                startSessionTimer();
                return; // Stop further execution if logged in
            }
        } catch {
            console.log('No active session, proceeding to login');
        }

        try {
            //Attempt to log in
            await account.createEmailPasswordSession(email, password);
            const user = await account.get();
            const userDocument = await databases.getDocument(
                '67726026001452427a70',
                '6772606b003db79a503d',
                user.$id
            );
            const isTwoFactorAuthEnabled = userDocument.TwoFactorAuth;
            console.log(isTwoFactorAuthEnabled);
            // Check email verification
            if (!user.emailVerification) {
                setError('Your email is not verified. Please verify your email before logging in.');
                await account.deleteSession('current'); // Log out the user
                return; // Stop further execution if email is not verified
            }
            if (isTwoFactorAuthEnabled) {
                //const userid=user.$id;
                await account.deleteSession('current'); // Log out the user
                setVerificationMessage('Two step verification is enabled. Please check your email for the verification code.');
                await account.createMagicURLToken(ID.unique(), email, 'http://localhost:3000/authenticate');
                return;
            }
            if (twosteponeotp) {
                await account.deleteSession('current');
                const sessionToken = await account.createEmailToken(ID.unique(), email);
                setVerificationMessage('Please check your email for the verification OTP.');
                const userId = sessionToken.userId;
                const userOtp = prompt('Enter the OTP sent to your email:');

                if (!userOtp) {
                    setError('OTP is required to complete login.');
                    await account.deleteSession('current'); // Log out the user
                    return;
                }
                try {
                    // Validate the OTP and create a session
                    await account.createSession(userId, userOtp);
                    navigate('/targets');
                    startSessionTimer();
                } catch (otpError) {
                    console.error('OTP validation error:', otpError.message);
                    setError(otpError.message);
                    await account.deleteSession('current'); // Log out the user
                }
                return;
            }

            navigate('/targets');
            startSessionTimer();
        } catch (loginErr) {
            console.error('Login error:', loginErr.message);
            setError(`Login failed: ${loginErr.message}`);
        }
    };

    const resendVerification = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            const user = await account.get();
            await account.createVerification('http://localhost:3000/verify-email', user.email);
            setVerificationMessage(`A verification email has been sent to your ${user.email} address.`);
            await account.deleteSession('current');
        } catch (err) {
            console.error('Resend verification error:', err.message);
            setError(`Failed to resend verification email: ${err.message}`);
        }
    }

    const register = async (email, password, name) => {
        try {

            await account.create(ID.unique(), email, password, name);
            await account.createEmailPasswordSession(email, password);
            const user = await account.get();
            await account.createVerification('http://localhost:3000/verify-email', user.email);
            setVerificationMessage(`A verification email has been sent to your ${user.email} address.`);
            await account.deleteSession('current');
            setError('');
        } catch (err) {
            console.error('Registration error:', err.message);
            setError(err.message);
        }
    };

    return (
        <div className="container-login">
            <div className="left-section-login">
                <img src="/infoziant-logo.png" alt="logo" className="infz-logo" />
                <h2 className="title-login">Cyber Security</h2>
                <p className="subtitle-login">
                    Our team of cybersecurity experts utilizes advanced methodologies to assess and protect your digital assets, ensuring top-tier security against potential threats. Explore our range of services, including VAPT, security testing, and more.
                </p>
                <button className="learn-more-button-login">Learn More</button>
            </div>

            <div className="right-section-login">
                {isLogin ? (
                    <form className="form-login" onSubmit={(e) => { e.preventDefault(); login(email, password); }}>
                        <h2 className="form-title-login">Login to your account</h2>
                        {verificationMessage && <div className="success-message-login"><span>{verificationMessage}</span></div>}

                        {/* Email Field */}
                        <div className="input-group-login">
                            <label className="label-login" htmlFor="email">Email</label>
                            <div className="input-wrapper-login">
                                <FaEnvelope className="input-icon-login" />
                                <input
                                    className={`input-login ${error ? 'input-error-login' : ''}`}
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="input-group-login">
                            <label className="label-login" htmlFor="password">Password</label>
                            <div className="input-wrapper-login">
                                <FaLock className="input-icon-login" />
                                <input
                                    className={`input-login ${error ? 'input-error-login' : ''}`}
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="forgot-password-container-login">
                            <span
                                className="forgot-password-link-login"
                                onClick={() => navigate('/forget-password')}
                            >
                                Forget Password?
                            </span>
                        </div>

                        {/* Error Messages */}
                        {error && <span className="error-message-login">{error}</span>}
                        {error.includes('not verified') && (
                            <p className="error-form-login">
                                <span onClick={() => resendVerification(email, password)}>
                                    Click here to Resend verification email
                                </span>
                            </p>
                        )}

                        {/* Submit Button with Icon */}
                        <button className="login-button-login" type="submit">
                            <FaSignInAlt className="button-icon-login" /> Login
                        </button>

                        {/* Google Login */}
                        <div className="or-contain"><span>or</span></div>
                        <button className="google-login-button" type="button" onClick={handlegoogleLogin}>
                            <FaGoogle className="google-icon" /> Login with Google
                        </button>

                        {/* Switch to Sign Up */}
                        <p className="toggle-form-login">
                            Don't have an account? <span onClick={() => setIsLogin(false)}>Sign up</span>
                        </p>
                    </form>
                ) : (
                    <form className="form-login" onSubmit={(e) => { e.preventDefault(); register(email, password, name); }}>
                        <h2 className="form-title-login">Create your account</h2>
                        {verificationMessage && <div className="success-message-login"><span>{verificationMessage}</span></div>}

                        {/* Name Field */}
                        <div className="input-group-login">
                            <label className="label-login" htmlFor="name">Name</label>
                            <div className="input-wrapper-login">
                                <FaUser className="input-icon-login" />
                                <input
                                    className={`input-login ${error ? 'input-error-login' : ''}`}
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="input-group-login">
                            <label className="label-login" htmlFor="email">Email</label>
                            <div className="input-wrapper-login">
                                <FaEnvelope className="input-icon-login" />
                                <input
                                    className={`input-login ${error ? 'input-error-login' : ''}`}
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="input-group-login">
                            <label className="label-login" htmlFor="password">Password</label>
                            <div className="input-wrapper-login">
                                <FaLock className="input-icon-login" />
                                <input
                                    className={`input-login ${error ? 'input-error-login' : ''}`}
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Error Messages */}
                        {error && <span className="error-message-login">{error}</span>}

                        {/* Submit Button with Icon */}
                        <button className="login-button-login" type="submit">
                            <FaUserPlus className="button-icon-login" /> Sign Up
                        </button>

                        {/* Google Sign Up */}
                        <div className="or-contain"><span>or</span></div>
                        <button className="google-login-button" type="button" onClick={handlegoogleLogin}>
                            <FaGoogle className="google-icon" /> Sign Up with Google
                        </button>

                        {/* Switch to Login */}
                        <p className="toggle-form-login">
                            Already have an account? <span onClick={() => setIsLogin(true)}>Login</span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
