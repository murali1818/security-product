import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { account } from '../../lib/appwrite';
import './VerifyEmail.css';


const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyEmail() {
      const urlParams = new URLSearchParams(location.search);
      const secret = urlParams.get('secret');
      const userId = urlParams.get('userId');

      if (!secret || !userId ) {
        setMessage('Invalid or missing verification details.');
        return;
      }


      try {
        await account.updateVerification(userId, secret);
        //await account.createSession(userId, secret);
        setMessage('Your email has been successfully verified! You can now log in.');
        setTimeout(() => navigate('/'), 2000); // Navigate after 2 seconds
      } catch (error) {
        setMessage(error.message);
      }
    }

    verifyEmail();
  }, [location.search]);

  return (
    <div className="verify-container">
      <h2>Email Verification</h2>
      <p className="verify-message">{message}</p>
    </div>
  );
};

export default VerifyEmail;
