import { useState, useEffect } from 'react';
import "./Profile.css";
import { account, databases, databaseId, collectionId, client, ID,bucketImageId } from '../../lib/appwrite';
import { Storage } from 'appwrite';
const storage = new Storage(client);
 
function Profile() {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    profileImage: '',
  });
 
  // console.log(profile);
 
  const [user, setUser] = useState(null);
 
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [password, setPassword] = useState("********");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState(""); // Add this state
  const [profileImage, setProfileImage] = useState(""); // Initial image
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
 
 
 
 
 
 
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await account.get(); // Get logged-in user details
 
        let profileData = null;
 
        try {
          profileData = await databases.getDocument(databaseId, collectionId, userData.$id);
        } catch (profileError) {
          console.error("Error fetching profile data:", profileError);
        }
 
        setUser(userData); // Store user data (including name and email)
 
        if (profileData) {
          // If profile data exists, update the profile state
          const profileImageID = profileData.profileImage || ''; // Get the stored file ID
 
          // Generate the file URL if the ID exists
          const profileImageURL = profileImageID
            ? storage.getFileView(bucketImageId, profileImageID) // Replace with your bucket ID
            : '';
 
          setProfile({
            fullName: userData.name,
            email: userData.email,
            phone: profileData.phone || '',
            company: profileData.company || '',
            website: profileData.website || '',
            profileImage: profileImageURL, // Use the generated file URL
          });
        } else {
          // If no profile data exists, set default user data
          setProfile({
            fullName: userData.name,
            email: userData.email,
            phone: '',
            company: '',
            website: '',
            profileImage: '',
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
 
    getUserData();
  }, []);
 
 
 
  const handleEnable2FA = async () => {
    try {
      const userData = await account.get();
      const userId = userData.$id;
      const updatedUser = await databases.updateDocument(
        databaseId,
        collectionId,
        userId,
        { TwoFactorAuth: !isTwoFactorEnabled }
      );
      setIsTwoFactorEnabled(updatedUser.TwoFactorAuth);
      console.log(
        "Two-Factor Authentication state updated:",
        updatedUser.TwoFactorAuth
      );
    } catch (error) {
      console.error("Error updating Two-Factor Authentication state:", error);
    }
  };
 
  useEffect(() => {
    const fetchTwoFactorStatus = async () => {
      try {
        // Fetch user data to get userId
        const userData = await account.get();
        const userId = userData.$id;
 
        // Fetch 2FA status from the database
        const userDocument = await databases.getDocument(
          databaseId,
          collectionId,
          userId
        );
        setIsTwoFactorEnabled(userDocument.TwoFactorAuth || false);
      } catch (error) {
        console.error("Error fetching 2FA status:", error);
      }
    };
 
    fetchTwoFactorStatus();
  }, [databaseId, collectionId]);
 
 
 
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      let existingProfile = null;
      try {
        existingProfile = await databases.getDocument(databaseId, collectionId, user.$id);
      } catch (profileError) {
        if (profileError.code === 404) {
          existingProfile = null;
        } else {
          console.error("Error fetching profile data:", profileError);
          alert("Error fetching profile data. Please try again.");
          return;
        }
      }
 
      // Handle Profile Image Upload only if it's a valid File
      let uploadedImageId = null;
      if (profile.profileImage && profile.profileImage instanceof File) {
        console.log("Profile Image:", profile.profileImage);
 
        try {
          const fileUploadResponse = await storage.createFile(
            bucketImageId, // Replace with your bucket ID
            ID.unique(),
            profile.profileImage
          );
          uploadedImageId = fileUploadResponse.$id;
        } catch (uploadError) {
          console.error("Error uploading profile image:", uploadError);
          alert("Failed to upload profile image. Please try again.");
          return;
        }
      } else if (profile.profileImage) {
        // Handle the case where profile.profileImage is not a File instance
        return;
      }
 
      const updatedData = {
        fullName: profile.fullName,
        email: profile.email,
        phone: profile.phone,
        company: profile.company,
        website: profile.website,
        profileImage: uploadedImageId || existingProfile?.profileImage,
      };
 
      if (existingProfile) {
        const updatedFields = {};
        for (let key in updatedData) {
          if (existingProfile[key] !== updatedData[key]) {
            updatedFields[key] = updatedData[key];
          }
        }
        if (Object.keys(updatedFields).length > 0) {
          await databases.updateDocument(databaseId, collectionId, user.$id, updatedFields);
          alert("Profile updated successfully!");
        } else {
          alert("No changes detected.");
        }
      } else {
        await databases.createDocument(databaseId, collectionId, user.$id, updatedData);
        alert("Profile created successfully!");
      }
 
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
 
 
 
 
 
 
 
 
  const handlePasswordChange = () => {
    setIsEditingPassword(true);
  };
 
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the updatePassword method with the current and new passwords
      await account.updatePassword(newPassword, currentPassword);
      setIsEditingPassword(false); // Close password editing mode
      alert("Password updated successfully!");
    } catch (error) {
      console.error("Error updating password:", error.message);
      alert("Error updating password: " + error.message);
    }
  };
 
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
 
  const handleImageChange = async (e) => {
    const file = e.target.files[0];  // Get the selected file
 
    if (!file) {
      console.error("No file selected");
      return;
    }
 
    // Check if the file is an image (optional)
    if (!file.type.startsWith("image/")) {
      console.error("Please select a valid image file.");
      return;
    }
 
    try {
      // Step 1: Upload the selected file to Appwrite Storage
      const response = await storage.createFile(
        bucketImageId, // Replace with your bucket ID
        ID.unique(),
        file
      );
      console.log("File uploaded successfully", response);
 
      // Get the uploaded file's unique ID
      const fileID = response.$id;
      console.log("File ID:", fileID);
 
      // Step 2: Fetch the logged-in user's data
      const userData = await account.get();
      const userId = userData.$id;
 
      // Step 3: Update the `profileImage` in the user's database document
      const updatedUser = await databases.updateDocument(
        databaseId,
        collectionId,
        userId,
        { profileImage: fileID } // Field to update with the new file ID
      );
      console.log("User profile updated successfully:", updatedUser);
 
      // Step 4: Update the local profile state
      setProfile((prevProfile) => ({
        ...prevProfile,
        profileImage: fileID,
      }));
 
      setProfileImage(fileID); // Update the local image state if needed
    } catch (error) {
      console.error("Error uploading image or updating profile:", error);
    }
  };
 
 
 
  const handleCancelPasswordChange = () => {
    setIsEditingPassword(false);
    setCurrentPassword(""); // Clear current password input
    setNewPassword(""); // Clear new password input
};
 
 
 
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the profile data (e.g., API call or state update)
    console.log('Profile updated:', profile);
    setIsEditing(false); // Close the form after saving
  };
 
  return (
    <div className='profile-page'>
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <h2>Profile Settings</h2>
          <div className="user-info">
            <button className="updateProfButt" onClick={() => setIsEditing(true)}>
              Update
            </button>
            <div>
              {profile.profileImage ? (
                <img src={profile.profileImage} alt="Profile" />
              ) : (
                <p>No profile image available</p>
              )}
            </div>
            <div>
              <strong>{profile.fullName || 'Name not set'}</strong><br />
              {profile.email || 'Email not set'}
            </div>
          </div>
        </div>
 
        {/* Profile Info Card */}
        <div className="profile-card">
          <h3>Personal Information</h3>
          <div className="profile-input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="profile-input-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="profile-input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
          <div className="profile-input-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={profile.company}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
        </div>
 
        {/* Security Settings Card */}
        <div className="profile-card">
          <h3>Security Settings</h3>
          <div className="profile-input-group">
            <label>Password</label>
            {isEditingPassword ? (
              <form onSubmit={handlePasswordSubmit}>
                <div className="profile-input-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    required
                  />
                </div>
                <div className="profile-input-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                  />
                </div>
                <div className="button-group">
                  <button type="submit" className="saveProfButt">
                    Save
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={handleCancelPasswordChange}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <input type="password" value={password} readOnly />
                <button onClick={handlePasswordChange} className="edit-btn">
                  Change Password
                </button>
              </div>
            )}
          </div>
 
 
          <div className="profile-input-group">
            <label>Website URL</label>
            <input
              type="url"
              name="website"
              value={profile.website}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
 
          {/* Two-Factor Authentication Toggle */}
          <div className="toggle-switch">
            <span className="toggle-label">Two-Factor Authentication</span>
            <label className="toggle-btn">
              <input
                type="checkbox"
                checked={isTwoFactorEnabled}
                onChange={handleEnable2FA}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
 
        {/* Form to update the profile */}
        {isEditing && (
          <div className="popup-form">
            <button
              className="close-button"
              onClick={() => setIsEditing(false)}
              aria-label="Close"
            >
              ×
            </button>
            <form onSubmit={handleProfileUpdate} className="profile-form">
              <div className="profile-input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="profile-input-group">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <div className="profile-input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="profile-input-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={profile.company}
                  onChange={handleChange}
                />
              </div>
              <div className="profile-input-group">
                <label>Website URL</label>
                <input
                  type="url"
                  name="website"
                  value={profile.website}
                  onChange={handleChange}
                />
              </div>
              <div className="profile-input-group">
                <label>Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <button type="submit" className="saveProfButt">
                Save Changes
              </button>
            </form>
          </div>
        )}
      </div>
 
      {/* Footer */}
      <div className="footer">
        © 2024 Infoziant
      </div>
    </div>
  );
}
 
export default Profile;