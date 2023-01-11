import React from 'react'
import styled from 'styled-components'

import './NewsCard.scss'

function NewsCard(props) {
  return (
    <NewsCardsWrapper>
      <div className='news-card-container'>
        <a href={props.link}>
          <div className='news-card-content'>
            <div className='news-card'>
              <img src={props.image} alt='card image' />
              <h3>{props.title}</h3>
              <p>{props.text}</p>
            </div>
          </div>
        </a>
      </div>
    </NewsCardsWrapper>
  )
}

export default NewsCard

const NewsCardsWrapper = styled.div`
display: flex;
max-width: 400px;
`;