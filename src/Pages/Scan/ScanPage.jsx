import React, { useState } from 'react';
import './ScanPage.css';



const ScanPage = () => {
  const [selectedTargets, setSelectedTargets] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  const data = [
    {
      id: 1,
      target: 'https://www.example.com',
      scanType: 'Full Scan',
      schedule: 'lastRun Sep 30, 2024 5:12:33 PM',
      status: 'Completed',
      vulnerabilities: {
        critical: 2,
        high: 5,
        medium: 0,
        low: 0,
        info: 3
      }
    },
    {
      id: 2,
      target: 'https://www.database.com',
      scanType: 'High Risk Vulnerabilities',
      schedule: 'lastRun Sep 30, 2024 6:18:45 PM',
      status: 'Failed',
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 2,
        low: 0,
        info: 1
      }
    },
    {
      id: 3,
      target: 'https://www.mailserver.com',
      scanType: 'Cross-site Scripting Vulnerabilities',
      schedule: 'lastRun Oct 1, 2024 7:18:24 PM',
      status: 'Completed',
      vulnerabilities: {
        critical: 1,
        high: 3,
        medium: 0,
        low: 0,
        info: 2
      }
    },
    {
      id: 4,
      target: 'https://www.apiserver.com',
      scanType: 'SQL Injection Vulnerabilities',
      schedule: 'lastRun Oct 1, 2024 8:00:00 PM',
      status: 'Failed',
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 0,
        low: 1,
        info: 0
      }
    },
    {
      id: 5,
      target: 'https://www.analytics.com',
      scanType: 'Weak Passwords',
      schedule: 'lastRun Oct 2, 2024 9:12:12 AM',
      status: 'Completed',
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 4,
        low: 0,
        info: 1
      }
    },
    {
      id: 6,
      target: 'https://www.cloudstorage.com',
      scanType: 'Crawl Only',
      schedule: 'lastRun Oct 2, 2024 10:45:09 AM',
      status: 'Completed',
      vulnerabilities: {
        critical: 3,
        high: 6,
        medium: 0,
        low: 0,
        info: 0
      }
    },
    {
      id: 7,
      target: 'https://www.cdnserver.com',
      scanType: 'Full Scan',
      schedule: 'lastRun Oct 2, 2024 12:32:44 PM',
      status: 'Failed',
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 7,
        low: 0,
        info: 3
      }
    },
    {
      id: 8,
      target: 'https://www.filetransfer.com',
      scanType: 'High Risk Vulnerabilities',
      schedule: 'lastRun Oct 3, 2024 1:45:22 PM',
      status: 'Completed',
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 3,
        low: 0,
        info: 2
      }
    },
    {
      id: 9,
      target: 'https://www.paymentgateway.com',
      scanType: 'Cross-site Scripting Vulnerabilities',
      schedule: 'lastRun Oct 3, 2024 2:34:11 PM',
      status: 'Completed',
      vulnerabilities: {
        critical: 5,
        high: 8,
        medium: 0,
        low: 0,
        info: 0
      }
    },
    {
      id: 10,
      target: 'https://www.vpnserver.com',
      scanType: 'SQL Injection Vulnerabilities',
      schedule: 'lastRun Oct 3, 2024 3:30:50 PM',
      status: 'Failed',
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 2,
        low: 0,
        info: 1
      }
    },
    {
      id: 11,
      target: 'https://www.crmplatform.com',
      scanType: 'Weak Passwords',
      schedule: 'lastRun Oct 4, 2024 4:45:15 PM',
      status: 'Completed',
      vulnerabilities: {
        critical: 0,
        high: 0,
        medium: 3,
        low: 0,
        info: 0
      }
    },
    {
      id: 12,
      target: 'https://www.billingserver.com',
      scanType: 'Crawl Only',
      schedule: 'lastRun Oct 4, 2024 5:20:00 PM',
      status: 'Completed',
      vulnerabilities: {
        critical: 2,
        high: 5,
        medium: 0,
        low: 0,
        info: 0
      }
    }
  ];



  const handleNewScanClick = () => {
    // Show the notification/modal
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  const handleDeleteScan = () => {
    if (selectedTargets.length > 0) {
      alert(`Deleting scans for targets: ${selectedTargets.join(', ')}`);
    }
  };
  const handleGenerateReport = () => {
    if (selectedTargets.length > 0) {
      alert(`Generating report for targets: ${selectedTargets.join(', ')}`);
      window.location.href = '/reports';
    }
  };

  const handleCompareScan = () => {
    if (selectedTargets.length >= 2) {
      alert(`Comparing scans for targets: ${selectedTargets.join(', ')}`);
      window.location.href = '/reports';
    }
  };

  const handleNavigateToTarget = () => {
    // Navigate to the /target page (assuming you're using React Router)
    window.location.href = '/targets'; // or use history.push('/target') with React Router
  };
  const handleCheckboxChange = (id) => {
    setSelectedTargets(prev =>
      prev.includes(id) ? prev.filter(targetId => targetId !== id) : [...prev, id]
    );
  };


  return (
    <div className="scan-container">
      

      {showNotification && (
        <div className="notification-modal">
          <div className="notification-content">
            <p>Please select a target for the scan.</p>
            <button className="btn go-target" onClick={handleNavigateToTarget}>
              Go to Targets
            </button>
            <button className="btn close" onClick={handleCloseNotification}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className='button-container'>
        <div className="button-group">
          <button className="btn btn-new-scan" onClick={handleNewScanClick}>
            <i className="fas fa-plus"></i> New Scan
          </button>
          <button
            className={`btn btn-delete-scan ${selectedTargets.length === 0 ? 'disabled' : ''}`}
            disabled={selectedTargets.length === 0}
            onClick={handleDeleteScan}
          >
            <i className="fas fa-trash-alt"></i> Delete Scan
          </button>
          <button
            className={`btn btn-generate-report ${selectedTargets.length === 0 ? 'disabled' : ''}`}
            disabled={selectedTargets.length === 0}
            onClick={handleGenerateReport}
          >
            <i className="fas fa-file-alt"></i> Generate Report
          </button>
          <button
            className={`btn btn-compare-scan ${selectedTargets.length < 2 ? 'disabled' : ''}`}
            disabled={selectedTargets.length < 2}
            onClick={handleCompareScan}
          >
            <i className="fas fa-exchange-alt"></i> Compare Scan
          </button>
        </div>
        <div>
          <button className='btn filter-btn'>
            <i className="fas fa-filter"></i> Filter
          </button>
        </div>
      </div>
      {/* Table Container */}
      <div className='table-container'>
        <table className='scan-table'>
          <thead>
            <tr>
              <th>Select</th>
              <th>Target</th>
              <th>ScanType</th>
              <th>Schedule</th>
              <th>Status</th>
              <th>Vulnerabilities</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    className='checkbox'
                    type="checkbox"
                    checked={selectedTargets.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>

                <td>{item.target}</td>
                <td>{item.scanType}</td>
                <td>{item.schedule}</td>
                <td className={item.status === 'Completed' ? 'status-completed' : 'status-failed'}>
                  {item.status}
                </td>

                <td className='vul'>
                  {item.vulnerabilities.critical > -1 && (
                    <span className="vulnerability-item vulnerability-critical">
                      {item.vulnerabilities.critical}
                    </span>
                  )}
                  {item.vulnerabilities.high > -1 && (
                    <span className="vulnerability-item vulnerability-high">
                      {item.vulnerabilities.high}
                    </span>
                  )}
                  {item.vulnerabilities.medium > -1 && (
                    <span className="vulnerability-item vulnerability-medium">
                      {item.vulnerabilities.medium}
                    </span>
                  )}
                  {item.vulnerabilities.low > -1 && (
                    <span className="vulnerability-item vulnerability-low">
                      {item.vulnerabilities.low}
                    </span>
                  )}
                  {item.vulnerabilities.info > -1 && (
                    <span className="vulnerability-item vulnerability-info">
                      {item.vulnerabilities.info}
                    </span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default ScanPage;
