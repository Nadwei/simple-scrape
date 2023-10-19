from selenium import webdriver
import re
from flask import Flask, request, jsonify

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/scrape-emails', methods=["POST"])
def scrape_emails():
    url = request.json.get("url")

    try:
        # Create a new instance of the Firefox driver
        driver = webdriver.Firefox()

        # Use the driver to visit a website
        driver.get(url)

        html = driver.page_source

        # Use regular expressions to find all email addresses in the HTML
        emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', html)

        # Print all email addresses found on the page
        for email in emails:
            print(email)

        # Close the driver
        driver.quit()

        # Return extracted email addresses as JSON response
        return jsonify(emails), 200

    except Exception as e:
        return str(e), 500

if __name__ == "__main__":
    app.run(debug=True)
