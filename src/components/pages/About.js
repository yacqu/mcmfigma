import React from 'react'
import styled from "styled-components";

import NavBar2 from '../floating/navbar/navbar2/NavBar2'
import { Device } from '../responsive/Device.js'

function About() {


  return (
    <>
      <PageWrapper>
        <HeroSection>
          <NavBarWrapper>
            <NavBar2 />
          </NavBarWrapper>

          
        </HeroSection>

      </PageWrapper>
    </>
  )
}

export default About

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
justify-content: center;
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