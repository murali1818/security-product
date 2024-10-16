import React, { useState } from 'react';
import './ScanPage.css';
import { Link } from 'react-router-dom';




const ScanPage = () => {
  const [selectedTargets, setSelectedTargets] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formType, setFormType] = useState(''); 
  const [reportType, setReportType] = useState(""); // To store the selected report type


  const data = [
    {
      id: 1,
      target: 'http://testphp.vulnweb.com/',
      scanType: 'Full Scan',
      schedule: 'lastRun Oct 1, 2024 8:30:35 PM',
      status: 'Completed',
      vulnerabilities: {
        critical: 5,
        high: 5,
        medium: 5,
        low: 5,
        info: 5
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
            onClick={() => {
              setShowPopup(true);  // Show the popup
              setFormType('report');  // Set the form type to 'report'
          }}
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
    <Link to={`/vulnerabilities`} className="vulnerability-item vulnerability-critical">
      {item.vulnerabilities.critical}
    </Link>
  )}
  {item.vulnerabilities.high > -1 && (
    <Link to={`/vulnerabilities`} className="vulnerability-item vulnerability-high">
      {item.vulnerabilities.high}
    </Link>
  )}
  {item.vulnerabilities.medium > -1 && (
    <Link to={`/vulnerabilities`} className="vulnerability-item vulnerability-medium">
      {item.vulnerabilities.medium}
    </Link>
  )}
  {item.vulnerabilities.low > -1 && (
    <Link to={`/vulnerabilities`} className="vulnerability-item vulnerability-low">
      {item.vulnerabilities.low}
    </Link>
  )}
  {item.vulnerabilities.info > -1 && (
    <Link to={`/vulnerabilities`} className="vulnerability-item vulnerability-info">
      {item.vulnerabilities.info}
    </Link>
  )}
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2>
                            Report
                        </h2>

                        {formType === 'report' && (
                            <div>
                                <p>Select the report Template:</p>
                                <select
                                    className='popup-dropdown'
                                    value={reportType}
                                    onChange={(e) => setReportType(e.target.value)}
                                >
                                    <option value="" disabled>Standard Reports</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Executive Summary">Executive Summary</option>
                                    <option value="" disabled>Compliance Reports</option>
                                    <option value="Quick">Quick</option>
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
                                    <button className='btn-submit' onClick={handleGenerateReport}>Generate</button>
                                    <button className='btn-cancel' onClick={() => setShowPopup(false)}>Cancel</button>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}
    </div>

  );
};

export default ScanPage;
