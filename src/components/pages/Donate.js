
import React from 'react'
import styled from "styled-components";

import NavBar from '../floating/navbar/NavBar'
import { Device } from '../responsive/Device.js'

function Donate() {


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

      </PageWrapper>
    </>
  )
}

export default Donate

const PageWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const HeroSection = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-image: url("/images/herosection/img-hero-donate.jpg");
height: 70vh;  
background-position: 50% 20%;
background-repeat: no-repeat;
background-size: cover;
background-blend-mode: lighten;
position: relative;
isolation: isolate;
&:after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
`;

const NavBarWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
isolation: isolate;
position: relative;
color: #273307;

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
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background-image: linear-gradient(180deg, #0e6097, #072e48);
    border-radius: 1px;
    box-shadow: 0 4px 30px #0a3e5f;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
`;
const HeroSectionTitleContainer = styled.h1`
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
opacity: 0.6;
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