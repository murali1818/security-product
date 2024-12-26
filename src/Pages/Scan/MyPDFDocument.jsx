/* eslint-disable no-sequences */
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


// PDF styles with colors and spacing
const styles = StyleSheet.create({
    page: {
        padding: 50,
        backgroundColor: '#f8f9fa',
        textAlign: 'justify',
        letterSpacing: 0.3, // Add space between letters for better readability
    },
    contentContainer: {
        flex: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 10,
        color: 'gray',
    },
    topcontainer: {
        breakInside: 'avoid',
        pageBreakInside: 'avoid',
    },
    title: {
        fontSize: 16, // Increase font size for better readability
        marginBottom: 15, // Increase bottom margin for spacing
        textAlign: 'left',
        color: '#073d57',
        fontWeight: 'extrabold',
        letterSpacing: 0.3, // Add letter spacing for clarity
    },
    descriptionTitle: {
        fontSize: 14, // Increase font size for section titles
        fontWeight: 'extrabold',
        color: '#073d57',
        marginTop: 10, // Add top margin for better separation
        marginBottom: 10, // Add bottom margin for better separation
    },
    descriptionContent: {
        fontSize: 12, // Increase font size for better readability
        marginBottom: 5, // Increase bottom margin for spacing
        color: 'black',
        lineHeight: 1.5, // Increase line height for better readability
        textAlign: 'justify',
        fontFamily: 'Helvetica',
        fontWeight: '400',
        letterSpacing: 0.5, // Add space between letters for clarity
    },
    severity: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
        paddingVertical: 10, // Increase padding for better spacing
        paddingHorizontal: 12, // Increase padding for better spacing
        borderRadius: 5,
        color: '#fff',
        width: '100%',
        marginBottom: 15, // Increase bottom margin for spacing
    },
    severityHigh: {
        backgroundColor: '#dc3545',
    },
    severityMedium: {
        backgroundColor: '#ffc107',
    },
    severityLow: {
        backgroundColor: '#28a745',
    },
    severityinfos: {
        backgroundColor: '#353ed2',
    },
    pageNumber: {
        position: 'absolute',
        bottom: 30,
        right: 60,
        fontSize: 10,
        color: 'gray',
    },
    dataItem: {
        fontSize: 12, // Increase font size for better readability
        color: '#495057',
        lineHeight: 1.5, // Increase line height for readability
        letterSpacing: 0.5, // Add letter spacing for clarity
    },
    dataItemTitle: {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        color: '#007bff',
        letterSpacing: 0.5, // Add letter spacing for clarity
    },
    nestedDataItem: {
        fontSize: 12,
        color: '#555',
        lineHeight: 1.5, // Improve readability
    },
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 12, // Increase font size for better readability
        marginBottom: 5, // Add bottom margin for spacing
    },
    listBullet: {
        marginRight: 10,
    },
});


// Helper function to format titles
const formatTitle = (title) => {
    return title
        .replace(/_/g, ' ').toUpperCase();// Replace underscores and hyphens with spaces
};

const renderValue = (value) => {
    if (Array.isArray(value)) {
        return (
            <View style={{marginRight:20}}>
                {value.map((item, index) => (
                    <Text key={index} >
                        {typeof item === 'object' ? renderValue(item) : item+', '}
                    </Text>
                ))}
            </View>
        );
    }
    if (typeof value === 'object' && value !== null) {
        return (
            <View style={{marginRight:20}} >
                {Object.entries(value).map(([k, v], index) => (
                    <Text key={index} style={{marginRight:20}}>
                        <Text >{formatTitle(k)}:</Text> {renderValue(v)}{', '}
                    </Text>
                ))}
            </View>
        );
    }
    return value.toString();
};

// PDF Document Component
const MyPDFDocument = ({ report }) => (
    <Document>
        {report.vulnerableFindings.map((finding, index) => (// Increment the number for each finding
            <Page style={styles.page}>
                <View key={index}>
                    <View wrap={false}>
                        <Text style={styles.title}>
                            {index + 3}.{formatTitle(finding.title)}
                        </Text>
                        <Text style={[      // Apply styles based on severity
                            styles.severity,
                            finding.severity.toLowerCase() === 'high' && styles.severityHigh,
                            finding.severity.toLowerCase() === 'info' && styles.severityinfos,
                            finding.severity.toLowerCase() === 'medium' && styles.severityMedium,
                            finding.severity.toLowerCase() === 'low' && styles.severityLow,

                        ]}>

                            <Text>{finding.severity}</Text>
                        </Text>
                    </View>
                    {typeof finding.description === 'object' ? (
                        <View>
                            <View wrap={false}>
                                <Text style={styles.descriptionTitle}>DESCRIPTION</Text>
                                <Text style={styles.descriptionContent}>
                                    {finding.description.vulnerabilitiesdescription || 'No description available'}
                                </Text>
                            </View>
                            <View wrap={false}>
                                <Text style={styles.descriptionTitle}>IMPACT</Text>
                                <Text style={styles.descriptionContent}>
                                    {finding.description.riskDescription || 'No description available'}
                                </Text>
                            </View>
                            <Text style={styles.descriptionTitle}>DATA</Text>
                            {typeof finding.data === 'object' && finding.data !== null ? (
                                Object.entries(finding.data).map(([key, value]) => (
                                    <View key={key} style={styles.dataContainer}>
                                        {typeof value === 'string' || typeof value === 'boolean'|| typeof value==='number' ? (
                                            <View style={styles.dataItem}>
                                                <Text><Text style={styles.dataItemTitle}>{formatTitle(key)}:</Text> <Text>{value.toString()}</Text></Text>
                                            </View>

                                        ) : (
                                            <View style={styles.dataItem}>
                                                <View><Text style={styles.dataItemTitle}>{formatTitle(key)}:</Text>{renderValue(value)}</View>
                                            </View>
                                        )}
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.dataItem}>{'No data available'}</Text>
                            )}
                            <View wrap={false}>
                                <Text style={styles.descriptionTitle}>SOLUTION TO FIX THE PROBLEM</Text>
                                <Text style={styles.descriptionContent}>
                                    {finding.description.recommendation || 'No description available'}
                                </Text>
                            </View>
                        </View>
                    ) : (
                        <Text style={styles.descriptionContent}>
                            {finding.description || 'No description available'}
                        </Text>
                    )}
                </View>
                <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
                <Text style={styles.pageNumber}>{index + 3}</Text>
            </Page>
        ))}


    </Document>
);

export default MyPDFDocument;
