import React, { useState } from 'react';
import "./Reports.css"

const Reports = () => {
  const [selectedTargets, setSelectedTargets] = useState([]);

  const [showNotification, setShowNotification] = useState(false);
  const data = [
    {
      id: 1,
      target: 'http://testphp.vulnweb.com/',
      reportType: 'Full Scan',
      reportTemplate: 'Developer',
      schedule: 'lastRun Oct 1, 2024 8:30:35 PM',
      status: 'completed',
      vulnerabilities: {
        high: 5,
        medium: 0,
        low: 0
      }
    }
  ];

  const handleNewReportClick = () => {
    // Show the notification/modal
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };


  const handleDeleteReport = () => {
    if (selectedTargets.length > 0) {
      alert(`Deleting Reports for targets: ${selectedTargets.join(', ')}`);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedTargets(prev =>
      prev.includes(id) ? prev.filter(targetId => targetId !== id) : [...prev, id]
    );
  };

  const handleNavigateToTarget = (page) => {
    // Navigate to the respective page (using window.location or React Router)
    window.location.href = page; // If you're using React Router, you could use navigate or history.push
  };

  return (
    <div className='reports-container'>
      

      {showNotification && (
        <div className="notification-modal">
          <div className="notification-content">
            <p>Please select a Report Template.</p>
            <button className="btn go-report" onClick={() => handleNavigateToTarget('/vulnerabilities')}>
              All Vulnerabilities
            </button>
            <button className="btn go-report" onClick={() => handleNavigateToTarget('/scans')}>
              Scan Report
            </button>
            <button className="btn go-report" onClick={() => handleNavigateToTarget('/targets')}>
              Target Report
            </button>
            <button className="btn close" onClick={handleCloseNotification}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="button-container">
        <div className="button-group">
          <button className='btn btn-new-report' onClick={handleNewReportClick} >
            <i className="fas fa-plus"></i> New Report
          </button>
          <button
            className={`btn btn-delete-report ${selectedTargets.length === 0 ? 'disabled' : ''}`}
            disabled={selectedTargets.length === 0}
            onClick={handleDeleteReport}
          >
            <i className="fas fa-trash-alt"></i> Delete Report
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
              <th>Report Template</th>
              <th>Report Type</th>
              <th>Schedule</th>
              <th>Status</th>
              <th>Download</th>
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
                <td>{item.reportTemplate}</td>
                <td>{item.reportType}</td>
                <td>{item.schedule}</td>

                {/* Status class updated to reflect 'completed' and 'queue' */}
                <td className={item.status === 'completed' ? 'status-completed' : 'status-queue'}>
                  {item.status}
                </td>

                {/* Vulnerability counts */}
                <td className='dow'>
                  <button className="download-btn pdf-btn">PDF</button>
                  <button className="download-btn html-btn" style={{ marginLeft: '10px' }}>HTML</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



    </div>
  )
}

export default Reports
