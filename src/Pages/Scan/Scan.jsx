/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Scan.css';

const Scan = () => {
  const { id } = useParams();
  const [scanData, setScanData] = useState(null);
  const [activeTab, setActiveTab] = useState('scanInfo');
  // Step 2: Define click handlers
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Static data for the scans
  const scanDetails = {
    1: {
      threatLevel: 'LOW',
      threatDescription: 'One or more low-severity type vulnerabilities have been discovered by the scanner.',
      duration: '57s',
      requests: 2112,
      responseTime: '135ms',
      locations: 39,
      progress: 30,
      target: 'www.bing.com',
      startTime: 'Oct 1, 2024 7:58:58 AM',
      targetInfo: {
        address: 'www.bing.com',
        server: 'Apache/2.4.41 (Ubuntu)',
        operatingSystem: 'Linux',
        technologies: 'PHP 7.4.3, MySQL 5.7',
        responsive: 'Yes'
      },
      alerts: [
        { id: 1, message: 'Cookie(s) without HttpOnly flag set', time: 'Oct 1, 2024 7:59:20 AM' },
        { id: 2, message: 'Missing Content Security Policy', time: 'Oct 1, 2024 8:02:43 AM' },
        { id: 3, message: 'Clickjacking vulnerability detected', time: 'Oct 1, 2024 8:10:30 AM' },
        { id: 4, message: 'Insecure SSL/TLS configuration', time: 'Oct 1, 2024 8:22:55 AM' }
      ],
      vulnerabilities: [
        { severity: 'HIGH', message: 'CORS (Cross-Origin Resource Sharing) origin validation error', url: 'https://www.bing.com/ck', parameter: 'ck' },
        { severity: 'MEDIUM', message: 'Directory traversal', url: 'https://www.bing.com/search', parameter: 'q' },
        { severity: 'LOW', message: 'Cookie(s) without HttpOnly flag set', url: 'https://www.bing.com', parameter: null },
        { severity: 'LOW', message: 'Cookie(s) without Secure flag set', url: 'https://www.bing.com/', parameter: null },
        { severity: 'LOW', message: 'Content type is not specified', url: 'https://www.bing.com/aclk', parameter: null }
      ]
    },
    2: {
      threatLevel: 'HIGH',
      threatDescription: 'Multiple high-severity vulnerabilities have been detected.',
      duration: '120s',
      requests: 3421,
      responseTime: '200ms',
      locations: 42,
      progress: 75,
      target: 'www.example.com',
      startTime: 'Sep 28, 2024 10:20:12 AM',
      targetInfo: {
        address: 'www.example.com',
        server: 'Nginx/1.18.0 (Ubuntu)',
        operatingSystem: 'Linux',
        technologies: 'Node.js 14, MongoDB 4.4',
        responsive: 'No'
      },
      alerts: [
        { id: 1, message: 'SQL Injection vulnerability detected', time: 'Sep 28, 2024 10:21:35 AM' },
        { id: 2, message: 'Cross-site scripting (XSS) vulnerability found', time: 'Sep 28, 2024 10:30:48 AM' },
        { id: 3, message: 'Open redirect vulnerability detected', time: 'Sep 28, 2024 10:35:59 AM' },
        { id: 4, message: 'Unencrypted sensitive data detected', time: 'Sep 28, 2024 10:45:10 AM' }
      ],
      vulnerabilities: [
        { severity: 'HIGH', message: 'SQL Injection vulnerability detected', url: 'https://www.example.com/search', parameter: 'id' },
        { severity: 'HIGH', message: 'Cross-site scripting (XSS)', url: 'https://www.example.com/profile', parameter: 'name' },
        { severity: 'HIGH', message: 'CORS (Cross-Origin Resource Sharing) origin validation error', url: 'https://www.bing.com/ck', parameter: 'ck' },
        { severity: 'MEDIUM', message: 'Directory traversal', url: 'https://www.bing.com/search', parameter: 'q' },
        { severity: 'LOW', message: 'Cookie(s) without HttpOnly flag set', url: 'https://www.bing.com', parameter: null },
        { severity: 'LOW', message: 'Cookie(s) without Secure flag set', url: 'https://www.bing.com/', parameter: null },
        { severity: 'LOW', message: 'Content type is not specified', url: 'https://www.bing.com/aclk', parameter: null },
        { severity: 'HIGH', message: 'CORS (Cross-Origin Resource Sharing) origin validation error', url: 'https://www.bing.com/ck', parameter: 'ck' },
        { severity: 'MEDIUM', message: 'Directory traversal', url: 'https://www.bing.com/search', parameter: 'q' },
        { severity: 'LOW', message: 'Cookie(s) without HttpOnly flag set', url: 'https://www.bing.com', parameter: null },
        { severity: 'LOW', message: 'Cookie(s) without Secure flag set', url: 'https://www.bing.com/', parameter: null },
        { severity: 'LOW', message: 'Content type is not specified', url: 'https://www.bing.com/aclk', parameter: null }, { severity: 'HIGH', message: 'CORS (Cross-Origin Resource Sharing) origin validation error', url: 'https://www.bing.com/ck', parameter: 'ck' },
        { severity: 'MEDIUM', message: 'Directory traversal', url: 'https://www.bing.com/search', parameter: 'q' },
        { severity: 'LOW', message: 'Cookie(s) without HttpOnly flag set', url: 'https://www.bing.com', parameter: null },
        { severity: 'LOW', message: 'Cookie(s) without Secure flag set', url: 'https://www.bing.com/', parameter: null },
        { severity: 'LOW', message: 'Content type is not specified', url: 'https://www.bing.com/aclk', parameter: null }
      ]
    },
    3: {
      threatLevel: 'MEDIUM',
      threatDescription: 'Medium-level vulnerabilities detected that could lead to security issues.',
      duration: '90s',
      requests: 2875,
      responseTime: '165ms',
      locations: 31,
      progress: 50,
      target: 'www.demo.com',
      startTime: 'Sep 25, 2024 11:30:00 AM',
      targetInfo: {
        address: 'www.demo.com',
        server: 'IIS/10.0 (Windows)',
        operatingSystem: 'Windows Server 2019',
        technologies: 'ASP.NET, MSSQL 2019',
        responsive: 'Yes'
      },
      alerts: [
        { id: 1, message: 'Sensitive information exposed in URL', time: 'Sep 25, 2024 11:35:00 AM' },
        { id: 2, message: 'Insufficient logging and monitoring', time: 'Sep 25, 2024 11:40:45 AM' },
        { id: 3, message: 'Unvalidated redirects and forwards', time: 'Sep 25, 2024 11:45:22 AM' }
      ],
      vulnerabilities: [
        { severity: 'HIGH', message: 'CORS (Cross-Origin Resource Sharing) origin validation error', url: 'https://www.bing.com/ck', parameter: 'ck' },
        { severity: 'MEDIUM', message: 'Directory traversal', url: 'https://www.bing.com/search', parameter: 'q' },
        { severity: 'LOW', message: 'Cookie(s) without HttpOnly flag set', url: 'https://www.bing.com', parameter: null },
        { severity: 'LOW', message: 'Cookie(s) without Secure flag set', url: 'https://www.bing.com/', parameter: null },
        { severity: 'LOW', message: 'Content type is not specified', url: 'https://www.bing.com/aclk', parameter: null }
      ]
    }
    // Add more static scan data as needed
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'HIGH':
        return '❗'; // Or use an icon component if available
      case 'MEDIUM':
        return '⚠️';
      case 'LOW':
        return 'ℹ️';
      default:
        return 'ℹ️';
    }
  };


  // Fetch the scan data when the component mounts (using static data)
  useEffect(() => {
    const data = scanDetails[id];
    setScanData(data);
  }, [id]);

  if (!scanData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="scan-page">
      
      <div className="button-container">
        <div className="button-group">
          <button className="btn-back">
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button className="btn-stop">
            <i className="fas fa-stop-circle"></i> Stop Scan
          </button>
          <button className="btn-pause">
            <i className="fas fa-pause-circle"></i> Pause Scan
          </button>
        </div>
      </div>
      <div className='scan-container-tab'>
        <div className='tab-container'>
          <button onClick={() => handleTabClick('scanInfo')} className={activeTab === 'scanInfo' ? 'active-tab' : ''}>Scan Stats & Info</button>
          <button onClick={() => handleTabClick('vulnerabilities')} className={activeTab === 'vulnerabilities' ? 'active-tab' : ''}>Vulnerabilities</button>
          <button onClick={() => handleTabClick('siteStructure')} className={activeTab === 'siteStructure' ? 'active-tab' : ''}>Site Structure</button>
          <button onClick={() => handleTabClick('events')} className={activeTab === 'events' ? 'active-tab' : ''}>Events</button>
        </div>
        <div className='scan-con-div'>
          {activeTab === 'scanInfo' && (
            <div>

              <div className="scan-details">
                <div className="threat-level">
                  <div className={`circle ${scanData.threatLevel.toLowerCase()}`}>
                    <h2>{scanData.threatLevel}</h2>
                  </div>
                  <p>{scanData.threatDescription}</p>
                </div>

                <div className="activity">
                  <h3>Activity</h3>
                  <p>Overall Progress: {scanData.progress}%</p>

                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${scanData.progress}%` }}
                    ></div>
                  </div>

                  <p>Scanning of {scanData.target} started on {scanData.startTime}</p>
                </div>

              </div>
              <div className="scan-info">
                <div>Scan Duration: {scanData.duration}</div>
                <div>Requests: {scanData.requests}</div>
                <div>Avg. Response Time: {scanData.responseTime}</div>
                <div>Locations: {scanData.locations}</div>
              </div>
              <div className='bottom'>
                <div className="target-information">
                  <h3>Target Information</h3>
                  <ul>
                    <li><strong>Address:</strong> {scanData.targetInfo.address}</li>
                    <li><strong>Server:</strong> {scanData.targetInfo.server}</li>
                    <li><strong>Operating System:</strong> {scanData.targetInfo.operatingSystem}</li>
                    <li><strong>Identified Technologies:</strong> {scanData.targetInfo.technologies}</li>
                    <li><strong>Responsive:</strong> {scanData.targetInfo.responsive}</li>
                  </ul>
                </div>
                <div className="alerts">
                  <h3>Latest Alerts</h3>
                  {scanData.alerts.map(alert => (
                    <div key={alert.id}>
                      <p>{alert.message} - {alert.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vulnerabilities' && (
            <div className="vulnerabilities-section">
             
              <div className="vulnerabilities-table-container">
                <table className="vulnerabilities-table">
                  <thead>
                    <tr>
                      <th>Severity</th>
                      <th>Vulnerability</th>
                      <th>URL</th>
                      <th>Parameter</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scanData.vulnerabilities.map((vulnerability, index) => (
                      <tr key={index}>
                        <td>
                          <span className={`severity-icon ${vulnerability.severity.toLowerCase()}`}>
                            {getSeverityIcon(vulnerability.severity)}
                          </span>
                        </td>
                        <td>{vulnerability.message}</td>
                        <td>{vulnerability.url}</td>
                        <td>{vulnerability.parameter || '-'}</td>
                        <td>Open</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}


          {activeTab === 'siteStructure' && (
            <div className="site-structure-container">
              <div className="site-structure-sidebar">
                <ul className="folder-structure">
                  <li><a href="#1">https://www.bing.com/</a>
                    <ul>
                      <li><a href="#11">account</a></li>
                      <li><a href="#1">api</a></li>
                      <li><a href="#1">chat</a></li>
                      <li><a href="#1">ck</a></li>
                      <li><a href="#1">control</a></li>
                      <li><a href="#1">account</a></li>
                      <li><a href="#1">api</a></li>
                      <li><a href="#1">chat</a></li>
                      <li><a href="#1">ck</a></li>
                      <li><a href="#1">control</a></li>
                      <li><a href="#1">account</a></li>
                      <li><a href="#1">api</a></li>
                      <li><a href="#1">chat</a></li>
                      <li><a href="#1">ck</a></li>
                      <li><a href="#1">control</a></li>
                      <li><a href="#1">account</a></li>
                      <li><a href="#1">api</a></li>
                      <li><a href="#1">chat</a></li>
                      <li><a href="#1">ck</a></li>
                      <li><a href="#1">control</a></li>
                      <li><a href="#1">account</a></li>
                      <li><a href="#1">api</a></li>
                      <li><a href="#1">chat</a></li>
                      <li><a href="#1">ck</a></li>
                      <li><a href="#1">control</a></li>
                      {/* Add more folders as needed */}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="vulnerability-details">
                <div className="vulnerabilities-table-container">
                  <table className="vulnerabilities-table">
                    <thead>
                      <tr>
                        <th>Severity</th>
                        <th>Vulnerability</th>
                        <th>URL</th>
                        <th>Parameter</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scanData.vulnerabilities.map((vulnerability, index) => (
                        <tr key={index}>
                          <td>
                            <span className={`severity-icon ${vulnerability.severity.toLowerCase()}`}>
                              {getSeverityIcon(vulnerability.severity)}
                            </span>
                          </td>
                          <td>{vulnerability.message}</td>
                          <td>{vulnerability.url}</td>
                          <td>{vulnerability.parameter || '-'}</td>
                          <td>Open</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}


          {activeTab === 'events' && (
            <div className="events-section">
              <div className="events-table-container">
                <table className="events-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Additional Information</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    <tr>
                      <td>Scan Job Starting</td>
                      <td>
                        {"{status: starting, workerId: 'ffffffff-ffff-ffff-ffff-ffffffffffff', scanningApp: 'vws', extendedStatus: null}"}
                      </td>
                      <td>Oct 1, 2024 7:58:56 AM</td>
                    </tr>
                    {/* You can add more rows here */}
                  </tbody>
                </table>
              </div>
            </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Scan;
