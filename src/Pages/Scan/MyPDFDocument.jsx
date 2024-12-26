/* eslint-disable no-sequences */
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import imageSrc from './image.png';

// PDF styles with colors and spacing
const styles = StyleSheet.create({
    firstpage: {
        flexDirection: 'column',
        alignItems: 'left',
        backgroundColor: '#FFFFFF',
        padding: 60,
    },
    firstlogo: {
        width: 200,
        height: 50,
        marginBottom: 50,
    },

    firstsubtitle: {
        fontSize: 46,
        fontWeight: 'ultrabold',
        color: '#002D62',
    },
    firstfooter: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 10,
    },
    page: {
        padding: 60,
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
    titleRestr: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'left',
        color: '#073d57',
        fontWeight: 'bold',
        borderBottom: '2px solid gray',
        paddingVertical: 10,

    },
    subTitle: {
        fontSize: 20, // Slightly larger for better visibility
        marginBottom: 20, // Adjust spacing
        textAlign: 'center', // Center align the subtitle
        color: '#1C51A3', // Use a primary color for branding
        fontWeight: 'bold', // Bold for emphasis
        textTransform: 'uppercase', // Uppercase for a formal look
        borderBottom: '2px solid #1C51A3', // Underline effect
        paddingBottom: 5, // Space between text and border
        marginTop: '30%'
    },
    subTitledis: {
        fontSize: 24,
        marginBottom: 15,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#01579B', // Dark Blue
        paddingVertical: 10,
        borderRadius: 5,
    },
    subTitleTable: {
        fontSize: 18,
        marginBottom: 10,
        marginTop: 50,
        color: '#555',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        marginBottom: 15,
        color: '#333',
        lineHeight: 1.5,
    },
    disclaimerText: {
        fontSize: 12,
        marginBottom: 15,
        color: 'black',
        paddingLeft: 10,
        fontStyle: 'italic',
    },
    disclaimerText1: {
        fontSize: 12,
        marginBottom: '30%',
        color: '#495057',

        fontStyle: 'italic',
        textAlign: 'justify', // Add this line
        paddingLeft: 5, // Padding on the left
        paddingRight: 5, // Padding on the right
    },
    section: {
        marginBottom: 15,
        padding: 15,
        border: '1px solid #ddd',
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },


    severityInfo: {
        backgroundColor: '#0066FF' // Informational severity
    },

    largeTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#01579B',
        marginTop: '50%',
        marginBottom: '50%',
    },
    // Title for Methodology
    // Methodology
    sectionText: {
        fontSize: 12,

        color: '#333',
        lineHeight: 1.5,
    },


    // DEFINITION OF SEVERITY RATINGS
    table: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCellLeft: {
        flex: 1,

        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableCellRight: {
        flex: 3,

        width: '90%',
    },
    tableCellText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    tableDescriptionText: {
        fontSize: 12,
        lineHeight: 1.3,
        padding: 5,
        letterSpacing: 0.3,
        color: '#333',
    },
    criticalCell: {
        backgroundColor: '#FF0000',
    },
    highCell: {
        backgroundColor: '#FF9900',
    },
    mediumCell: {
        backgroundColor: '#FFD700',
    },
    lowCell: {
        backgroundColor: '#00FF00',
    },
    infoCell: {
        backgroundColor: '#0066FF',
    },
    conclusionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#1C51A3',
    },
    blackboxImage: {
        width: 500,
        height: 200,
        marginTop: 50,
    }
});


// Helper function to format titles
const formatTitle = (title) => {
    return title
        .replace(/_/g, ' ').toUpperCase();// Replace underscores and hyphens with spaces
};

const today = new Date();
const formattedDate = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`;

const renderValue = (value) => {
    if (Array.isArray(value)) {
        return (
            <View style={{ marginRight: 20 }}>
                {value.map((item, index) => (
                    <Text key={index} >
                        {typeof item === 'object' ? renderValue(item) : item + ', '}
                    </Text>
                ))}
            </View>
        );
    }
    if (typeof value === 'object' && value !== null) {
        return (
            <View style={{ marginRight: 20 }} >
                {Object.entries(value).map(([k, v], index) => (
                    <Text key={index} style={{ marginRight: 20 }}>
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
        <Page style={styles.firstpage}>
            <Image
                style={styles.firstlogo}
                src='./infoziant-logo.png' // Replace with the correct path to your logo file
            />
            <View style={{ marginBottom: '20' }} >
                <Text style={styles.firstsubtitle}>Web Application</Text>
                <Text style={styles.firstsubtitle}>Penetration</Text>
                <Text style={styles.firstsubtitle}>Testing Report</Text>
            </View>
            <Text style={styles.firstfooter}>Infoziant Internal</Text>
            <Text style={styles.firstfooter}>Date: {formattedDate}</Text>
            <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
            <Text style={styles.pageNumber}>1</Text>
        </Page>
        {/* Second page: RESTRICTED USE and DISCLAIMERS */}
        <Page style={styles.firstpage}>
            <Text style={styles.titleRestr}>RESTRICTED USE</Text>
            <Text style={[styles.descriptionContent, { fontStyle: 'italic', marginBottom: 20 }]}>
                This report presents the findings and recommendations resulting from the penetration
                testing performed on Infoziant. The goal of the testing was to identify and exploit
                vulnerabilities to assess the overall security posture and resilience of the infrastructure.
                The testing was conducted in a controlled manner to minimize impact on operations and
                data integrity.
            </Text>
            <Text style={[styles.descriptionContent, { fontStyle: 'italic', marginBottom: 20 }]}>
                The testing focused on identifying vulnerabilities that could be exploited by an attacker to
                gain unauthorized access, escalate privileges, or disrupt services. The penetration testing
                was conducted using a combination of automated tools and manual techniques. The team
                simulated various attack scenarios to identify and exploit vulnerabilities.
            </Text>
            <Text style={styles.titleRestr}>DISCLAIMERS</Text>
            <Text style={[styles.descriptionContent, { fontStyle: 'italic', marginBottom: 20 }]}>
                This report is intended solely for the use of Infoziant and should not be disclosed to any
                third parties without prior written consent. The findings and recommendations presented
                in this report are based on the information available at the time of testing and may not
                reflect the current security posture of Infoziant network and systems.
            </Text>

            <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
            <Text style={styles.pageNumber}>2</Text>
        </Page>

        {/* Third page: Table of Content */}
        <Page style={styles.firstpage}>
            <Text style={styles.titleRestr}>Table of Content</Text>
            <Text style={styles.disclaimerText}>1.EXECUTIVE SUMMARY</Text>
            <Text style={styles.disclaimerText}>2.SUMMARY OF FINDING</Text>
            {report.vulnerableFindings.map((finding, index) => (
                <Text key={index} style={styles.disclaimerText}>
                    {index + 3}.{formatTitle(finding.title)}
                </Text>
            ))}
            <Text style={styles.disclaimerText}>{report.vulnerableFindings.length + 3}.METHODOLOGY</Text>
            <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
            <Text style={styles.pageNumber}>3</Text>
        </Page>

        {/* Fourth page: EXECUTIVE SUMMARY and SUMMARY OF FINDINGS */}
        <Page style={styles.page}>
            <Text style={styles.subTitle}>1. EXECUTIVE SUMMARY</Text>
            <Text style={styles.text}>
                Infoziant security team performed a Web Application Penetration Test for Infoziant Internal. This assessment utilized both commercial and proprietary tools for the initial mapping and reconnaissance the application, as well as custom tools and scripts for unique vulnerabilities.
            </Text>
            <Text style={styles.subTitle}>2. SUMMARY OF FINDINGS</Text>
            <Text style={styles.text}>
                Gray Box security assessment allowed to be finding various Critical, High, Low, Medium and Informational vulnerabilities.
            </Text>
            <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
            <Text style={styles.pageNumber}>4</Text>
        </Page>

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
                                        {typeof value === 'string' || typeof value === 'boolean' || typeof value === 'number' ? (
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
                <Text style={styles.pageNumber}>{index + 5}</Text>
            </Page>
        ))}

        {/* Methodology Section */}
        <Page style={styles.page}>
            {/* Title for Methodology */}
            <Text style={styles.title}> {report.vulnerableFindings.length + 3}.METHODLOGY</Text>
            <Text style={styles.descriptionContent}>
                Our application Security testing identify for lurking vulnerabilities on the information
                systems tested may allow a malicious attacker to perform unwanted or undesirable
                actions. Information systems are comprised of some different software and hardware
                components. Errors in the configuration or programming of these components may create
                vulnerabilities, or potential weaknesses, that may allow an opportunity for an attacker to
                perform a malicious action. Different vulnerabilities require different levels of access or
                skill to be successfully used maliciously.
            </Text>

            {/* Title for Gray Box Section */}
            <Text style={styles.title}>Gray Box Web App Security Assessment</Text>
            <Text style={styles.descriptionContent}>
                The combination of Black Box and White Box security assessment is called as Grey box
                security assessment. When the tester is having partial information about the target, it is
                referred to as grey box penetration testing. In this case, the attacker will have some
                knowledge of the target information like URLs, IP addresses, etc., but will not have
                complete knowledge or access.
            </Text>
            <Image style={styles.blackboxImage} src={imageSrc} />
            <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
            <Text style={styles.pageNumber}>{report.vulnerableFindings.length + 5}</Text>
        </Page>


        <Page style={styles.page}>
            {/* Section Title */}
            <Text style={styles.title}>DEFINITION OF SEVERITY RATINGS</Text>
            <Text style={styles.descriptionContent}>
                The risk ratings assigned to each vulnerability are determined by averaging several aspects of the exploit and the environment, including reputation, difficulty, and criticality.
            </Text>

            {/* Severity Ratings Table */}
            <View style={styles.table}>
                {/* Critical Row */}
                <View style={styles.tableRow}>
                    <View style={[styles.tableCellLeft, styles.criticalCell]}>
                        <Text style={styles.tableCellText}>CRITICAL</Text>
                    </View>
                    <View style={styles.tableCellRight}>
                        <Text style={styles.tableDescriptionText}>
                            Critical vulnerabilities pose a serious threat to an organization's security, and should be fixed immediately. They may provide a total compromise of the target environment, or similar critical impacts.
                        </Text>
                    </View>
                </View>

                {/* High Row */}
                <View style={styles.tableRow}>
                    <View style={[styles.tableCellLeft, styles.highCell]}>
                        <Text style={styles.tableCellText}>HIGH</Text>
                    </View>
                    <View style={styles.tableCellRight}>
                        <Text style={styles.tableDescriptionText}>
                            High risk vulnerabilities provide a serious risk to the company environment and should be corrected promptly. These issues can significantly affect the organization's security posture.
                        </Text>
                    </View>
                </View>

                {/* Medium Row */}
                <View style={styles.tableRow}>
                    <View style={[styles.tableCellLeft, styles.mediumCell]}>
                        <Text style={styles.tableCellText}>MEDIUM</Text>
                    </View>
                    <View style={styles.tableCellRight}>
                        <Text style={styles.tableDescriptionText}>
                            Medium severity vulnerabilities represent a moderate risk to the environment. They may require additional context before remediation but should be remediated after critical and high risks.
                        </Text>
                    </View>
                </View>

                {/* Low Row */}
                <View style={styles.tableRow}>
                    <View style={[styles.tableCellLeft, styles.lowCell]}>
                        <Text style={styles.tableCellText}>LOW</Text>
                    </View>
                    <View style={styles.tableCellRight}>
                        <Text style={styles.tableDescriptionText}>
                            Low severity vulnerabilities provide minimal risk to the target environment, and often theoretical in nature. Remediation of low risks is often a lower priority than other security hardening techniques.
                        </Text>
                    </View>
                </View>

                {/* Info Row */}
                <View style={styles.tableRow}>
                    <View style={[styles.tableCellLeft, styles.infoCell]}>
                        <Text style={styles.tableCellText}>INFO</Text>
                    </View>
                    <View style={styles.tableCellRight}>
                        <Text style={styles.tableDescriptionText}>
                            Info vulnerabilities have little-or-no impact to the target scope by themselves. They are included however, as they may be a risk when combined with other circumstances or technologies not currently in place. Remediation of informational items is not necessary.
                        </Text>
                    </View>
                </View>
            </View>

            {/* Conclusion Section */}
            <Text style={styles.title}>{report.vulnerableFindings.length + 4}.CONCLUSION</Text>
            <Text style={styles.descriptionContent}>
                We recommend that Infoziant should create a detailed plan for closure of the gaps found during this auditing as soon as possible. The closure plan should address the Critical vulnerabilities followed by High level vulnerabilities and Medium level findings. The closure plan should be tested before making any changes to the production environment. Some of the recommendations for the closure plan are: Test the critical and high web application vulnerabilities on a periodic basis either quarterly or half-yearly. Develop and render an awareness program to keep employees up to date on information security and its implications.
            </Text>
            <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
            <Text style={styles.pageNumber}>{report.vulnerableFindings.length + 6}</Text>
        </Page>



    </Document>
);

export default MyPDFDocument;
