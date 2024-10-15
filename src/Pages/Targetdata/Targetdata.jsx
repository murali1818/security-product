import React, { useState } from 'react';
import "./Targetdata.css"
import { useNavigate } from 'react-router-dom';

const Targetdata = () => {
    const userAgents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36 Edg/89.0.774.57",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.1 Safari/605.1.15",
        "Mozilla/5.0 (Linux; Android 10; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36"
    ];
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('general');
    const [businessCriticality, setBusinessCriticality] = useState('Normal');
    const [isLoginScriptOn, setIsLoginScriptOn] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [continuousScan, setContinuousScan] = useState('');
    const [description, setDescription] = useState('Enter descrption');
    const [selectedUserAgent, setSelectedUserAgent] = useState(userAgents[0]);
    const [caseSensitivePaths, setCaseSensitivePaths] = useState('Yes');
    const [limitCrawl, setLimitCrawl] = useState(false);
    const [excludedPath, setExcludedPath] = useState('');
    const [excludedPaths, setExcludedPaths] = useState([]);
    const [isHttpAuthOn, setIsHttpAuthOn] = useState(false);  // For the toggle switch
    const [userName, setUserName] = useState('');             // For User Name
    const [password1, setPassword1] = useState('');             // For Password
    const [retypePassword, setRetypePassword] = useState(''); // For Retype Password
    const [isTechnologiesOn, setIsTechnologiesOn] = useState(false);
    const [isCustomheaderon, setisCustomheaderon] = useState(false);
    const [isCustomcookieson, setisCustomcookieson] = useState(false);
    const [isAllowedHostsEnabled, setIsAllowedHostsEnabled] = useState(false);
    const [customHeader, setCustomHeader] = useState('');  // State to store the custom header value
    const [cookieName, setCookieName] = useState(''); // State for cookie name
    const [cookieValue, setCookieValue] = useState(''); // State for cookie value

    // Handle the change for Technologies toggle
    const handleTechnologiesToggle = () => {
        setIsTechnologiesOn(!isTechnologiesOn);
    };
    const handleCustomeheader = () => {
        setisCustomheaderon(!isCustomheaderon);

    };
    const handleCookieNameChange = (e) => {
        setCookieName(e.target.value);
    };

    const handleCookieValueChange = (e) => {
        setCookieValue(e.target.value);
    };

    const handleSubmitCookies = () => {
        // Logic for submitting or storing custom cookies (you can adjust this based on your use case)
        alert(`Cookie Name: ${cookieName}, Cookie Value: ${cookieValue}`);
    };
    const handleCustomHeaderChange = (e) => {
        setCustomHeader(e.target.value);  // Store input value in state
    };
    const handlecustomcookies = () => {
        setisCustomcookieson(!isCustomcookieson);
    }
    const handlehost = () => {
        setIsAllowedHostsEnabled(!isAllowedHostsEnabled);
    }


    // Handle HTTP Authentication toggle
    const handleHttpAuthToggle = () => {
        setIsHttpAuthOn(!isHttpAuthOn);  // Toggle the HTTP Auth status
    };


    const handleAddExcludedPath = () => {
        if (excludedPath) {
            setExcludedPaths([...excludedPaths, excludedPath]);
            setExcludedPath('');
        }
    };

    const removeFile = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.value = '';  // Reset the file input value to clear the selected file
        }
    };



    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleLoginScriptToggle = () => {
        setIsLoginScriptOn(!isLoginScriptOn);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('User ID:', userId);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    const handleSave = () => {
        // Implement save logic here, e.g., saving target data to backend or state
        alert('Data saved successfully');
    };

    const handleScan = () => {
        // Implement scan logic here
        alert('Scan started');
    };

    return (
        <div className='target-data-container'>
            <div className='button-container'>
                <div className="button-group">
                    <button className="btn back-btn" onClick={() => navigate(-1)}>
                        <i className="fas fa-arrow-left"></i> Back
                    </button>

                    <button className="btn scan-btn" onClick={handleScan}>
                        <i className="fas fa-search"></i> Scan
                    </button>

                    <button className="btn save-btn" onClick={handleSave}>
                        <i className="fas fa-save"></i> Save
                    </button>
                </div>
            </div>
            <div className='targetdata-container-tab'>
                <div className='tab-container'>
                    <button onClick={() => handleTabClick('general')} className={activeTab === 'general' ? 'active-tab' : ''}>General</button>
                    <button onClick={() => handleTabClick('crawl')} className={activeTab === 'crawl' ? 'active-tab' : ''}>Crawl</button>
                    <button onClick={() => handleTabClick('http')} className={activeTab === 'http' ? 'active-tab' : ''}>HTTP</button>
                    <button onClick={() => handleTabClick('advanced')} className={activeTab === 'advanced' ? 'active-tab' : ''}>Advanced</button>
                </div>
                <div className='targetdata-con-div'>
                    {activeTab === 'general' && (
                        <div className="general-info-container">
                            <h3>General Information</h3>
                            <p>Address: <a href="http://vulnweb.com" target="_blank" rel="noopener noreferrer">http://vulnweb.com</a></p>

                            <label className="input-label">
                                Description:
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="input-text"
                                />
                            </label>

                            <label className="input-label">
                                Business Criticality:
                                <select
                                    value={businessCriticality}
                                    onChange={(e) => setBusinessCriticality(e.target.value)}
                                    className="input-select"
                                >
                                    <option value="Normal">Normal</option>
                                    <option value="High">High</option>
                                    <option value="Low">Low</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </label>

                            <div className="radio-group">
                                <h4>Continuous Scanning:</h4>
                                {['Slower', 'Slow', 'Moderate', 'Fast'].map((option) => (
                                    <label key={option} className="radio-label">
                                        <input
                                            type="radio"
                                            value={option}
                                            checked={continuousScan === option}
                                            onChange={(e) => setContinuousScan(e.target.value)}
                                            className="input-radio"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>

                            <div className="checkbox-container">
                                <label className="toggle-switch">
                                    Login Script:
                                    <input
                                        type="checkbox"
                                        checked={isLoginScriptOn}
                                        onChange={handleLoginScriptToggle}
                                        className="toggle-input"
                                    />
                                    <span className="slider"></span>
                                </label>

                            </div>

                            {isLoginScriptOn && (
                                <form onSubmit={handleSubmit} className="login-form">
                                    <div className="form-group">
                                        <label className="input-label">
                                            User ID:
                                            <input
                                                type="text"
                                                value={userId}
                                                onChange={(e) => setUserId(e.target.value)}
                                                required
                                                className="input-text"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <label className="input-label">
                                            Password:
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="input-text"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <label className="input-label">
                                            Confirm Password:
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                                className="input-text"
                                            />
                                        </label>
                                    </div>

                                    <button type="submit" className="submit-button">Submit</button>
                                </form>
                            )}
                        </div>
                    )}

                    {activeTab === 'crawl' && (
                        <div className="crawl-settings-container">
                            <div>
                                <h3>Crawling / Navigation</h3>

                                <label className="input-label">
                                    User Agent:
                                    <select
                                        value={selectedUserAgent}
                                        onChange={(e) => setSelectedUserAgent(e.target.value)}
                                        className="input-select"
                                    >
                                        {userAgents.map((agent, index) => (
                                            <option key={index} value={agent}>
                                                {agent}
                                            </option>
                                        ))}
                                    </select>
                                </label>

                                <label className="input-label">
                                    Case Sensitive Paths:
                                    <select
                                        value={caseSensitivePaths}
                                        onChange={(e) => setCaseSensitivePaths(e.target.value)}
                                        className="input-select"
                                    >
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Auto">Auto</option>
                                    </select>
                                </label>

                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={limitCrawl}
                                        onChange={() => setLimitCrawl(!limitCrawl)}
                                        className="input-checkbox"
                                    />
                                    Limit crawling to address and sub-directories only
                                </label>

                                <label className="input-label">
                                    Excluded Paths:
                                    <input
                                        type="text"
                                        value={excludedPath}
                                        onChange={(e) => setExcludedPath(e.target.value)}
                                        placeholder="Enter a pattern"
                                        className="input-text"
                                    />
                                    <button className="add-btn" onClick={handleAddExcludedPath}>Add</button>
                                </label>
                            </div>

                            <div className="file-import-container">
                                <div className="file-info">
                                    <i className="info-icon"></i>
                                    Files to be imported by crawler at start. Accepted formats include text file with a list of URLs, WVS Sniffer log, Fiddler SAZ, Selenium scripts, BURP saved and state files, or HAR files.
                                </div>

                                <div className="file-upload">
                                    <input type="file" id="fileInput" className="file-input" />
                                    <button className="remove-btn" onClick={removeFile}>&#10060;</button>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeTab === 'http' && (
                        <div className="http-auth-section">
                            <div className="checkbox-container">
                                <label className="toggle-switch">
                                    HTTP Authentication:
                                    <input
                                        type="checkbox"
                                        checked={isHttpAuthOn}
                                        onChange={handleHttpAuthToggle}
                                        className="toggle-input"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            {isHttpAuthOn && (
                                <div className="http-auth-credentials">
                                    <div className="input-group">
                                        <label>User Name</label>
                                        <input
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            className="input-text"
                                        />
                                    </div>

                                    <div className="input-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            value={password1}
                                            onChange={(e) => setPassword1(e.target.value)}
                                            className="input-text"
                                        />
                                    </div>

                                    <div className="input-group">
                                        <label>Retype Password</label>
                                        <input
                                            type="password"
                                            value={retypePassword}
                                            onChange={(e) => setRetypePassword(e.target.value)}
                                            className="input-text"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}


                    {activeTab === 'advanced' && (
                        <div>
                            <div className="checkbox-container">
                                {/* Technologies Toggle */}
                                <label className="toggle-switch">
                                    Technologies
                                    <input
                                        type="checkbox"
                                        checked={isTechnologiesOn}
                                        onChange={handleTechnologiesToggle}
                                        className="toggle-input"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            {isTechnologiesOn && (
                                <div className="technologies-options">
                                    <label>
                                        <input type="checkbox" /> ASP
                                    </label>
                                    <label>
                                        <input type="checkbox" /> ASP.NET
                                    </label>
                                    <label>
                                        <input type="checkbox" /> ColdFusion/Java
                                    </label>
                                    <label>
                                        <input type="checkbox" /> PHP
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Perl
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Rails
                                    </label>
                                    <label>
                                        <input type="checkbox" /> FrontPage
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Java/J2EE
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Node.js
                                    </label>
                                    <label>
                                        <input type="checkbox" /> Python
                                    </label>
                                </div>
                            )}

                            <div className="checkbox-container">
                                {/* Custom Header Toggle */}
                                <label className="toggle-switch">
                                    Custom Header
                                    <input
                                        type="checkbox"
                                        checked={isCustomheaderon}
                                        onChange={handleCustomeheader}
                                        className="toggle-input"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            {isCustomheaderon && (
                                <div className="custom-header-options">
                                    <label>
                                        Custom Header:
                                        <input
                                            type="text"
                                            value={customHeader}
                                            onChange={handleCustomHeaderChange}
                                            placeholder="Enter custom header value"
                                            className="input-text"
                                        />
                                    </label>
                                    <p>Entered Value: {customHeader}</p> {/* Display entered custom header */}
                                </div>
                            )}

                            <div className="checkbox-container">
                                {/* Custom Cookies Toggle */}
                                <label className="toggle-switch">
                                    Custom Cookies
                                    <input
                                        type="checkbox"
                                        checked={isCustomcookieson}
                                        onChange={handlecustomcookies}
                                        className="toggle-input"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                            {isCustomcookieson && (
                                <div className="custom-cookies-options">
                                    <label>
                                        Cookie Name:
                                        <input
                                            type="text"
                                            value={cookieName}
                                            onChange={handleCookieNameChange}
                                            placeholder="Enter cookie name"
                                            className="input-text"
                                        />
                                    </label>

                                    <label>
                                        Cookie Value:
                                        <input
                                            type="text"
                                            value={cookieValue}
                                            onChange={handleCookieValueChange}
                                            placeholder="Enter cookie value"
                                            className="input-text"
                                        />
                                    </label>

                                    <button
                                        onClick={handleSubmitCookies}
                                        className="submit-btn"
                                    >
                                        Submit Custom Cookie
                                    </button>
                                </div>
                            )}

                            <div className="checkbox-container">
                                {/* Allowed Hosts Toggle */}
                                <label className="toggle-switch">
                                    Allowed Hosts
                                    <input
                                        type="checkbox"
                                        checked={isAllowedHostsEnabled}
                                        onChange={handlehost}
                                        className="toggle-input"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>
                    )}

                </div>
            </div>

        </div>

    )
}

export default Targetdata
