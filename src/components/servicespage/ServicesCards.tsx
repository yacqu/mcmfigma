import React from 'react'
import styled from "styled-components";
import motion from 'framer-motion';
import ServicesCardItem from './ServicesCardItem.tsx';

import './ServicesCards.scss'
import counselingImage from '../../assets/logos/icons-counciling.png'
import nikkahImage from '../../assets/logos/icons-nikkah.png'
import funeralImage from '../../assets/logos/icons-funeral.png'
import revertImage from '../../assets/logos/icons-revert.png'
import quranImage from '../../assets/logos/icons-quran.png'
import zakatImage from '../../assets/logos/icons-zakat.png'


function ServicesCards() {
  return (
    <ServicesCardsWrapper>
        <div className="service-cards-wrapper">
            <div className="service-cards-container">
                {Object.keys(cards).map((key, value)=> (
                    <ServicesCardItem key={key} image={cards[key].image} 
                    title={cards[key].title} 
                    link={cards[key].link} />))}
            </div>
        </div>
    </ServicesCardsWrapper>
  )
}
export default ServicesCards

const cards = {
    card1: {
        image: quranImage,
        title: 'Quran Program',
        link: ``,
        text: 
            `Explore the Quran in depth with our 
            interactive program, featuring translation, 
            commentary, and audio recitation.`
    },
    card2: {
        image: counselingImage,
        title: 'Counseling',
        link: ``,
        text: 
            `Explore the Quran in depth with our 
            interactive program, featuring translation, 
            commentary, and audio recitation.`
    },
    card3: {
        image: nikkahImage,
        title: 'Nikkah',
        link: ``,
        text: 
            `Explore the Quran in depth with our 
            interactive program, featuring translation, 
            commentary, and audio recitation.`
    },
    card4: {
        image: revertImage,
        title: 'Revert Guidance',
        link: ``,
        text: 
            `Explore the Quran in depth with our 
            interactive program, featuring translation, 
            commentary, and audio recitation.`
    },
    card5: {
        image: zakatImage,
        title: 'Zakat',
        link: ``,
        text: 
            `Explore the Quran in depth with our 
            interactive program, featuring translation, 
            commentary, and audio recitation.`
    },
    card6: {
        image: funeralImage,
        title: 'Funeral',
        link: ``,
        text: 
            `Explore the Quran in depth with our 
            interactive program, featuring translation, 
            commentary, and audio recitation.`
    },
}

const ServicesCardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;