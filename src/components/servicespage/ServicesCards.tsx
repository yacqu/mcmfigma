import React from 'react'
import styled from "styled-components";
import ServicesCardItem from './ServicesCardItem';

import './ServicesCards.scss'

function ServicesCards() {
  return (
    <div>ServicesCards</div>
  )
}

export default ServicesCards

const CardContent = {
    card1: {
        img: '',
        title: '',
        text: ''
    },
    card2: {
        img: '',
        title: '',
        text: ''
    },
}

const ServicesCardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;