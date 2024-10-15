import React, { useState } from 'react';
import "./Reports.css"

const Reports = () => {
  const [selectedTargets, setSelectedTargets] = useState([]);

  const [showNotification, setShowNotification] = useState(false);
  const data = [
    {
      id: 1,
      target: 'https://www.example.com',
      reportType: 'All Vulnerabilities',
      reportTemplate: 'Executive summary',
      schedule: 'lastRun Sep 30, 2024 5:12:33 PM',
      status: 'completed',
      vulnerabilities: {
        high: 5,
        medium: 0,
        low: 0
      }
    },
    {
      id: 2,
      target: 'https://www.database.com',
      reportType: 'Scan Report',
      reportTemplate: 'Developer',
      schedule: 'lastRun Sep 30, 2024 6:18:45 PM',
      status: 'queue',
      vulnerabilities: {
        high: 0,
        medium: 2,
        low: 0
      }
    },
    {
      id: 3,
      target: 'https://www.mailserver.com',
      reportType: 'Target Report',
      reportTemplate: 'Quick',
      schedule: 'lastRun Oct 1, 2024 7:18:24 PM',
      status: 'completed',
      vulnerabilities: {
        high: 3,
        medium: 0,
        low: 0
      }
    },
    {
      id: 4,
      target: 'https://www.apiserver.com',
      reportType: 'All Vulnerabilities',
      reportTemplate: 'CWF 2011',
      schedule: 'lastRun Oct 1, 2024 8:00:00 PM',
      status: 'queue',
      vulnerabilities: {
        high: 0,
        medium: 0,
        low: 1
      }
    },
    {
      id: 5,
      target: 'https://www.analytics.com',
      reportType: 'Scan Report',
      reportTemplate: 'CWF 2017',
      schedule: 'lastRun Oct 2, 2024 9:12:12 AM',
      status: 'completed',
      vulnerabilities: {
        high: 0,
        medium: 4,
        low: 0
      }
    },
    {
      id: 6,
      target: 'https://www.cloudstorage.com',
      reportType: 'Target Report',
      reportTemplate: 'affected items',
      schedule: 'lastRun Oct 2, 2024 10:45:09 AM',
      status: 'completed',
      vulnerabilities: {
        high: 6,
        medium: 0,
        low: 0
      }
    },
    {
      id: 7,
      target: 'https://www.cdnserver.com',
      reportType: 'All Vulnerabilities',
      reportTemplate: 'Executive summary',
      schedule: 'lastRun Oct 2, 2024 12:32:44 PM',
      status: 'queue',
      vulnerabilities: {
        high: 0,
        medium: 7,
        low: 0
      }
    },
    {
      id: 8,
      target: 'https://www.filetransfer.com',
      reportType: 'Target Report',
      reportTemplate: 'Developer',
      schedule: 'lastRun Oct 3, 2024 1:45:22 PM',
      status: 'completed',
      vulnerabilities: {
        high: 0,
        medium: 3,
        low: 0
      }
    },
    {
      id: 9,
      target: 'https://www.paymentgateway.com',
      reportType: 'Scan Report',
      reportTemplate: 'Quick',
      schedule: 'lastRun Oct 3, 2024 2:34:11 PM',
      status: 'completed',
      vulnerabilities: {
        high: 8,
        medium: 0,
        low: 0
      }
    },
    {
      id: 10,
      target: 'https://www.vpnserver.com',
      reportType: 'All Vulnerabilities',
      reportTemplate: 'CWF 2011',
      schedule: 'lastRun Oct 3, 2024 3:30:50 PM',
      status: 'queue',
      vulnerabilities: {
        high: 0,
        medium: 2,
        low: 0
      }
    },
    {
      id: 11,
      target: 'https://www.crmplatform.com',
      reportType: 'Target Report',
      reportTemplate: 'CWF 2017',
      schedule: 'lastRun Oct 4, 2024 4:45:15 PM',
      status: 'completed',
      vulnerabilities: {
        high: 0,
        medium: 3,
        low: 0
      }
    },
    {
      id: 12,
      target: 'https://www.billingserver.com',
      reportType: 'Scan Report',
      reportTemplate: 'affected items',
      schedule: 'lastRun Oct 4, 2024 5:20:00 PM',
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
