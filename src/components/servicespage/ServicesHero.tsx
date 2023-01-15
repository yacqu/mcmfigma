import React from 'react'
import styled from "styled-components";

import './ServicesHero.scss'

import serviceHeroPng from '../../assets/images/img-3d-mosque-white.png'

function ServicesHero() {
  return (
    <ServicesHeroWrapper>
        <div className="services-hero-wrapper">
            <div className="services-hero-container">
                <div className="services-hero-title">
                    <h1>What We Offer</h1>
                    <h2>Here at MCM PHOENIX</h2>
                </div>
                <div className="services-hero-right-container">
                    <img src={serviceHeroPng} />

                </div>

            </div>
        </div>
    </ServicesHeroWrapper>
  )
}

export default ServicesHero

const ServicesHeroWrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;