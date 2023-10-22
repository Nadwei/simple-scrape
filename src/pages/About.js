import React from "react"

export default function About(){
    return(
        <div className="about">
            <h1 className="about-title">About</h1>
            <p className="about-body">
                Welcome to simple scrape, the simple email scraper. <br/>
                <br/>Powered by:<br/><br/>

                 ~ Selenium ~ Python ~ React ~ Flask ~ HTML ~ CSS<br/><br/>
                 
                 1. Enter a target URL on the React frontend<br/><br/>
                 2. Flask enables it to be passed to Python and Selenium
                    on the backend<br/><br/>
                 3. Python and Selenium will extract any email
                    addresses at target URL<br/><br/>
                 4. Flask enables the extracted emails to be passed 
                    back to the React frontend to be displayed.<br/><br/>

            </p>
        </div>
    )
}