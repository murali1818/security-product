/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "../Vulnerabilities/Vulnerabilities.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const vulnerabilitiesData = [
  {
    id: 1,
    severity: 'Critical',
    vulnerability: 'Stored Cross Site Scripting',
    url: 'http://testphp.vulnweb.com/xss',
    parameter: '',
    status: 'Open',
  },
  {
    id: 2,
    severity: 'Critical',
    vulnerability: 'Account Take Over Via Bypassing Old Password Functionality',
    url: 'http://testphp.vulnweb.com/account',
    parameter: '',
    status: 'Open',
  },
  {
    id: 3,
    severity: 'Critical',
    vulnerability: 'Insecure Direct Object Reference (IDOR)',
    url: 'http://testphp.vulnweb.com/id',
    parameter: 'id',
    status: 'Open',
  },
  {
    id: 4,
    severity: 'Critical',
    vulnerability: 'Sensitive Information Disclosed Through Insecure Object References',
    url: 'http://testphp.vulnweb.com/info',
    parameter: '',
    status: 'Open',
  },
  {
    id: 5,
    severity: 'Critical',
    vulnerability: 'Account Takeover In Staff Portal Through Default Password',
    url: 'http://testphp.vulnweb.com/staff',
    parameter: '',
    status: 'Open',
  },
  {
    id: 6,
    severity: 'High',
    vulnerability: 'Broken Access Control',
    url: 'http://testphp.vulnweb.com/access',
    parameter: '',
    status: 'Open',
  },
  {
    id: 7,
    severity: 'High',
    vulnerability: 'Improper OTP Validation',
    url: 'http://testphp.vulnweb.com/otp',
    parameter: '',
    status: 'Open',
  },
  {
    id: 8,
    severity: 'High',
    vulnerability: 'Cross Site Request Forgery (CSRF)',
    url: 'http://testphp.vulnweb.com/csrf',
    parameter: '',
    status: 'Open',
  },
  {
    id: 9,
    severity: 'High',
    vulnerability: 'Session Hijacking',
    url: 'http://testphp.vulnweb.com/session-hijack',
    parameter: '',
    status: 'Open',
  },
  {
    id: 10,
    severity: 'High',
    vulnerability: 'Stored Html Injection',
    url: 'http://testphp.vulnweb.com/html-injection',
    parameter: '',
    status: 'Open',
  },
  {
    id: 11,
    severity: 'Medium',
    vulnerability: 'Weak Logout Mechanism',
    url: 'http://testphp.vulnweb.com/logout',
    parameter: '',
    status: 'Open',
  },
  {
    id: 12,
    severity: 'Medium',
    vulnerability: 'Weak Lockout Mechanism',
    url: 'http://testphp.vulnweb.com/lockout',
    parameter: '',
    status: 'Open',
  },
  {
    id: 13,
    severity: 'Medium',
    vulnerability: 'CSS Injection',
    url: 'http://testphp.vulnweb.com/css',
    parameter: '',
    status: 'Open',
  },
  {
    id: 14,
    severity: 'Medium',
    vulnerability: 'Sensitive Session ID In URL',
    url: 'http://testphp.vulnweb.com/session',
    parameter: 'session_id',
    status: 'Open',
  },
  {
    id: 15,
    severity: 'Medium',
    vulnerability: 'Verb Tampering',
    url: 'http://testphp.vulnweb.com/verb',
    parameter: '',
    status: 'Open',
  },
  {
    id: 16,
    severity: 'Low',
    vulnerability: 'Clickjacking Vulnerability',
    url: 'http://testphp.vulnweb.com/clickjack',
    parameter: '',
    status: 'Open',
  },
  {
    id: 17,
    severity: 'Low',
    vulnerability: 'Cookie Without Same Site',
    url: 'http://testphp.vulnweb.com/cookie',
    parameter: '',
    status: 'Open',
  },
  {
    id: 18,
    severity: 'Low',
    vulnerability: 'Unrestricted File Upload',
    url: 'http://testphp.vulnweb.com/upload',
    parameter: '',
    status: 'Open',
  },
  {
    id: 19,
    severity: 'Low',
    vulnerability: 'Strict-Transport-Security Header (HSTS) Is Missing',
    url: 'http://testphp.vulnweb.com/hsts',
    parameter: '',
    status: 'Open',
  },
  {
    id: 20,
    severity: 'Low',
    vulnerability: 'Server Banner Disclosure',
    url: 'http://testphp.vulnweb.com/banner',
    parameter: '',
    status: 'Open',
  },
  {
    id: 21,
    severity: 'Info',
    vulnerability: 'Improper Attendance Functionality',
    url: 'http://testphp.vulnweb.com/attendance',
    parameter: '',
    status: 'Open',
  },
  {
    id: 22,
    severity: 'Info',
    vulnerability: 'Default Server Page Exposed',
    url: 'http://testphp.vulnweb.com/default',
    parameter: '',
    status: 'Open',
  },
  {
    id: 23,
    severity: 'Info',
    vulnerability: 'Login Page Is Vulnerable To Brute Force Attack',
    url: 'http://testphp.vulnweb.com/login',
    parameter: '',
    status: 'Open',
  },
  {
    id: 24,
    severity: 'Info',
    vulnerability: 'Missing Captcha Implementation',
    url: 'http://testphp.vulnweb.com/captcha',
    parameter: '',
    status: 'Open',
  },
  {
    id: 25,
    severity: 'Info',
    vulnerability: 'Missing Change Password Functionality (Staff Portal)',
    url: 'http://testphp.vulnweb.com/change-password',
    parameter: '',
    status: 'Open',
  },
  // Other vulnerabilities can be added here...
];


 // Sort order based on severity level
 const severityOrder = {
  Critical: 1,
  High: 2,
  Medium: 3,
  Low: 4,
};

// Sort vulnerabilitiesData array based on severity order
const sortedVulnerabilities = [...vulnerabilitiesData].sort((a, b) => {
  return severityOrder[a.severity] - severityOrder[b.severity];
});

const Vulnerabilities = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedVulnerabilities, setSelectedVulnerabilities] = useState([]);
  const [markAs, setMarkAs] = useState('');
  const [wafExport, setWafExport] = useState('');
  const [groupBy, setGroupBy] = useState('');
  const [reportType, setReportType] = useState('');
  const [showReportPopup, setShowReportPopup] = useState(false);

  // Function to determine the icon based on severity level
  const renderSeverityIcon = (severity) => {
    switch (severity) {
      case 'Critical':
        return <i className="fas fa-skull-crossbones" style={{ color: 'darkred' }}></i>; // Skull icon for Critical
      case 'High':  
        return <i className="fas fa-exclamation-triangle" style={{ color: 'red' }}></i>; // Danger icon for High
      case 'Medium':
        return <i className="fas fa-exclamation-circle" style={{ color: 'orange' }}></i>; // Warning icon for Medium
      case 'Low':
        return <i className="fas fa-info-circle" style={{ color: 'green' }}></i>; // Info icon for Low/Weak
        case 'Info':
        return <i className="fas fa-info-circle" style={{ color: 'blue' }}></i>; // Info icon for Low/Weak
      default:
        return null;
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedVulnerabilities((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((vulnId) => vulnId !== id)
        : [...prevSelected, id]
    );
  };

  const handleGenerateReportClick = () => {
    if (selectedVulnerabilities.length > 0) {
      setShowReportPopup(true);
    }
  };

  // Close the report confirmation popup
  const handleCloseReportPopup = () => {
    setShowReportPopup(false);
    console.log("Generate succussfully");
    
  };

  // Function to handle the retest button click
  const handleRetestClick = () => {
    if (selectedVulnerabilities.length > 0) {
      setShowPopup(true); // Show the popup when Retest is clicked and vulnerabilities are selected
    }
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Handle dropdown changes
  const handleMarkAsChange = (value) => {
    setMarkAs(value);
    // Handle Mark As logic here (e.g., update selected vulnerabilities)
  };

  const handleWAFExportChange = (value) => {
    setWafExport(value);
    // Handle WAF Export logic here
  };

  const handleGroupByChange = (value) => {
    setGroupBy(value);
    // Handle Group By logic here
  };

  return (
    <div className='vulnerabilities'>

      {/* Page Header */}
      <div className='vulnerabilities-header'>
        <div className='vulnerabilities-actions'>
        <button
            className={`btn btn-report ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            disabled={selectedVulnerabilities.length === 0}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
          >
            Send To Issue Tracker
          </button>
          

          <select className={`btn btn-add ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
                disabled={selectedVulnerabilities.length === 0}
                title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
                onChange={(e) => handleWAFExportChange(e.target.value)}
                defaultValue="">
                <option value="" disabled>WAF Export</option>
                <option value="F5 BIG-IP ASM">F5 BIG-IP ASM</option>
                <option value="Fortinet FortiWeb">Fortinet FortiWeb</option>
                <option value="Imperva SecureSphere WAF">Imperva SecureSphere WAF</option>
            </select>

          <select className={`btn btn-delete ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            disabled={selectedVulnerabilities.length === 0}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
            onChange={(e) => handleMarkAsChange(e.target.value)}
            defaultValue="">
            <option value="" disabled>Mark As</option>
            <option value="Open">Open</option>
            <option value="Fixed">Fixed</option>
            <option value="Ignored">Ignored</option>
            <option value="False Positive">False Positive</option>
          </select>
          <button
            className={`btn btn-group ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            onClick={handleRetestClick}
            disabled={selectedVulnerabilities.length === 0}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
          >
            Retest
          </button>
          <button
            className={`btn btn-scan ${selectedVulnerabilities.length === 0 ? 'disabled' : ''}`}
            disabled={selectedVulnerabilities.length === 0}
            onClick={handleGenerateReportClick}
            title={selectedVulnerabilities.length === 0 ? "Please choose a vulnerability" : ""}
          >
           <i className="fas fa-file-alt"></i> Generate Report
          </button>
          <select className={`btn btn-import`}
            onChange={(e) => handleGroupByChange(e.target.value)}
            defaultValue="">
            <option value="" disabled>Group By</option>
            <option value="None">None</option>
            <option value="Criticality">Criticality</option>
            <option value="Vulnerability Type">Vulnerability Type</option>
          </select>
        </div>
      </div>

      {/* Table */}

      <div className='table-container'>
        <table className='vulnerabilities-table'>
          <thead>
            <tr>
              <th>Select</th>
              <th>Severity</th>
              <th>Vulnerability</th>
              <th>URL</th>
              <th>Parameter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedVulnerabilities.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                   className='checkbox'
                    type="checkbox"
                    checked={selectedVulnerabilities.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className={`severity ${item.severity.toLowerCase()}`}>
                  {renderSeverityIcon(item.severity)} {item.severity}
                </td>
                <td>{item.vulnerability}</td>
                <td><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></td>
                <td className='parameter'>{item.parameter || '-'}</td>
                <td className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Popup for Retesting */}
      {showPopup && (
        <div className='popup-overlay'>
          <div className='popup'>
            <h2>Retest Vulnerabilities</h2>
            <p>Do you want to retest the selected vulnerabilities?</p>
            <button className='btn btn-yes' onClick={handleClosePopup}>Yes</button>
            <button className='btn btn-no' onClick={handleClosePopup}>No</button>
          </div>
        </div>
      )}

      {/* Popup for Report Generation */}
      {showReportPopup && (
        <div className='popup-overlay'>
          <div className='generate-report-popup'>
            <h2>Generate Report</h2>
            <p>Select the report type:</p>
            <select
              className='popup-dropdown'
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="" disabled>Standard Reports</option>
              <option value="Developer">Developer</option>
              <option value="Executive Summary">Executive Summary</option>
              <option value="Compliance Reports">Compliance Reports</option>
              <option value="Quick">Quick</option>
              <option value="Affected Items" disabled>Compliance Reports</option>
              <option value="CWE 2011">CWE 2011</option>
              <option value="HIPAA">HIPAA</option>
              <option value="ISO 27001">ISO 27001</option>
              <option value="NIST SP800 53">NIST SP800 53</option>
              <option value="OWASP Top 10 2013">OWASP Top 10 2013</option>
              <option value="OWASP Top 10 2017">OWASP Top 10 2017</option>
              <option value="PCI DSS 3.2">PCI DSS 3.2</option>
              <option value="Sarbanes Oxley">Sarbanes Oxley</option>
              <option value="STIG DISA">STIG DISA</option>
              <option value="WASC Threat Classification">WASC Threat Classification</option>

            </select>
            <div className='popup-buttons'>
              <button className='btn-cancel' onClick={handleCloseReportPopup}>Cancel</button>
              <button className='btn-generate' onClick={handleCloseReportPopup}>Generate</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Vulnerabilities;
