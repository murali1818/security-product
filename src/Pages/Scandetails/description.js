
const description = {
  "http_debug_methods_enabled": {
    vulnerabilitiesdescription:
      "Debug methods (e.g., TRACE, OPTIONS) enabled on the server can reveal sensitive information and facilitate attacks such as cross-site tracing. This exposure allows attackers to understand server behavior, revealing debugging details that should remain confidential.",
    riskDescription:
      "Attackers can exploit debug methods to gather information about your server's configuration, which may include sensitive details like file paths or session tokens. This information can be leveraged for reconnaissance and launching further attacks, such as exploiting misconfigurations.",
    recommendation:
      "Disable HTTP debug methods (TRACE, OPTIONS) on the server to minimize potential vulnerabilities. Ensure that your server configuration is reviewed regularly to prevent accidental enabling of these methods, and maintain logs to monitor any unauthorized attempts to invoke these methods.",
  },
  "http_methods_enabled": {
    vulnerabilitiesdescription:
      "Allowing unnecessary HTTP methods on your server increases the attack surface. Attackers can use methods such as PUT or DELETE to manipulate or delete resources, causing potential disruptions or unauthorized access to server data.",
    riskDescription:
      "Enabling unused HTTP methods like PUT or DELETE can be exploited by attackers to overwrite, delete, or manipulate critical data. For example, a misconfigured PUT method could allow an attacker to upload malicious files, leading to data breaches or server compromise.",
    recommendation:
      "Restrict HTTP methods to only those required by your application (e.g., GET and POST). Conduct a periodic audit of server configurations to ensure no unnecessary methods are enabled. Additionally, implement an application firewall to block unauthorized method requests.",
  },
  "Server_Software_and_Tech_Found": {
    vulnerabilitiesdescription:
      "The server software or technology stack information is exposed, potentially aiding attackers in identifying vulnerabilities specific to the versions in use. Detailed exposure of technologies like web servers, frameworks, and libraries can assist in targeted exploitation.",
    riskDescription:
      "Exposing server details can give attackers insights into potential vulnerabilities in the software version being used. For instance, if an outdated Apache version is revealed, attackers might use known exploits to compromise the system.",
    recommendation:
      "Mask or obfuscate server software information in HTTP headers by configuring the server to suppress version details. Use tools like ModSecurity or server-side configurations (e.g., ServerTokens directive in Apache) to limit exposed information. Regularly update and patch server software to minimize risks from known vulnerabilities.",
  },
  "all_client_access_policy_status": {
    vulnerabilitiesdescription:
      "The server's client access policy might not be properly configured, leading to potential data exposure. A misconfigured policy can result in unauthorized domains accessing sensitive information, exposing the system to data breaches.",
    riskDescription:
      "Misconfigured client access policies could allow unauthorized access to sensitive data. Attackers might exploit this to perform actions like stealing credentials or sensitive files. For instance, an overly permissive CORS policy could enable cross-origin attacks.",
    recommendation:
      "Configure client access policies to restrict access to authorized domains only. Validate CORS configurations to ensure that only trusted origins are allowed. Use tools to simulate attacks and test the robustness of your access policies regularly.",
  },
  "clickjacking_result": {
    vulnerabilitiesdescription:
      "The website may be vulnerable to clickjacking attacks, where malicious websites trick users into clicking hidden elements, such as buttons or links, without their knowledge. This can result in unauthorized actions being performed on the legitimate site.",
    riskDescription:
      "Users may unknowingly perform harmful actions, such as enabling unauthorized transactions or revealing sensitive data. For example, clickjacking could be used to trick users into transferring funds or disclosing login credentials.",
    recommendation:
      "Implement the X-Frame-Options header or Content Security Policy (CSP) frame-ancestors directive to prevent framing. Regularly test your website for vulnerabilities to clickjacking and educate users about recognizing potential threats.",
  },
  "csp_status": {
    vulnerabilitiesdescription:
      "Content Security Policy (CSP) is missing, leaving the site vulnerable to various attacks such as XSS. Without CSP, malicious scripts from third-party sources can execute in the context of your site, leading to potential data theft or site defacement.",
    riskDescription:
      "Without CSP, attackers can inject malicious scripts into the website, compromising user data, redirecting traffic to malicious sites, or stealing sensitive information like session cookies.",
    recommendation:
      "Implement a strong Content Security Policy (CSP) to prevent unauthorized scripts from running on the site. Regularly review and update the CSP to account for legitimate third-party scripts and reduce the risk of false positives.",
  },
  "email_security_data": {
    vulnerabilitiesdescription:
      "Missing email security records (SPF, DMARC) increases the risk of email spoofing and phishing attacks. Attackers can send emails appearing to come from your domain, deceiving users and potentially compromising sensitive information.",
    riskDescription:
      "Attackers could send fraudulent emails appearing to come from your domain, leading to loss of reputation and possible financial damages. For example, phishing emails might trick users into providing passwords or credit card details.",
    recommendation:
      "Set up and enforce SPF and DMARC records to enhance email security. Monitor email traffic for signs of spoofing and educate users to recognize phishing attempts.",
  },
  "header_status_data": {
    vulnerabilitiesdescription:
      "Critical security headers are missing, exposing the application to a range of attacks (e.g., XSS, clickjacking). Without these headers, attackers can inject malicious scripts or manipulate the user interface to deceive users.",
    riskDescription:
      "Missing security headers leave the application vulnerable to common exploits, potentially leading to unauthorized access, data theft, or compromised user sessions.",
    recommendation:
      "Add security headers such as Content-Security-Policy, X-Content-Type-Options, and Strict-Transport-Security to the server configuration. Regularly audit headers for completeness and effectiveness.",
  },
  "security_file_data": {
    vulnerabilitiesdescription:
      "Missing security.txt file means there's no clear way to report security vulnerabilities. This can delay response times and increase exposure to known issues.",
    riskDescription:
      "Security issues might go unreported, leaving the system exposed for longer and increasing the likelihood of exploitation by malicious actors.",
    recommendation:
      "Create and host a security.txt file in the standard location to provide a contact point for reporting vulnerabilities. Regularly review reports and act promptly to address any identified issues.",
  },
  "ssl_status": {
    vulnerabilitiesdescription:
      "SSL is misconfigured or uses weak encryption protocols. Weak ciphers or outdated protocols can compromise the secure transmission of sensitive data.",
    riskDescription:
      "Weak SSL configurations can allow attackers to intercept sensitive data, such as login credentials or financial information, by exploiting vulnerabilities in the encryption protocol.",
    recommendation:
      "Ensure SSL/TLS configurations use strong protocols and ciphers, and regularly update certificates. Use tools like SSL Labs to analyze and improve your SSL setup.",
  },
  "website_accessibility": {
    vulnerabilitiesdescription:
      "The website has accessibility vulnerabilities that may impact user experience and security. Issues like missing alt text or poor keyboard navigation can make the site unusable for certain groups.",
    riskDescription:
      "Poor accessibility can lead to usability issues and security risks for certain user groups. For example, visually impaired users might rely on screen readers that cannot interpret your site correctly.",
    recommendation:
      "Conduct an accessibility audit and implement fixes to ensure the website complies with accessibility standards. Use tools like WAVE to identify and rectify accessibility issues.",
  },
  "website_health": {
    vulnerabilitiesdescription:
      "Website health issues such as slow response times or high error rates detected. These issues can reduce user satisfaction and lead to vulnerabilities if not addressed.",
    riskDescription:
      "Performance issues can degrade user experience and potentially expose vulnerabilities, such as allowing attackers to exploit slow-loading scripts or overburdening the server with repeated requests.",
    recommendation:
      "Optimize website performance and address any health-related issues identified in monitoring. Regularly review site analytics to detect and resolve performance bottlenecks.",
  },
  "headers-Content-Security-Policy": {
    vulnerabilitiesdescription:
      "The Content-Security-Policy header is missing, leaving the site vulnerable to XSS and data injection attacks. Attackers can exploit this to execute malicious scripts or manipulate content. This header acts as a safeguard, ensuring only approved scripts and resources are loaded on the page.",
    riskDescription:
      "Without this header, attackers can inject and execute unauthorized scripts, potentially compromising user data and site integrity. This can lead to the theft of sensitive information, session hijacking, or website defacement.",
    recommendation:
      "Implement the Content-Security-Policy header to specify approved sources for content and scripts, reducing the risk of XSS attacks. Regularly review and update the policy to accommodate new content sources securely. Test your configurations in development to avoid accidental blocking of legitimate resources.",
  },
  "headers-Referrer-Policy": {
    vulnerabilitiesdescription:
      "The Referrer-Policy header is missing, potentially exposing sensitive referrer information to unauthorized external domains. Referrer data can reveal internal URLs, query parameters, and sensitive data passed through links.",
    riskDescription:
      "Without this header, sensitive referrer information might be exposed, which could lead to phishing attacks or data leakage. Attackers can use this information to map your site's structure or perform targeted attacks on exposed endpoints.",
    recommendation:
      "Add the Referrer-Policy header to control the amount of information shared in HTTP referrer headers. Use a restrictive policy like 'no-referrer' or 'strict-origin-when-cross-origin' for better security. Periodically audit your website links to ensure compliance with privacy best practices.",
  },
  "headers-Strict-Transport-Security": {
    vulnerabilitiesdescription:
      "The Strict-Transport-Security header is missing, making the website susceptible to SSL stripping attacks. This header ensures that browsers only interact with the site over secure HTTPS connections, even if users attempt to access via HTTP.",
    riskDescription:
      "Without this header, users might unknowingly interact with the site over insecure HTTP, leading to data interception or manipulation by attackers. Attackers can exploit this to steal credentials or inject malicious content during transit.",
    recommendation:
      "Implement the Strict-Transport-Security header with a long max-age value and includeSubDomains to enforce secure connections across the domain and subdomains. Regularly verify your SSL certificates to ensure they are valid and properly configured.",
  },
  "headers-X-Content-Type-Options": {
    vulnerabilitiesdescription:
      "The X-Content-Type-Options header is missing, allowing browsers to interpret files as a different MIME type than declared. This can enable attacks like MIME sniffing, where attackers force browsers to execute malicious content.",
    riskDescription:
      "Without this header, attackers could exploit MIME type mismatches to inject and execute malicious content. For instance, a file declared as an image might be interpreted as a script, leading to unauthorized code execution.",
    recommendation:
      "Add the X-Content-Type-Options header with the value 'nosniff' to prevent browsers from interpreting files with incorrect MIME types. Test your application thoroughly to ensure all files have correct MIME types specified in the server response.",
  },
  "headers-X-Frame-Options": {
    vulnerabilitiesdescription:
      "The X-Frame-Options header is missing, leaving the website vulnerable to clickjacking attacks. Clickjacking can trick users into interacting with elements they cannot see, such as buttons or links embedded in a malicious iframe.",
    riskDescription:
      "Without this header, attackers could manipulate user interactions on the site, leading to unauthorized actions like form submissions, account modifications, or even financial transactions. This can severely impact user trust and safety.",
    recommendation:
      "Implement the X-Frame-Options header with a value such as 'SAMEORIGIN' or 'DENY' to prevent your site from being framed by malicious pages. Combine this with a robust Content Security Policy (CSP) to offer additional protection against framing attacks.",
  },
  "robots_file_data": {
    vulnerabilitiesdescription:
      "The robots.txt file is improperly configured, potentially exposing sensitive URLs or directories to unauthorized access. This file is often used to instruct search engines on which parts of the site to index but can inadvertently reveal hidden paths.",
    riskDescription:
      "Improperly configured robots.txt files can provide attackers with a roadmap to sensitive parts of your website, such as admin panels, backups, or private resources.",
    recommendation:
      "Review and update the robots.txt file to exclude sensitive directories or files from being exposed. Ensure that critical paths are protected by authentication and not merely hidden through robots.txt. Regularly monitor the file to ensure compliance with your security policies.",
  },
  "cookie_results": {
    vulnerabilitiesdescription:
      "The cookies configuration is insecure. Missing secure flags, loose domain settings, or improper HTTP-only configurations can lead to data interception or unauthorized access.",
    riskDescription:
      "Cookies without the secure flag can be transmitted over unsecured channels, exposing sensitive session data to interception. Similarly, loosely configured domains can make cookies accessible across unintended scopes, leading to potential data breaches.",
    recommendation:
      "Ensure cookies have the 'Secure' flag to enforce transmission over HTTPS and the 'HttpOnly' flag to restrict access from JavaScript. Additionally, set precise domain and path attributes to limit cookie scope and reduce the risk of misuse. Regularly audit cookie configurations for compliance with best practices.",
  }
};

export default description;