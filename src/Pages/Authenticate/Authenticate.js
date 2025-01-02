import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { account } from '../../lib/appwrite';
import './Authenticate.css';

const Authenticate = () =>  {
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
        //await account.updateVerification(userId, secret);
        await account.createSession(userId, secret);
        setMessage('Authenticate succesfully! You now redirect to main page .');
        setTimeout(() => navigate('/targets'), 1000); // Navigate after 2 seconds
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

export default Authenticate
