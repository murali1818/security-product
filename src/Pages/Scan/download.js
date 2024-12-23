import { jsPDF } from "jspdf";
import description from "../Scandetails/description";

let report = {
  domain: 'Unknown Domain',
  vulnerableFindings: [],
};
const formatTitle = (title) => {
    return title
      .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };
  

// Utility function to save data to a file (JSON)
const saveDataToFile = (data) => {
  const fileData = JSON.stringify(data, null, 2);
  const blob = new Blob([fileData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'vulnerable_findings_with_descriptions.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Utility function to generate PDF with styling
const generatePDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  let yPosition = 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  
  // Add domain title
  doc.setTextColor(0, 0, 255);  // Blue color for title
  doc.text(`Domain: ${report.domain}`, 10, yPosition);
  yPosition += 15;

  // Iterate through vulnerable findings
  report.vulnerableFindings.forEach((finding) => {
    // Set color based on severity
    let severityColor;
    switch (finding.severity.toLowerCase()) {
      case "high":
        severityColor = [255, 0, 0];  // Red
        break;
      case "medium":
        severityColor = [255, 165, 0];  // Orange
        break;
      case "low":
        severityColor = [34, 139, 34];  // Green
        break;
      case "info":
        severityColor = [0, 0, 255];  // Blue
        break;
      default:
        severityColor = [0, 0, 0];  // Default black
    }

    // Heading: Title
    doc.setTextColor(...severityColor); // Set color based on severity
    doc.setFontSize(12);
    doc.text(`Title: ${finding.title}`, 10, yPosition);
    yPosition += 8;

    // Severity
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Set text color to black for the severity description
    doc.text(`Severity: ${finding.severity}`, 10, yPosition);
    yPosition += 8;

    // Description (if available)
    doc.setFontSize(10);
    if (finding.description?.vulnerabilitiesdescription) {
      doc.text(`Description: ${finding.description.vulnerabilitiesdescription}`, 10, yPosition);
      yPosition += 8;
    } else {
      doc.text("Description: No description available", 10, yPosition);
      yPosition += 8;
    }

    // Risk (if available)
    if (finding.description?.riskDescription) {
      doc.text(`Risk: ${finding.description.riskDescription}`, 10, yPosition);
      yPosition += 8;
    }

    // Recommendation (if available)
    if (finding.description?.recommendation) {
      doc.text(`Recommendation: ${finding.description.recommendation}`, 10, yPosition);
      yPosition += 8;
    }

    // Add a table for additional subtopics if available
    if (finding.data && typeof finding.data === "object") {
      doc.setFontSize(10);
      doc.text("Additional Information:", 10, yPosition);
      yPosition += 8;

      // Draw a table-like structure
      Object.entries(finding.data).forEach(([key, value], index) => {
        doc.text(`${key}: ${value}`, 10, yPosition);
        yPosition += 6;
      });
    }

    // Add a space between findings
    yPosition += 10;

    // Check if we need to add more space or create a new page
    if (yPosition > 270) {  // Close to the bottom of the page
      doc.addPage();
      yPosition = 10;
    }
  });

  // Save the PDF file
  doc.save('vulnerable_findings.pdf');
};

// Add the function to process findings and trigger both downloads (PDF and JSON)
const processFindings = (findingsData) => {
  report.domain = findingsData?.domain || 'Unknown Domain';

  if (findingsData?.data) {
    Object.entries(findingsData.data).forEach(([key, value]) => {
        
      if (key === 'HTTP_options_and_Methods' || key === 'header_status_data') {
        const individualFindings = value.data;
        Object.entries(individualFindings).forEach(([subKey, subValue]) => {
          addFinding(subKey, subValue, value.severity || 'info');
        });
      } else {
        addFinding(key, value.data, value.severity || 'info');
      }
    });
  }
  generatePDF();  // Download PDF
  saveDataToFile(report);  // Download JSON file
};

const addFinding = (title, data, severity) => {
  const excludedTitles = [
    'Total Subdomains',
    'Total Valid Subdomains',
    'Website Health',
    'Details',
  ];

  if (excludedTitles.includes(formatTitle(title))) {
    return;
  }

  const isVulnerable =
    data?.vulnerable === true ||
    data?.Vulnerable === true ||
    data?.vulnerable === 'yes' ||
    data?.Vulnerable === 'yes' ||
    data?.vulnerable === 'Yes' ||
    data?.Vulnerable === 'Yes' ||
    data?.Vulnerable === 'true' ||
    data?.Vulnerable === 'True' ||
    data?.vulnerable === 'true' ||
    data?.vulnerable === 'True';

  const descriptionDetails = description[title] || {};
  const isDuplicate = report.vulnerableFindings.some(
    (finding) => finding.title === title && JSON.stringify(finding.data) === JSON.stringify(data)
  );
  console.log(title);

  if (!isDuplicate && isVulnerable) {
    report.vulnerableFindings.push({
      title: title,
      severity: severity,
      data: data,
      description: descriptionDetails,
    });
  }
};

// Unified function to fetch data, process it, and trigger both download actions
const handleDownload = (userId, targetId) => {
  console.log(userId, targetId);
  fetch(`https://securityapi-production-973d.up.railway.app/fetch?u=${userId}&t=${targetId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((data) => {
      processFindings(data.data[0]);  // Process the fetched findings
    })
    .catch((err) => {
      console.error(err.message);
    });
};

export { handleDownload };
