import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // For accessing URL parameters
import { account } from '../../lib/appwrite';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
      const location = useLocation();
      
          const navigate = useNavigate();
    const urlParams = new URLSearchParams(location.search);
      const secret = urlParams.get('secret');
      const userId = urlParams.get('userId');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // State for handling errors
    const [success, setSuccess] = useState(''); // State for success message

    const handleUpdatePassword = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setError('');
        setSuccess('');

        // Validate passwords
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            // Call Appwrite updateRecovery method
            await account.updateRecovery(userId, secret, password, confirmPassword);
            setSuccess('Password updated successfully. You can now log in with your new password.');
            navigate('/');
        } catch (err) {
            // Handle errors
            setError(err.message || 'Something went wrong. Please try again.');
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
                <form className="form-login" onSubmit={handleUpdatePassword}>
                    <h2 className="form-title-login">Update Your Password</h2>

                    {error && <div className="error-message-login">{error}</div>}
                    {success && <div className="success-message-login">{success}</div>}

                    <div className="input-group-login">
                        <label className="label-login" htmlFor="password">New Password</label>
                        <input
                            className={`input-login ${error ? 'input-error-login' : ''}`}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="input-group-login">
                        <label className="label-login" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className={`input-login ${error ? 'input-error-login' : ''}`}
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button className="login-button-login" type="submit">Update Password</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePassword;
