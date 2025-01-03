import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { pdf } from '@react-pdf/renderer';
import description from '../Scandetails/description';
import MyPDFDocument from './MyPDFDocument';

let report = {
    domain: 'Unknown Domain',
    vulnerableFindings: [],
};

const formatTitle = (title) => {
    return title
        .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

const DownloadButton = ({ userId, targetId }) => {
    const [pdfUrl, setPdfUrl] = useState(null); // State to hold PDF blob URL for preview
 
    const savePDF = async (report) => {
        // Generate the PDF as a blob
        const blob = await pdf(<MyPDFDocument report={report} />).toBlob();
        const url = URL.createObjectURL(blob);
       
        setPdfUrl(url); // Set the URL for preview
       
        // Open PDF in a new tab
        window.open(url, '_blank');
    };

    // const savePDF = async (report) => {
    //     const blob = await pdf(<MyPDFDocument report={report} />).toBlob();
    //     const url = URL.createObjectURL(blob);
    
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = 'vulnerability_report.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    
    //     // Reset the report data after download
    //     report.domain = 'Unknown Domain';
    //     report.vulnerableFindings = [];
    // };
    const processFindings = (findingsData) => {
        //console.log(findingsData);
        report.domain = findingsData?.domain || 'Unknown Domain';
        //console.log(findingsData);

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

        savePDF(report); // Generate and open PDF in new tab
    };

    const addFinding = (title, data, severity) => {
        const excludedTitles = [
            'Total Subdomains',
            'Total Valid Subdomains',
            'Details'
        ];

        if (excludedTitles.includes(formatTitle(title))) {
            return;
        }
        //console.log(title, data.vulnerable||data.Vulnerable, severity);

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
            data?.vulnerable === 'True' ||
            data?.vulnerable === undefined ;

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
    };

    const handleDownload = (userId, targetId) => {
        fetch(`https://securityapi-production-973d.up.railway.app/fetch?u=${userId}&t=${targetId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                processFindings(data.data[0]);
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        // <div>
        //     <button
        //         className="btn btn-download"
        //         onClick={() => handleDownload(userId, targetId)}
        //     >
        //    <FaDownload /> Download PDF
        //     </button>

        //     {/* Render a download button if pdfUrl is available */}
            
        // </div>
        
        <div>
            <button
                className="btn btn-download"
                onClick={() => handleDownload(userId, targetId)}
            >
            Preview PDF
            </button>
 
            {/* Render a download button if pdfUrl is available */}
            {pdfUrl && (
                <button
                    className="btn btn-download"
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = pdfUrl;
                        link.download = 'vulnerability_report.pdf';
                        link.click();
                    }}
                >
                    <FaDownload /> Download PDF
                </button>
            )}
        </div>
    );
};

export default DownloadButton;
