/* eslint-disable no-sequences */
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import calibriItalic from '../../fonts/calibri-font-family/calibri-italic.ttf';
import calibriBold from '../../fonts/calibri-font-family/calibri-bold.ttf';
import calibriRegular from '../../fonts/calibri-font-family/calibri-regular.ttf';
import arialBlack from '../../fonts/arial-mt-cufonfonts/arialmt.ttf'
import imageSrc from './image.png';


Font.register({
    family: 'ArialBlack',
    src: arialBlack,
});

Font.register({
    family: 'Calibri',
    fonts: [
        {
            src: calibriItalic,
            fontStyle: 'italic',
        },
        {
            src: calibriBold,
            fontWeight: 'bold',
        },
        {
            src: calibriRegular,
            fontWeight: 'normal'
        }
    ],
});
// PDF styles with colors and spacing

const styles = StyleSheet.create({
    firstpage: {
        flexDirection: 'column',
        alignItems: 'left',
        backgroundColor: '#FFFFFF',
        padding: 70,
    },
    firstlogo: {
        width: 400,
        height: 100,
        marginBottom: 80,
    },

    firstsubtitle: {
        fontSize: 48,
        fontFamily: 'Calibri',
        fontWeight: 'bold',
        color: '#002D62',
    },
    firstfooter: {
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        fontSize: 23,
    },

    firstfooterdate: {
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        fontSize: 16,
    },
    titleRestr: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'left',
        fontFamily: 'ArialBlack',
        color: '#073d57',
        fontWeight: 'normal',
        borderBottom: '2px solid gray',
        paddingVertical: 10,

    },
    subtitleRestr: {
        fontSize: 16,
        fontFamily: 'ArialBlack',
        fontWeight: 'normal',
        textAlign: 'left',
        color: '#073d57',

    },
    disclaimerText: {
        fontSize: 11,
        fontFamily: 'ArialBlack',
        fontWeight: 'normal',
        marginBottom: 10,
        color: 'black',
        paddingLeft: 10,
    },
    descriptionContent: {
        fontSize: 13, // Increase font size for better readability
        marginBottom: 5, // Increase bottom margin for spacing
        color: 'black',
        lineHeight: 1.4, // Increase line height for better readability
        fontFamily: 'Calibri',
        textAlign: 'justify',
        //marginTop: 10,
        //letterSpacing: 0.5, // Add space between letters for clarity
    },

    page: {
        padding: 60,
        backgroundColor: '#ffffff',
        textAlign: 'justify',
        letterSpacing: 0.3,
    },

    contentContainer: {
        flex: 1,
    },

    footer: {
        position: 'absolute',
        fontFamily: 'Calibri',
        fontWeight: 'normal',
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
        fontSize: 20, // Increase font size for better readability
        marginBottom: 10, // Increase bottom margin for spacing
        textAlign: 'left',
        fontFamily: 'ArialBlack',
        color: '#073d57',
        letterSpacing: 0.3, // Add letter spacing for clarity
    },

    descriptionTitle: {
        fontSize: 16, // Increase font size for section titles
        fontFamily: 'ArialBlack',
        color: '#073d57',
        marginTop: 10, // Add top margin for better separation
        marginBottom: 10, // Add bottom margin for better separation
    },



    severity: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 5,
        paddingVertical: 10, // Increase padding for better spacing
        paddingHorizontal: 12, // Increase padding for better spacing
        border: '0.8px solid black', // Add border for better visibility
        color: '#fff',
        width: '100%',
        marginBottom: 15, // Increase bottom margin for spacing
    },

    pageNumber: {
        position: 'absolute',
        bottom: 30,
        right: 60,
        fontSize: 10,
        color: 'gray',
    },

    dataItem: {
        fontSize: 12,
        color: '#495057',
        lineHeight: 1.5,
        letterSpacing: 0.5,
    },

    dataItemTitle: {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        color: '#007bff',
        letterSpacing: 0.5, // Add letter spacing for clarity
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

    sectionText: {
        fontSize: 12,
        color: '#333',
        lineHeight: 1.5,
    },


    table: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
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
        fontSize: 14,
        lineHeight: 1.2,
        padding: 5,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        letterSpacing: 0.2,
        color: 'black',
    },
    criticalCell: {
        backgroundColor: '#d30501',
    },
    highCell: {
        backgroundColor: '#f9731c',
    },
    mediumCell: {
        backgroundColor: '#f5c816',
    },
    lowCell: {
        backgroundColor: '#03ad50',
    },
    infoCell: {
        backgroundColor: '#006ec0',
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
    },
    tables: {
        borderWidth: 1,
        borderColor: '#4a235a',
    },
    tableRows: {
        flexDirection: 'row',
    },
    tableHeaderCell: {
        flex: 1,
        backgroundColor: '#073d57',
        padding: 10,
    },
    tableHeaderText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Calibri',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableCell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    tableText: {
        fontSize: 12,
        fontFamily: 'Calibri',
        fontWeight: 'normal',
        textAlign: 'center',
        color: 'black',
    },
    linkText: {
        color: '#1a0dab',
        textDecorationLine: 'underline',
    },
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

const severityGroups = (findings) => {
    //console.log(findings);

    return findings.reduce(
        (acc, finding) => {
            const severity = finding.severity.toLowerCase(); // Normalize severity to lowercase
            if (severity === 'info') acc.info.push(finding);
            if (severity === 'low') acc.low.push(finding);
            if (severity === 'medium') acc.medium.push(finding);
            if (severity === 'high') acc.high.push(finding);
            if (severity === 'critical') acc.critical.push(finding);
            return acc;
        },
        { info: [], low: [], medium: [], high: [], critical: [] }
    );
};


// PDF Document Component
const MyPDFDocument = ({ report }) => {
    // console.log(report);
    const groupedSeverity = severityGroups(report.vulnerableFindings);
    return (
        <Document>
            <Page style={styles.firstpage}>
                <Image
                    style={styles.firstlogo}
                    src='./image.png' // Replace with the correct path to your logo file
                />
                <View style={{ marginBottom: '20' }} >
                    <Text style={styles.firstsubtitle}>Web Application</Text>
                    <Text style={styles.firstsubtitle}>Penetration</Text>
                    <Text style={styles.firstsubtitle}>Testing Report</Text>
                </View>
                <Text style={styles.firstfooter}>Infoziant Internal</Text>
                <Text style={styles.firstfooterdate}>Date: {formattedDate}</Text>
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
                <Text style={[styles.subtitleRestr, { marginBottom: 20 }]}>Table of Content</Text>
                <Text style={styles.disclaimerText}>RESTRICTED USE</Text>
                <Text style={styles.disclaimerText}>DISCLAIMERS</Text>
                <Text style={styles.disclaimerText}>1. EXECUTIVE SUMMARY</Text>
                <Text style={styles.disclaimerText}>2. SUMMARY OF FINDING</Text>
                {report.vulnerableFindings.map((finding, index) => (
                    <Text key={index} style={styles.disclaimerText}>
                        {index + 3}. {formatTitle(finding.title)}
                    </Text>
                ))}
                <Text style={styles.disclaimerText}>{report.vulnerableFindings.length + 3}. METHODOLOGY</Text>
                <Text style={styles.disclaimerText}>{report.vulnerableFindings.length + 4}. CONCLUSION</Text>
                <Text style={styles.footer}>Confidential & Proprietary | Infoziant IT Solutions Inc</Text>
                <Text style={styles.pageNumber}>3</Text>
            </Page>

            {/* Fourth page: EXECUTIVE SUMMARY and SUMMARY OF FINDINGS */}
            <Page style={styles.page}>
                <Text style={styles.title}>1. EXECUTIVE SUMMARY</Text>
                <Text style={[styles.descriptionContent, { marginBottom: 20 }]}>
                    Infoziant security team performed a Web Application Penetration Test for Infoziant Internal. This assessment utilized both commercial and proprietary tools for the initial mapping and reconnaissance the application, as well as custom tools and scripts for unique vulnerabilities. During the manual analysis, assessors attempted to leverage discovered vulnerabilities and test for key security flaws, including those listed in the OWASP Top 10 Vulnerabilities list. The following vulnerabilities were determined to be of highest risk, based on several factors including asset criticality, threat likelihood, and vulnerability severity.
                </Text>

                <Text style={styles.subtitleRestr}>THE SCOPE OF THE SECURITY ASSESSMENT</Text>
                <Text style={[styles.descriptionContent, { marginBottom: 10, marginTop: 5 }]}>
                    The scope of the security assessment is to conduct Grey box security test on Application on below URL.
                </Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableHeaderCell}>
                            <Text style={styles.tableHeaderText}>Type of Assessment</Text>
                        </View>
                        <View style={styles.tableHeaderCell}>
                            <Text style={styles.tableHeaderText}>Type of Application</Text>
                        </View>
                        <View style={styles.tableHeaderCell}>
                            <Text style={styles.tableHeaderText}>Application URL</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Text style={styles.tableText}>Grey Box Security Assessment</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.tableText}>Dynamic Application</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={[styles.tableText, styles.linkText]}>{report.domain}</Text>
                        </View>
                    </View>
                </View>

                <Text style={[styles.title, { marginTop: 20 }]}>2. SUMMARY OF FINDINGS</Text>
                <Text style={styles.descriptionContent}>
                    Gray Box security assessment allowed to be finding various Critical, High, Low, Medium and Informational vulnerabilities.
                </Text>
                <View style={styles.table}>
                    {/* Critical Row */}
                    {groupedSeverity.critical.length > 0 && (
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellLeft, styles.criticalCell]}>
                                <Text style={styles.tableCellText}>CRITICAL</Text>
                            </View>
                            <View style={styles.tableCellRight}>
                                {groupedSeverity.critical.map((finding, index) => (
                                    <View>
                                    <Text key={index} style={styles.tableDescriptionText}>
                                        {finding.title
                                            .replace(/_/g, ' ')
                                            .replace(/\b\w/g, char => char.toUpperCase())}
                                    </Text>
                                    </View>
                                ))}
                            </View>

                        </View>
                    )}
                    {groupedSeverity.high.length > 0 && (
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellLeft, styles.highCell]}>
                                <Text style={styles.tableCellText}>HIGH</Text>
                            </View>
                            <View style={styles.tableCellRight}>
                                <Text style={styles.tableDescriptionText}>
                                    {groupedSeverity.high.map(finding => finding.title.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())).join(', ')}
                                </Text>
                            </View>
                        </View>
                    )}

                    {groupedSeverity.medium.length > 0 && (
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellLeft, styles.mediumCell]}>
                                <Text style={styles.tableCellText}>MEDIUM</Text>
                            </View>
                            <View style={styles.tableCellRight}>
                                <Text style={styles.tableDescriptionText}>
                                    {groupedSeverity.medium.map(finding => finding.title.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())).join(', ')}
                                </Text>
                            </View>
                        </View>
                    )}

                    {groupedSeverity.low.length > 0 && (
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellLeft, styles.lowCell]}>
                                <Text style={styles.tableCellText}>LOW</Text>
                            </View>
                            <View style={styles.tableCellRight}>
                                <Text style={styles.tableDescriptionText}>
                                    {groupedSeverity.low.map(finding => finding.title.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())).join(', ')}
                                </Text>
                            </View>
                        </View>
                    )}

                    {groupedSeverity.info.length > 0 && (
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCellLeft, styles.infoCell]}>
                                <Text style={styles.tableCellText}>INFO</Text>
                            </View>
                            <View style={styles.tableCellRight}>
                                <Text style={styles.tableDescriptionText}>
                                    {groupedSeverity.info.map(finding => finding.title.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())).join(', ')}
                                </Text>
                            </View>
                        </View>
                    )}


                </View>

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
                                finding.severity.toLowerCase() === 'critical' && styles.criticalCellCell,
                                finding.severity.toLowerCase() === 'high' && styles.highCell,
                                finding.severity.toLowerCase() === 'info' && styles.infoCell,
                                finding.severity.toLowerCase() === 'medium' && styles.mediumCell,
                                finding.severity.toLowerCase() === 'low' && styles.lowCell,

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
};

export default MyPDFDocument;
