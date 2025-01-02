/* eslint-disable jsx-a11y/iframe-has-title */
// PreviewPDF.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyPDFDocument from './MyPDFDocument'; // The PDF document you created

const PreviewPDF = ({ report }) => {
  return (
    <div>
      {/* Show the PDF as a download link */}
      <PDFDownloadLink document={<MyPDFDocument report={report} />} fileName="vulnerable_findings.pdf">
        {({ loading }) => (loading ? 'Loading PDF...' : 'Download PDF')}
      </PDFDownloadLink>

      {/* Render the PDF preview inline */}
      <div>
        <h3>PDF Preview:</h3>
        <iframe
          src={`data:application/pdf;base64,${report.base64PDF}`} // Create base64 PDF here (explained below)
          width="100%"
          height="500px"
        />
      </div>
    </div>
  );
};
export default PreviewPDF;
