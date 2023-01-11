import React from 'react'
import styled from 'styled-components'

import './HelpUs.scss'


function HelpUs() {
  return (
    <HelpUsWrapper>
        <div className="help-us-container">
            <div className="help-us-content-container">
                <div className="help-us-title">
                    <h1>Help MCM PHOENIX</h1>
                    <h2>we need your help to build our new masjid</h2>
                </div>
                <div className="help-us-text">
                    <p>
                        We at MCM PHOENIX are excited to announce 
                        that we are currently in the process of 
                        building a new mosque to serve our 
                        community. However, in order to complete 
                        this project, we need your help. We are 
                        humbly asking for donations to help fund 
                        the construction of the mosque. Any 
                        amount, big or small, will greatly help 
                        us in achieving our goal.
                    </p>
                    <p>
                        The construction of this mosque not only 
                        provides a place of worship for our 
                        community, but also serves as a center 
                        for education, socialization and cultural 
                        engagement. It's also an opportunity for 
                        us to come together and invest in the 
                        future of our community and ensure that 
                        it is able to flourish for many years to 
                        come.
                    </p>
                    <p>
                        We understand that times are tough for 
                        everyone, but any support you can offer 
                        will make a huge difference in helping us 
                        reach our goal. Please consider donating 
                        and sharing this information with your 
                        friends and family. Together, we can make 
                        the new MCM PHOENIX mosque a reality.
                    </p>
                    <p>
                        Thank you for your consideration and we 
                        look forward to your support.
                    </p>
                </div>
                <div className="help-us-button">
                    <button>
                        <a href="/donate">
                            Donate Now
                        </a>
                    </button>
                </div>
                
            </div>
        </div>

    </HelpUsWrapper>
  )
}

export default HelpUs

const HelpUsWrapper = styled.div`
padding: 200px 10px 20px 10px;
display: flex;
justify-content: center;
align-items: center;
`;