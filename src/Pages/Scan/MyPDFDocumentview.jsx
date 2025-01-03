import React from 'react';
import { Document, Page, Text, StyleSheet, Font } from '@react-pdf/renderer';

// Register the custom font
Font.register({
  family: 'Calibri',
  fonts: [
    {
      src: '/fonts/calibri-font-family/calibri-italic.ttf',
      fontStyle: 'italic',
    },
  ],
});

// Define styles using the registered font
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    fontFamily: 'Calibri',
    fontStyle: 'italic',
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Calibri',
    fontStyle: 'italic',
    fontSize: 12,
  },
});

// PDF Document Component
const MyPDFDocument = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>This is a title in Calibri Italic</Text>
      <Text style={styles.text}>This is some content using the Calibri Italic font.</Text>
    </Page>
  </Document>
);

export default MyPDFDocument;
