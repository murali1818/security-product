import React from "react";
import { FaClock, FaCalendarAlt, FaListAlt } from "react-icons/fa";
import { MdTimer } from "react-icons/md"; // You can use other icons too
import "./Summary.css"; // Import the CSS file

// Progress bar colors
const severityColors = {
  low: "#00d09c",
  medium: "#ffcc00", // Yellow
  info: "#4da3ff", // Green
  critical: "#ff4d4d", // Red
  high: "#ff944d", // Orange
};

// Helper function to calculate counts
const calculateSeverities = (summary) => {
  const validSeverities = ["low", "medium", "info", "critical", "high"];
  const severityCounts = { low: 0, medium: 0, info: 0, critical: 0, high: 0 };
  let totalScans = 0;

  if (!summary || typeof summary !== "object") return { severityCounts, totalScans };

  for (const [key, value] of Object.entries(summary)) {
    // Exclude keys
    if (["total_subdomains", "total_valid_subdomains", "website_health"].includes(key)) {
      continue;
    }

    // Count severity if it's valid
    if (value && validSeverities.includes(value.severity)) {
      severityCounts[value.severity] += 1;
      totalScans += 1;
    }
  }

  // Add +5 for header_status_data and +2 for HTTP_options_and_Methods if they exist
  if (summary.header_status_data) {
    totalScans += 4;
    severityCounts.low += 4;
  }
  if (summary.HTTP_options_and_Methods) {
    totalScans += 1;
    severityCounts.low += 1;
  }

  return { severityCounts, totalScans };
};

const Summary = ({ summaryData }) => {
  const { severityCounts, totalScans } = calculateSeverities(summaryData.data);
  return (
    <div className="summary-container">
      {/* Left Section: Progress Bars */}
      <div className="summary-leftSection">
        <h3>Severity Summary</h3>
        {Object.keys(severityCounts).map((severity) => (
          <div key={severity} className="summary-progressBarContainer">
            <span className="summary-label">
              {severity.charAt(0).toUpperCase() + severity.slice(1)}: {severityCounts[severity]}
            </span>
            <div className="summary-progressBarBackground">
              <div
                className="summary-progressBar"
                style={{
                  width: totalScans
                    ? `${(severityCounts[severity] / totalScans) * 100}%`
                    : "0%",
                  backgroundColor: severityColors[severity],
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Scan Metadata */}
      <div className="summary-rightSection">
        <h3>Scan Details</h3>
        <div className="summary-card">
          <FaListAlt className="summary-card-icon" />
          <div className="summary-card-text">
            <span>Total Scans: </span>
            <span className="value">{totalScans}</span>
          </div>
        </div>
        <div className="summary-card">
          <MdTimer className="summary-card-icon" />
          <div className="summary-card-text">
            <span>Duration: </span>
            <span className="value">{summaryData.time_taken} ms</span>
          </div>
        </div>
        <div className="summary-card">
          <FaCalendarAlt className="summary-card-icon" />
          <div className="summary-card-text">
            <span>Start Time: </span>
            <span className="value">{summaryData.start_time}</span>
          </div>
        </div>
        <div className="summary-card">
          <FaClock className="summary-card-icon" />
          <div className="summary-card-text">
            <span>End Time: </span>
            <span className="value">{summaryData.end_time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
