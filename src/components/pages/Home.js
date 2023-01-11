import React from 'react'
import styled from "styled-components";
import AboutCallToAction from '../aboutpage/AboutCallToAction';

import NavBar from '../floating/navbar/NavBar'
import NewsCard from '../newscards/NewsCard';
import PrayerBanner from '../prayertimes/PrayerBanner';
import { Device } from '../responsive/Device.js'

import image1 from '../../assets/images/img-3d-calendar.png';
import image2 from '../../assets/images/img-3d-calendar.png';
import image3 from '../../assets/images/img-3d-calendar.png';
import HelpUs from '../homepage/HelpUs';

function Home() {
  return (
    <>
      <PageWrapper>
        <HeroSection>
          <NavBarWrapper>
            <NavBar />
          </NavBarWrapper>
          <HeroSectionTitleContainer>
            <HeroSectionTitle>
                Welcome To MCM PHOENIX
            </HeroSectionTitle>
            <HeroSectionSubTitle>
                Serving Phoenix Since 1987
            </HeroSectionSubTitle>
          </HeroSectionTitleContainer>
        </HeroSection>

        <PrayerBanner />

        <AboutCallToAction />

        <NewsCardsWrapper>
          <NewsCardsTitle>
            News & Updates
          </NewsCardsTitle>
          <NewsCards>
            {Object.keys(cards).map((key, value)=> (
                <NewsCard key={key} image={cards[key].image} 
                  title={cards[key].title} 
                  text={cards[key].text} link={cards[key].link} />))}
          </NewsCards>
        </NewsCardsWrapper>
        <HelpUs />

      </PageWrapper>
    
    </>
  )
}

export default Home


const cards = {
  card1: {
    link:`/construction`,
    image: image1,
    title: `New Masjid Construction`,
    text: `The MCM Phoenix mosque is currently undergoing 
      construction to expand and modernize its facilities. 
      The new mosque will feature a larger prayer hall, 
      classrooms for religious education, and community 
      gathering spaces. Join the community and Donate`,
  },
  card2: {
    link:`/services`,
    image: image2,
    title: `Ramadan Training`,
    text: `MCM Phoenix mosque is offering Ramadan training 
      sessions to help members of the community prepare for 
      the holy month. These sessions will include teachings on 
      the spiritual significance of Ramadan, as well as practical 
      guidance on fasting and other observances.`,
  },
  card3: {
    link:`/services`,
    image: image3,
    title: `Hajj Program`,
    text: `MCM Phoenix mosque is organizing a Hajj program for 
      members of the community who wish to embark on the pilgrimage 
      to Mecca. The program will include guidance on the 
      preparations and rituals of the Hajj, as well as assistance 
      with the logistics of the trip`,
  },
}




const PageWrapper = styled.div`
width: 100%;
height: 100vh;
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
min-height: 700px; 
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
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
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
@media (max-width: 1560px) {
  display: none;
}
`;
const HeroSectionTitle = styled.h1`
padding: 12vh 2px 1px 2px;
font-size: 7vh;
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
const NewsCardsWrapper = styled.div`
padding: 80px 0px 10px 0px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const NewsCardsTitle = styled.h1`
text-align: center;
font-family: "El Messiri", Sans-serif;
color: #4d660f;
`;

const NewsCards = styled.div`
padding: 10px 0px 10px 0px;
width: 60%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;