import React from 'react'
import styled from "styled-components";

import './ProgramsHero.scss'

import serviceHeroPng from '../../assets/images/img-3d-mosque-white.png'

function ProgramsHero() {
  return (
    <ProgramsHeroWrapper>
        <div className="programs-hero-wrapper">
            <div className="programs-hero-container">
                <div className="programs-hero-title">
                    <h1>Programs We Offer</h1>
                    <h2>Here at MCM PHOENIX</h2>
                </div>
                <div className="programs-hero-right-container">
                    <img src={serviceHeroPng} />

                </div>

            </div>
        </div>
    </ProgramsHeroWrapper>
    
  )
}

export default ProgramsHero

const ProgramsHeroWrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;