import React from 'react';
import './ScanPage.css'; // Import the custom CSS file

const scanData = [
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  },{
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 24, 2024 2:48:32 PM",
    status: "Completed"
  },
  {
    target: "http://vulnweb.com",
    scanType: "Full Scan",
    schedule: "Last run on Sep 23, 2024 6:55:36 PM",
    status: "Aborted"
  }
];

const ScanPage = () => {
  return (
    <div className="scan-container">
     

      {/* Button group */}
      <div className="button-group">
        <button className="btn">New Scan</button>
        <button className="btn">Stop Scan</button>
        <button className="btn">Delete Scan</button>
        <button className="btn">Generate Report</button>
        <button className="btn">Compare Scans</button>
      </div>

      {/* Table Container */}
      <div className="table-container">
        <table className="scan-table">
          <thead>
            <tr>
              <th>Target</th>
              <th>Scan Type</th>
              <th>Schedule</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {scanData.map((scan, index) => (
              <tr key={index}>
                <td>{scan.target}</td>
                <td>{scan.scanType}</td>
                <td>{scan.schedule}</td>
                <td>{scan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScanPage;
