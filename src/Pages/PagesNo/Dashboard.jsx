import React from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Register necessary elements for Chart.js
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Dashboard = ({ isSidebarOpen }) => {
  // Data for the Doughnut chart
  const doughnutData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [{
      data: [11, 18, 14],
      backgroundColor: ['#ff6384', '#ffce56', '#36a2eb'],
      hoverBackgroundColor: ['#ff6384', '#ffce56', '#36a2eb']
    }]
  };

  // Data for the Line chart
  const lineData = {
    labels: ['08/2016', '12/2017', '01/2018', '06/2018', '10/2018', '12/2018'],
    datasets: [
      {
        label: 'High',
        data: [5, 4, 3, 6, 10, 12],
        fill: false,
        borderColor: '#ff6384',
        tension: 0.1
      },
      {
        label: 'Medium',
        data: [6, 5, 4, 3, 6, 9],
        fill: false,
        borderColor: '#ffce56',
        tension: 0.1
      },
      {
        label: 'Low',
        data: [2, 3, 1, 2, 5, 7],
        fill: false,
        borderColor: '#36a2eb',
        tension: 0.1
      }
    ]
  };

  // Data for the Bar chart
  const barData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [{
      label: 'Days',
      data: [500, 450, 300],
      backgroundColor: ['#ff6384', '#ffce56', '#36a2eb'],
      hoverBackgroundColor: ['#ff6384', '#ffce56', '#36a2eb']
    }]
  };

  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows the chart to resize with its container
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? 'dashboard-shrink' : 'dashboard-expand'}`}>
  <div className="top-cards">
    <div className="card">
      <Doughnut data={doughnutData} />
      <h3>High Severity Vulnerabilities</h3>
    </div>
    <div className="card-grid">
  <div className="card-item top-left">
    <h3>4 Users</h3>
    <p>2 active in the last week</p>
  </div>
  <div className="card-item top-right">
    <h3>20 Websites</h3>
    <p>3 Critical, 7 High</p>
  </div>
  <div className="card-item bottom-left">
    <h3>12 Completed Scans</h3>
    <p>Average: 00:20:05</p>
  </div>
  <div className="card-item bottom-right">
    <h3>10 Act. Vulnerabilities</h3>
    <p>4 High, 6 Medium</p>
  </div>
</div>

 
  </div>

  <div className="charts-section">
    <div className="chart-card">
      <Line data={lineData} options={options} />
      <h3 className="open-vul-h3">Open Vulnerabilities</h3>
    </div>
    <div className="chart-card">
      <Bar data={barData} options={options} />
      <h3 className="open-vul-h3">Average Time to Fix</h3>
    </div>
  </div>

  <div className="bottom-cards">
    <div className="card">
      <h3>Top Vulnerabilities</h3>
      <ul>
        <li>Cross-site scripting: 3</li>
        <li>Source code disclosure: 6</li>
        <li>Backup files: 4</li>
        <li>Blind SQL Injection: 1</li>
        <li>Directory listing: 12</li>
      </ul>
    </div>
    <div className="card">
      <h3>Recent Scans</h3>
      <ul>
        <li>http://testhtml5.vulnweb.com</li>
        <li>http://testphp.vulnweb.com</li>
        <li>http://testasp.vulnweb.com</li>
        <li>http://testaspnet.vulnweb.com</li>
        <li>http://test.vulnweb.com</li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Dashboard;
