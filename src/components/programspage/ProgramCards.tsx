import React from 'react'
import ProgramCardItem from './ProgramCardItem.tsx'

import './ProgramCards.scss'

const calendarImage = require("../../assets/images/img-3d-calendar.png");


function ProgramCards() {
  return (
    <div className="program-cards-wrapper">
      <div className="program-cards-container">
      {Object.keys(cards).map((key, value)=> (
                    <ProgramCardItem key={key} image={cards[key].image} 
                    title={cards[key].title} 
                    link={cards[key].link}
                    text={cards[key].text} />))}
      </div>
    </div>
  )
}

export default ProgramCards 


const cards = {
  card1: {
    title: 'Womens Halaqah',
    image: calendarImage,
    subtitle: '',
    text: 'Participate in MCM Community Program'
  },
  card2: {
    title: 'Fiqh and Sunnah',
    image: calendarImage,
    subtitle: '',
    text: 'Participate in MCM Community Program'
  },
  card3: {
    title: 'Salah and Wudu',
    image: calendarImage,
    subtitle: '',
    text: 'Participate in MCM Community Program'
  }
}