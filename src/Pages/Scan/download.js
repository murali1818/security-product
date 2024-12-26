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
  let yPosition = 20; // Top margin
  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  const lineSpacing = 6;
  const subtopicIndent = 5;

  // Set the global font to 'Arial' and increase base font size for better readability
  doc.setFont("arial", "normal");
  doc.setFontSize(12);

  report.vulnerableFindings.forEach((finding) => {
    let severityColor;
    switch (finding.severity.toLowerCase()) {
      case "high":
        severityColor = [255, 0, 0]; // Red
        break;
      case "medium":
        severityColor = [255, 165, 0]; // Orange
        break;
      case "low":
        severityColor = [34, 139, 34]; // Green
        break;
      case "info":
        severityColor = [0, 0, 255]; // Blue
        break;
      default:
        severityColor = [0, 0, 0]; // Default black
    }

    // Format and add the title
    const formattedTitle = finding.title
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const titleLines = doc.splitTextToSize(formattedTitle, contentWidth);
    
    doc.setFontSize(16); // Increase font size for title
    doc.setTextColor(0, 102, 204); // Set the title color to blue
    titleLines.forEach((line) => {
      if (yPosition + lineSpacing > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineSpacing;
    });

    // Add severity block with rounded corners and box-shadow effect
    if (yPosition + 14 > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
    }
    doc.setFillColor(...severityColor);
    doc.roundedRect(margin, yPosition - 4, contentWidth, 14, 5, 5, 'F'); // Rounded rectangle with fill
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(`Severity: ${finding.severity}`, margin + 2, yPosition + 8); // Adjust position to center text
    yPosition += 14;
    doc.setTextColor(0, 0, 0); // Reset color back to black for the content

    // Function to add content blocks with styling
    const addContentBlock = (title, content, isSubtopic = false) => {
      if (content) {
        if (yPosition + lineSpacing > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }
        doc.setFontSize(isSubtopic ? 12 : 11);
        doc.setTextColor(isSubtopic ? 51 : 0, 102, 153); // Set color for subtopics (blue)
        doc.text(title, margin + subtopicIndent, yPosition);
        yPosition += lineSpacing;

        const contentLines = doc.splitTextToSize(content, contentWidth - subtopicIndent);
        contentLines.forEach((line) => {
          if (yPosition + lineSpacing > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
          }
          doc.text(line, margin + subtopicIndent, yPosition);
          yPosition += lineSpacing;
        });
        yPosition += lineSpacing;
      }
    };

    // Add description, risk, and recommendation with custom styling
    addContentBlock("Description:", finding.description?.vulnerabilitiesdescription || "N/A", true);
    addContentBlock("Risk:", finding.description?.riskDescription || "N/A", true);
    addContentBlock("Recommendation:", finding.description?.recommendation || "N/A", true);
    

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
          

    yPosition += 10; // Add spacing before the next finding
    if (yPosition > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
    }
  });

  doc.save("vulnerable_findings.pdf");
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
  console.log(report);
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