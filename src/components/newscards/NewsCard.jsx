import React from 'react'
import styled from 'styled-components'

import './NewsCard.scss'

function NewsCard(props) {
  return (
    <NewsCardsWrapper>
        <div className='news-card-container'>
          <div className='news-card-content'>
            <div className='news-card'>
              <img src={props.image} alt='card image' />
              <h3>{props.title}</h3>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
    </NewsCardsWrapper>
  )
}

export default NewsCard

const NewsCardsWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;