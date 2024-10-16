import React, { useState, useEffect } from 'react';
import './WebsiteScanner.css'

function WebsiteScanner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : prevProgress));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="web-scan-container">
      <h1>REPORT</h1>
      <h2>Website Scanner (Light)</h2>
      <div className="web-scan-target">
        <p>http://testphp.vulnweb.com/</p>
        <small>Target added due to a redirect from http://testphp.vulnweb.com/</small>
      </div>
      <div className="web-scan-progress-bar">
        <div className="web-scan-progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>Scanning target...</p>
      <div className="web-scan-info">
        <h3>💡 Did you know?</h3>
        <p>
          It takes between 1 and 15 minutes to complete a scan with our tools, depending on the complexity of the asset and the scanning depth. Please bear with us for a bit! You can still browse around in the meantime and we’ll notify you when your scan is complete.
        </p>
      </div>
    </div>
  );
}

export default WebsiteScanner;
