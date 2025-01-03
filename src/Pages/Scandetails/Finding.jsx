import React from "react";
import "./Finding.css";

import description from "./description";
let report = {
  domain: "Unknown Domain", 
  vulnerableFindings: [],  
};

// Utility function to save data to a file
// const saveDataToFile = (data) => {
//   const fileData = JSON.stringify(data, null, 2);
//   const blob = new Blob([fileData], { type: "application/json" });
//   const url = URL.createObjectURL(blob);

//   const link = document.createElement("a");
//   link.href = url;
//   link.download = "vulnerable_findings_with_descriptions.json";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

const FindingCard = ({ title, data, severity }) => {
  const excludedTitles = [
    "Total Subdomains",
    "Total Valid Subdomains",
    "Website Health",
    "Details",
  ];

  const additionalText =
    severity === "info"
      ? "This is for informational purposes only."
      : severity === "low"
      ? "This issue poses a minimal risk."
      : severity === "medium"
      ? "This issue should be addressed soon."
      : "This issue requires immediate attention!";

  const formatTitle = (title) => {
    return title
      .replace(/[_-]/g, " ") // Replace underscores and hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };

  if (excludedTitles.includes(formatTitle(title))) {
    return null;
  }

  const isVulnerable =
  data?.vulnerable === true ||
  data?.Vulnerable === true ||
  data?.Vulnerable === "yes"||
  data?.vulnerable === "Yes"||
  data?.Vulnerable === "true" ||
  data?.Vulnerable === "True"||
  data?.vulnerable === "true" ||
  data?.vulnerable === "True"
   

  const descriptionDetails = description[title] || {};
  const isDuplicate = report.vulnerableFindings.some(
    (finding) => finding.title === title && JSON.stringify(finding.data) === JSON.stringify(data)
  );
  
  if (!isDuplicate && isVulnerable) {
    report.vulnerableFindings.push({
      title: title,
      severity: severity,
      data: data,
      description: descriptionDetails,
    });
  }

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, index) => (
            <li key={index}>
              {typeof item === "object" ? renderValue(item) : item}
            </li>
          ))}
        </ul>
      );
    }
    if (typeof value === "object" && value !== null) {
      return (
        <div style={{ marginLeft: "20px" }}>
          {Object.entries(value).map(([k, v]) => (
            <div key={k}>
              <strong>{k}:</strong> {renderValue(v)}
            </div>
          ))}
        </div>
      );
    }
    return value.toString();
  };

  return (
    <div className={`finding-card ${severity}`}>
      <div className="finding-header">
        <h3>{formatTitle(title)}</h3>
        <span className="severity">{severity.toUpperCase()}</span>
      </div>
      {isVulnerable ? (
        <div className="finding-content">
          {typeof data === "object" && data !== null ? (
            Object.entries(data).map(([key, value]) => (
              <div key={key} className="finding-field">
                <strong>{formatTitle(key)}:</strong>
                <span className="field-value">{renderValue(value)}</span>
              </div>
            ))
          ) : (
            <p>{data}</p>
          )}
          <div className="descrp-contain">
            {descriptionDetails.vulnerabilitiesdescription && (
              <div className="description-section">
                <strong>Description:</strong>
                <p>{descriptionDetails.vulnerabilitiesdescription}</p>
              </div>
            )}
            {descriptionDetails.riskDescription && (
              <div className="description-section">
                <strong>Risk:</strong>
                <p>{descriptionDetails.riskDescription}</p>
              </div>
            )}
            {descriptionDetails.recommendation && (
              <div className="description-section">
                <strong>Recommendation:</strong>
                <p>{descriptionDetails.recommendation}</p>
              </div>
            )}
          </div>
          <p className="additional-text">{additionalText}</p>
        </div>
      ) : (
        <p className="additional-text">Nothing found</p>
      )}
    </div>
  );
};

const Finding = ({ findingsData }) => {
  console.log(findingsData);
  report.domain = findingsData?.domain || "Unknown Domain";

  return (
    <div className="findings-container">
      {findingsData?.data &&
        Object.entries(findingsData.data).map(([key, value]) => {
          if (key === "HTTP_options_and_Methods" || key === "header_status_data") {
            const individualFindings = value.data;
            return Object.entries(individualFindings).map(([subKey, subValue]) => (
              <FindingCard
                key={subKey}
                title={subKey}
                data={subValue}
                severity={value.severity || "info"}
              />
            ));
          }

          return (
            <FindingCard
              key={key}
              title={key}
              data={value.data}
              severity={value.severity || "info"}
            />
          );
        })}

      {/* Add Save to File Button */}
      
        {/* <button
          onClick={() => saveDataToFile(report)}
          className="save-button"
        >
          Save Vulnerable Findings with Descriptions
        </button> */}
      
    </div>
  );
};

export default Finding;
