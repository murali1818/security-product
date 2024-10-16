import React, { useState } from 'react';
import './TwoFactorModal.css';
import QR_Code from "../../images/QR-code.png"

const TwoFactorModal = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleEnable = () => {
    // Simulate enabling two-factor authentication
    setIsSuccess(true);
    
    // Hide modal after success
    setTimeout(() => {
      setIsSuccess(false);
      onClose(); // Close modal
    }, 2000); // Show success message for 2 seconds
  };

  return (
    <div className='twostepverification'>
        <div className="modal-overlay">
      <div className="modal-container">

        {/* Success Message */}
        {isSuccess && (
          <div className="success-notification">
            Two-Factor Authentication successfully enabled!
          </div>
        )}

        {/* Current Password Input */}
        <div className="modal-input-group">
          <label htmlFor="current-password">Current Password</label>
          <input type="password" id="current-password" placeholder="Enter your password" />
        </div>

        {/* QR Code */}
        <div className="qr-code-section">
        <img src={QR_Code} alt="User Avatar" />
        </div>

        {/* Two Authentication Codes */}
        <div className="modal-input-group">
          <label htmlFor="first-code">First Code</label>
          <input type="text" id="first-code" placeholder="Enter first code" />
        </div>
        <div className="modal-input-group">
          <label htmlFor="second-code">Second Code</label>
          <input type="text" id="second-code" placeholder="Enter second code" />
        </div>

        {/* Modal Buttons */}
        <div className="modal-buttons">
          <button className="btn enable-btn" onClick={handleEnable}>Enable</button>
          <button className="btn cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default TwoFactorModal;
