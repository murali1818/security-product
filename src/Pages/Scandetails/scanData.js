const scanData = {
  "domain": "www.infoziant.com",
  "message": "Scan completed",
  "summary": {
      "Server_Software_and_Tech_Found": {
          "data": {
              "hosting": "AS132322 Good Domain Registry Private Limited",
              "server": "Apache",
              "technologies": [
                  {
                      "categories": "Web servers",
                      "name": "Apache",
                      "version": "N/A"
                  },
                  {
                      "categories": "UI frameworks",
                      "name": "animate.css",
                      "version": "N/A"
                  },
                  {
                      "categories": "Font scripts",
                      "name": "Google Font API",
                      "version": "N/A"
                  }
              ],
              "vulnerable": true
          },
          "severity": "low"
      },
      "all_client_access_policy_status": {
          "data": {
              "header_status": {
                  "Access-Control-Allow-Credentials": "No",
                  "Access-Control-Allow-Headers": "No",
                  "Access-Control-Allow-Methods": "No",
                  "Access-Control-Allow-Origin": "No",
                  "Access-Control-Expose-Headers": "No",
                  "Authorization": "No",
                  "Content-Security-Policy": "No",
                  "Set-Cookie": "No",
                  "Strict-Transport-Security": "No",
                  "WWW-Authenticate": "No"
              },
              "vulnerable": true
          },
          "severity": "info"
      },
      "clickjacking_result": {
          "data": {
              "message": "PoC file created and used for testing.",
              "poc_created": true,
              "vulnerable": true
          },
          "severity": "medium"
      },
      "csp_status": {
          "data": {
              "policy": "No",
              "status": "Missing",
              "vulnerable": true
          },
          "severity": "low"
      },
      "email_security_data": {
          "data": {
              "dmarc": {
                  "record": "No"
              },
              "spf": {
                  "record": "No"
              },
              "vulnerable": true
          },
          "severity": "low"
      },
      "header_status_data": {
          "data": {
              "headers": {
                  "Content-Security-Policy": "No",
                  "Referrer-Policy": "No",
                  "Strict-Transport-Security": "No",
                  "X-Content-Type-Options": "No",
                  "X-Frame-Options": "No"
              },
              "vulnerable": true
          },
          "severity": "low"
      },
      "robots_file_data": {
          "data": {
              "robots.txt": "Yes",
              "url": "http://www.infoziant.com/robots.txt",
              "vulnerable": false
          },
          "severity": "low"
      },
      "security_file_data": {
          "data": {
              "security.txt": "No",
              "url": "http://www.infoziant.com/.well-known/security.txt",
              "vulnerable": true
          },
          "severity": "info"
      },
      "ssl_status": {
          "data": {
              "IsSecure": "Yes",
              "Vulnerable": false
          },
          "severity": "info"
      },
      "total_subdomains": 1,
      "total_valid_subdomains": 1,
      "website_accessibility": {
          "data": {
              "Vulnerable": false,
              "accessibility": "Accessible"
          },
          "severity": "info"
      },
      "website_health": {
          "data": {
              "basic_checks": {
                  "content_length": "1 KB",
                  "is_reachable": true,
                  "response_time": "1742.69 ms",
                  "server": "Apache",
                  "status_code": 200
              },
              "dns_checks": {
                  "ip_addresses": [
                      "103.91.187.84"
                  ],
                  "num_records": "1 record(s)"
              },
              "performance": {
                  "average_page_size": "1.04 KB",
                  "average_response_time": "1002.9 ms",
                  "num_requests": "10 request(s)"
              }
          },
          "severity": "info"
      },
      'duration': "15s",
      'startTime': "2024-06-05T10:30:00Z",
      'endTime': "2024-06-05T10:30:15Z",
  }
}
  
  export default scanData;
  