import React from 'react'
import styled from "styled-components";

import NavBar from '../floating/navbar/NavBar'

function Home() {
  return (
    <>
      <PageWrapper>
        <HeroSection>
           <NavBar />
        </HeroSection>

        <ServiceSection>

        </ServiceSection>
       
      </PageWrapper>
    
    </>
  )
}

export default Home

const PageWrapper = styled.div`
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
const ServiceSection = styled.div`
padding: 20px;
`;