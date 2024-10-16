import React, { useState } from 'react';
import './Profile.css';
import TwoFactorModal from './TwoFactorModal';
import ProfileImage from '../../images/profile-image1.jpeg';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEnable2FA = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const saveTheProfile = () =>{
        alert("Successfully changed")
    }


  return (
    <div className='profile-page'>
        <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <h2>Profile Settings</h2>
        <div className="user-info">
        <img src={ProfileImage} alt="User Avatar" />
          <div>
            <strong>Sathish</strong><br />
            sathish@gmail.com
          </div>
        </div>
      </div>

      {/* Profile Info Card */}
      <div className="profile-card">
        <h3>Personal Information</h3>
        <div className="profile-input-group">
          <label>Email ID</label>
          <input type="email" value="demo@gmail.com" readOnly />
        </div>
        <div className="profile-input-group">
          <label>Role</label>
          <input type="text" value="Tester" readOnly />
        </div>
      </div>

      {/* Security Settings Card */}
      <div className="profile-card">
        <h3>Security Settings</h3>
        <div className="toggle-switch">
          <span className="toggle-label">Two-Factor Authentication</span>
          <label className="toggle-btn">
            <input type="checkbox" onChange={handleEnable2FA} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Two-Factor Modal */}
      <TwoFactorModal isOpen={isModalOpen} onClose={handleCloseModal} />
    

      {/* Save Button */}
      <button className="save-btn" onClick={saveTheProfile}>Save Changes</button>

      {/* Footer */}
      <div className="footer">
      © 2024 Infoziant
      </div>
    </div>
    </div>
  );
};

export default Profile;
