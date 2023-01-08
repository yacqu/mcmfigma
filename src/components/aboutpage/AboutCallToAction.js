import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';

import './AboutCallToAction.css'


function AboutCallToAction() {
  return (
    <CallToActionWrapper>
        <CallToActionContainer>
            <CallToActionTitle>
              Come Visit MCM PHOENIX
            </CallToActionTitle>
            <CallToActionSubTitle>
              Be Apart of Our Community
            </CallToActionSubTitle>
            <CallToActionContent>
                Welcome to the MCM Phoenix Mosque website! 
                We are a community of Muslims dedicated to 
                worshipping Allah and following the 
                teachings of the Prophet Muhammad 
                (peace be upon him). Our mosque is a 
                place of peace, love, and unity where 
                people of all backgrounds 
                are welcome to learn about Islam and 
                engage with our community.
                <br/> 
                <br/> 
                We offer a 
                variety of educational and spiritual 
                programs for people of all ages, 
                including daily prayers, weekly 
                lectures, and youth group activities. 
                Please take a look around our website to 
                learn more about us and how you can get 
                involved. We hope to see you at the 
                MCM Phoenix Mosque soon!
            </CallToActionContent>
            <CallToActionButton>
                 <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className='about-action-button'
                onClick={'/contact'}
                >
                    <span className='about-action-button-text'>
                        Visit Us
                    </span>
                
                </motion.button>
            </CallToActionButton>
        </CallToActionContainer>
    </CallToActionWrapper>
  )
}

export default AboutCallToAction;

const CallToActionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 150px 10px 20px 10px;
`;

const CallToActionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 60%;
`;

const CallToActionTitle = styled.h1`
padding: 0px 0px 0px 0px;
margin-top: 0;

font-family: 'Libre Baskerville', serif;
opacity: 0.9;
color: #4d660f;
text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
font-size: 34px;
`;

const CallToActionSubTitle = styled.h2`
padding: 1px 1px 1px 15px;
margin-top: 0;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

font-family: 'Libre Baskerville', serif;
opacity: 0.9;
color: #4d660f;
text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
font-weight: 400;
font-size: 24px;
`;

const CallToActionContent= styled.p`
padding: 1px 100px 1px 100px;
text-align: left;

font-family: 'Roboto', sans-serif;
opacity: 0.7;
color: black;
text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
line-height: 1.8;
letter-spacing: 0.6px;
word-spacing: 0.7px;
font-size: 18px;
`;

const CallToActionButton = styled.div`
padding: 30px 1px 10px 1px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
`;