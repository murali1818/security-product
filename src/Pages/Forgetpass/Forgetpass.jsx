import React, { useState } from 'react';
import { account } from '../../lib/appwrite';
import { FaEnvelope } from 'react-icons/fa'; 

const Forgetpass = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); // State for handling errors
    const [success, setSuccess] = useState(''); // State for success message
    

    const login = async (email) => {
        try {
            // Clear previous messages
            setError('');
            setSuccess('');

            // Attempt to create a recovery
            await account.createRecovery(email, 'https://security-product-a38zbrnxi-murali1818s-projects.vercel.app/update-password');
            setSuccess('Recovery email sent successfully. Please check your inbox.');
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
                <form
                    className="form-login"
                    onSubmit={(e) => {
                        e.preventDefault();
                        login(email);
                    }}
                >
                    <h2 className="form-title-login">Enter your email for recovery</h2>

                    {error && <div className="error-message-login">{error}</div>}
                    {success && <div className="success-message-login">{success}</div>}

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

                    <button className="login-button-login" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Forgetpass;
