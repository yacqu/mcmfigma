import React from 'react'
import styled from "styled-components";
import AboutCallToAction from '../aboutpage/AboutCallToAction';
import LargeCardItem from '../cards/large_cards/LargeCardItem';

import NavBar from '../floating/navbar/NavBar'
import { Device } from '../responsive/Device.js'

import image1 from '../../assets/images/img-3d-mosque-white.png';
import image2 from '../../assets/images/img-3d-mosque-green.png';
import PrayerBanner from '../prayertimes/PrayerBanner';


function About() {

  return (
    <>
      <PageWrapper>
        <HeroSection>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
          <HeroSectionTitleContainer>
            <HeroSectionTitle>
                ABOUT MCM PHOENIX
            </HeroSectionTitle>
            <HeroSectionSubTitle>
                Serving Phoenix Since 1987
            </HeroSectionSubTitle>
          </HeroSectionTitleContainer>
        </HeroSection>
        < PrayerBanner />
        <AboutCallToAction />
        <CardSectionWrapper>
          <LargeCardItem 
          title={AboutCardText.title} 
          image={AboutCardText.image}
          subtitle={AboutCardText.subtitle}
          text={AboutCardText.text}
          cardHeight={AboutCardText.cardHeight} />

          <LargeCardItem 
          title={MissionCardText.title} 
          image={MissionCardText.image}
          subtitle={MissionCardText.subtitle}
          text={MissionCardText.text}
          cardHeight={MissionCardText.cardHeight}/>

        </CardSectionWrapper>
      </PageWrapper>
    </>
  )
}

export default About

const AboutCardText = {
  title: `ABOUT MCM PHOENIX`,
  image: image1,
  subtitle: `who we are`,
  cardHeight: `100%`,
  text: 
  `Welcome to the Muslim
   Community Mosque of Phoenix (MCM PHOENIX)! 
   We are a vibrant and dynamic community of believers, 
   dedicated to fostering spiritual growth and 
   understanding among the people of Phoenix. 
   Located in the heart of the city, our mosque 
   serves as a spiritual home for Muslims of all 
   backgrounds and ages. Our facilities include a 
   spacious prayer hall, classrooms for religious 
   education, and a community hall for events and 
   gatherings. We strive to be an inclusive and 
   welcoming mosque for all, and we welcome visitors 
   of all faiths to learn more about Islam and our 
   community. Our mission is to serve the spiritual, 
   educational, and social needs of the muslim 
   community of Phoenix, to promote Islamic values 
   and contribute to the wellbeing of the society at 
   large.`
}

const MissionCardText = {
  title: `Mission Statement`,
  image: image2,
  subtitle: `who we are`,
  cardHeight: `100%`,
  text: 
    `Our mission at the Muslim Community Mosque of 
    Phoenix (MCM PHOENIX) is to serve as a spiritual, 
    educational and social hub for the Muslim community 
    in Phoenix and surrounding areas. We strive to 
    promote Islamic values, deepen the religious 
    knowledge of our congregants, and to contribute 
    to the well-being of the society at large. 
    We aim to be a welcoming and inclusive mosque 
    for all, and to provide a safe and supportive 
    environment for the spiritual, educational and 
    social needs of the community. We are committed 
    to fostering understanding and harmony among all 
    people, and to being a positive force in the 
    community`
}

const PageWrapper = styled.div`
width: 100%; 
display: flex;
flex-direction: column;
`;
const HeroSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-image: url("/images/herosection/img-hero-about.jpg");
height: 700px;  
background-position: 50% 80%;
background-repeat: no-repeat;
background-size: cover;

position: relative;
isolation: isolate;
&:after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
`;
const NavBarWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
  @media ${Device.laptop} {
    width: 100%;
  }
  @media ${Device.laptopL} {
    max-width: 60%;
    width: 100%;
  }
  @media ${Device.desktop} {
      max-width: 60%;
      width: 100%;
  }
`;
const HeroSectionTitleContainer = styled.div`
width: 100%;
max-height: 700px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
@media ${Device.laptop} {
  width: 100%;
  max-height: 700px;
}
@media ${Device.laptopL} {
  max-width: 60%;
  width: 100%;
  max-height: 700px;
}
@media ${Device.desktop} {
    max-width: 60%;
    width: 100%;
  max-height: 700px;
}
@media (max-width: 1560px) {
  display: none;
  max-height: 700px;
}
`;
const HeroSectionTitle = styled.h1`
max-height: 700px;
padding: 12vh 2px 1px 2px;
font-size: 72px;
width: 60%;
margin-bottom: 0;
font-family: 'Libre Baskerville', serif;
opacity: 0.8;
color: #4d660f;
text-shadow: 0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
`;
const HeroSectionSubTitle = styled.h2`
font-size: 22px;
padding: 1px 1px 1px 10px;
width: 60%;
font-family: 'Libre Baskerville', serif;
opacity: 0.7;
color: #4d660f;
text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
`;
const CardSectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 150px 10px 20px 10px;
`;

