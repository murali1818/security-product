import React from 'react';
import { FaLaptop, FaChartLine, FaGlobe, FaHeartbeat } from 'react-icons/fa';
import './WebsiteHealth.css'; // Import the CSS file

const WebsiteHealth = ({ websiteHealth }) => {
    const healthData = websiteHealth.data;

    return (
        <>
            {/* Header */}
            <div className="website-health-header">
                <FaHeartbeat className="website-health-icon" style={{ color: 'red' }} />
                <h2 style={{ color: 'black',marginTop:"10px" }}>Website Health</h2>
            </div>

            {/* Cards */}
            <div className="website-health-container">

                {/* Basic Checks */}
                <div className="website-health-card">
                    <div className="website-health-head">
                        <FaLaptop className="website-health-card-icon website-health-card-icon-basic" />
                        <h3>Basic Checks</h3>
                    </div>
                    <div className="website-health-card-content">
                        <p><strong>Content Length:</strong> {healthData.basic_checks.content_length}</p>
                        <p><strong>Reachable:</strong> {healthData.basic_checks.is_reachable ? "Yes" : "No"}</p>
                        <p><strong>Response Time:</strong> {healthData.basic_checks.response_time}</p>
                        <p><strong>Server:</strong> {healthData.basic_checks.server}</p>
                        <p><strong>Status Code:</strong> {healthData.basic_checks.status_code}</p>
                    </div>
                </div>

                {/* DNS Checks */}
                <div className="website-health-card">
                    <div className="website-health-head">
                        <FaGlobe className="website-health-card-icon website-health-card-icon-dns" />
                        <h3>DNS Checks</h3>
                    </div>
                    <div className="website-health-card-content">
                        <p><strong>IP Addresses:</strong> {healthData.dns_checks.ip_addresses.join(", ")}</p>
                        <p><strong>DNS Records:</strong> {healthData.dns_checks.num_records}</p>
                    </div>
                </div>

                {/* Performance */}
                <div className="website-health-card">
                    <div className="website-health-head">
                        <FaChartLine className="website-health-card-icon website-health-card-icon-performance" />
                        <h3>Performance</h3>
                    </div>
                    <div className="website-health-card-content">
                        <p><strong>Average Page Size:</strong> {healthData.performance.average_page_size}</p>
                        <p><strong>Average Response Time:</strong> {healthData.performance.average_response_time}</p>
                        <p><strong>Number of Requests:</strong> {healthData.performance.num_requests}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebsiteHealth;
