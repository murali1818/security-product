import React, { useState, useEffect } from "react";
import "./WebsiteScanner.css";

function WebsiteScanner({ scanData }) {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const statusItems = [
    { name: "Finding Subdomains", color: "#28a745" },
    { name: "Calculating Response Time", color: "#ffc107" },
    { name: "Checking Website Health", color: "#007bff" },
    { name: "Finalizing Report", color: "#6f42c1" },
  ];

  useEffect(() => {
    let interval;

    if (scanData) {
      // Simulate fast progress to completion when scanData is received
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 5, 100); // Increment by 5 until 100
          const step = Math.floor(newProgress / 25);

          // Mark steps as completed
          if (step <= 4 && !completedSteps.includes(step)) {
            setCompletedSteps((prevSteps) => [...prevSteps, step]);
          }

          return newProgress;
        });
      }, 100);
    } else {
      // Simulate slower progress when scanData is not yet received
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 1;
          const step = Math.floor(newProgress / 25);

          if (step <= 4 && !completedSteps.includes(step)) {
            setCompletedSteps((prevSteps) => [...prevSteps, step]);
          }

          return newProgress < 100 ? newProgress : prev;
        });
      }, 300);
    }

    return () => clearInterval(interval);
  }, [scanData, completedSteps]);

  const renderCircle = (step, index) => {
    const isCompleted = completedSteps.includes(index);
    const progressStyle = { strokeDasharray: isCompleted ? "100, 100" : "0, 100" };
    const circleColor = statusItems[index]?.color;

    return (
      <div key={index} className="web-scan-step">
        <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
          <path
            className="circle-back"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="3"
            d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831"
          />
          <path
            className="circle-front"
            fill="none"
            stroke={circleColor}
            strokeWidth="3"
            style={progressStyle}
            d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831"
          />
        </svg>
        {isCompleted ? "✅" : null}
        <p>{step.name}</p>
      </div>
    );
  };

  return (
    <div className="web-scan-container">
      <h2 className="web-scan-title">Website Scanner Report</h2>
      <div className="web-scan-progress-card">
        <p className="web-scan-heading">
          {progress < 100 ? "Scanning Target..." : "🎉 Scan Completed Successfully!"}
        </p>
        <div className="web-scan-progress-bar">
          <div
            className="web-scan-progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="web-scan-percentage">{progress}%</p>

        <div className="web-scan-steps-container">
          {statusItems.map((step, index) => renderCircle(step, index))}
        </div>

        {/* Did You Know Content Section */}
        {progress < 100 && (
          <div className="web-scan-did-you-know">
            <p className="did-you-know-heading">💡 Did you know?</p>
            <p className="did-you-know-content">
              It takes between 1 and 15 minutes to complete a scan with our tools,
              depending on the complexity of the asset and the scanning depth.
              Please bear with us for a bit! You can still browse around in the meantime
              and we'll notify you when your scan is complete.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WebsiteScanner;
