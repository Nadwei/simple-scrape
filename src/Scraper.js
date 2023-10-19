import React, { useState } from 'react';
import axios from 'axios-https-proxy-fix';

export default function Scraper() {
  const [url, setUrl] = useState('');
  const [emails, setEmails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:5000/scrape-emails', { url });
      setEmails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="scraper">
      <div className="cta-wrapper">
         <h3 className="cta">Get Email Adresses from URL:</h3>
            <form id="url-form" onSubmit={handleSubmit}>
                <input
                name="user-input"
                id="user-input"
                type="text"
                placeholder="Enter a URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                />
                <button class="btn" type="submit">Submit</button>
            </form>
      </div>

      <div id="rusults">
        
        <div className="results_wrapper">
        <h3 className="results_title">Results:</h3>
          <ul>
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


