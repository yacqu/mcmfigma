import React from 'react'
import styled from "styled-components";

import NavBar from '../floating/navbar/NavBar'

function Home() {
  return (
    <>
      <PageWrapper>
        <HeroSection>
          <NavBar />
          <HeroSectionTitle>
            <HeroSectionTitleContainer>
              <HeroSectionTitleMainText>
                Welcome To MCM PHOENIX
              </HeroSectionTitleMainText>

              <HeroSectionTitleSubText>
                Serving Phoenix Since 1987
              </HeroSectionTitleSubText>
            </HeroSectionTitleContainer>
          </HeroSectionTitle>
              
        </HeroSection>

        <ServiceSection>

        </ServiceSection>
       
      </PageWrapper>
    
    </>
  )
}

export default Home

const PageWrapper = styled.div`
marging-left: 1%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;
const HeroSection = styled.div`
background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(/images/herosection/img-hero-home-cropped.jpg);
width: 100%;
height: 806px;
position: absolute;

background-position: center;
top: 0;
left: 0;
`;

const HeroSectionTitle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
postion: relative;
`;
const HeroSectionTitleContainer = styled.div`
margin-left: 26%;
color: #1f2805;
opacity: 0.8;
`;
const HeroSectionTitleMainText = styled.h1`
font-family: 'Playfair Display', serif;
font-size: 72px;
font-weight: 400;
width: 500px;
height: 250px;
text-shadow: 0 4px 4px #00000040;
letter-spacing: 2px;
`;
const HeroSectionTitleSubText = styled.h2`
font-family: 'Arvo', serif;
font-size: 26px;
`;

const ServiceSection = styled.div`
padding: 20px;
`;