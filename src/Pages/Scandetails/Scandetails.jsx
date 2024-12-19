import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Scandetails.css";
import WebsiteHealth from "./WebsiteHealth";
import Summary from "./summaryData";
import { FaCheckCircle } from "react-icons/fa";
import Finding from "./Finding";

const Scandetails = () => {
  const [scanData, setScanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("websiteHealth");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("u");
  const targetId = queryParams.get("t");

  useEffect(() => {
    if (userId && targetId) {
      fetch(
        `https://securityapi-production-973d.up.railway.app/fetch?u=${userId}&t=${targetId}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data.data[0]);
          setScanData(data.data[0]);
         
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setError("Invalid user or target ID");
      setLoading(false);
    }
  }, [userId, targetId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCopy = () => {
    if (scanData && scanData.domain) {
      navigator.clipboard.writeText(scanData.domain);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="scan-details-container">
      <div className="vulnerability-scanner-section">
        <div className="scanner-title">
          <h2>Website Vulnerability Scanner</h2>
          <div className="scan-message">
            <FaCheckCircle className="scan-message-icon" />
            <p>{scanData.data.message || "Scan completed successfully!"}</p>
          </div>
        </div>
        <div className="scanner-target">
          <p className="scanner-label">Target</p>
          <div className="scanner-url-box">
            <a
              href={`http://${scanData.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="scanner-url"
            >
              {scanData.domain}
            </a>
            <button onClick={handleCopy} className="copy-button">
              📋
            </button>
          </div>
          {copySuccess && <span className="copy-success">Copied!</span>}
        </div>
      </div>
      <div className="scan-page">
        <div className="scan-container-tab">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="tab-container">
              <button
                onClick={() => handleTabClick("websiteHealth")}
                className={activeTab === "websiteHealth" ? "active-tab" : ""}
              >
                Website Health
              </button>
              <button
                onClick={() => handleTabClick("Summary")}
                className={activeTab === "Summary" ? "active-tab" : ""}
              >
                Summary
              </button>
              <button
                onClick={() => handleTabClick("Findings")}
                className={activeTab === "Findings" ? "active-tab" : ""}
              >
                Findings
              </button>
            </div>
          </div>
          <div className="scan-con-div">
            {activeTab === "websiteHealth" && (
              <WebsiteHealth websiteHealth={scanData.data.website_health} />
            )}
            {activeTab === "Summary" && (
              <Summary summaryData={scanData} />
            )}
            {activeTab === "Findings" && (
              <Finding findingsData={scanData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scandetails;
