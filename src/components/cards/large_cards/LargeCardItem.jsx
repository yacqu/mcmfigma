import React from 'react'
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Marginer } from './Marginer';

import './LargeCardItem.css'
import McmLogo from '../../../assets/logos/img-main-logo.png'

function LargeCardItem(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);

  return (
    <>
      <LargeCardWrapper>
        <LargeCardContainer style={{ x, y, rotateX, rotateY, z: 100 }} 
        drag dragElastic={0.16}
        dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
        whileTap={{ cursor: 'grabbing'}}
        cardHeight={props.cardHeight}
        >
          <LargeCardTopContainer>
            <LargeCardCircleWrapper>
              <LargeCardCircle />
            </LargeCardCircleWrapper>
            <LargeCardImageWrapper >
              <LargeCardText>{props.title}</LargeCardText>
              <LargeCardImage style={{x, y, rotateX, rotateY }}
              z={1000}
              drag dragElastic={0.12}
              whileTap={{ cursor: 'grabbing'}}>
                <img src={props.image} alt={props.alt} />
              </LargeCardImage>
            </LargeCardImageWrapper>
          
          </LargeCardTopContainer>
          <LargeCardBottomContainer>
            <LargeCardBottomDetailsContainer>
              <LargeCardBottomDetailsSmallText>
                {props.subtitle}
              </LargeCardBottomDetailsSmallText>
              <LargeCardBottomSpacedHorizontalContainer>
                <LargeCardBottomDetailsMediumText>
                  {props.text}
                </LargeCardBottomDetailsMediumText>
              </LargeCardBottomSpacedHorizontalContainer>
              <Marginer direction="vertical" margin='1.2em' />              
              <LargeCardBottomLogo>
                <img src={McmLogo} alt='logo' />
              </LargeCardBottomLogo>
            </LargeCardBottomDetailsContainer>
          </LargeCardBottomContainer>
        </LargeCardContainer>
      </LargeCardWrapper>
    </>
  )
}

export default LargeCardItem;


const LargeCardWrapper = styled.div`
padding: 20px 2px 150px 2px;
width: 100%;
perspective: 2000;
display: flex;
justify-content: center;
align-items: center;
`;
const LargeCardContainer = styled(motion.div)`
width: 60%;
height: ${props => props.cardHeight};
display: flex;
flex-direction: column;
border-radius: 15px;
box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
background-color: var(--large-card-color);
color: white;
position: relative;
cursor: grab;
`;
const LargeCardCircleWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
min-width: 100%;
min-height: 100%;
overflow: hidden;
border-top-right-radius: 25px;
`;
const LargeCardCircle = styled.div`
position: absolute;
width: 350px;
height: 350px;
top: -6em;
right: -6em;
z-index: 5;
background-color: var(--circle-color);
border-radius: 50%;
`;
const LargeCardTopContainer = styled.div`
height: 100vh;
padding: 1em 2em;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
flex: 1.2;
`;
const LargeCardBottomContainer = styled.div`
padding: 6vh 4em;
flex: 2.8;
display: flex;
`;
const LargeCardText = styled.h1`

text-transform: uppercase;
margin: 4;
z-index: 10;
font-size: 76px;
font-weight: 900;
color: var(---large-card-text-color);
text-shadow: var(--large-card-h1-text-shadow);
`;

const LargeCardImageWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
justify-content: space-between;
align-items: flex-start;
`;
const LargeCardImage = styled(motion.div)`
width: auto;
height: 190px;
z-index: 99;
user-select: none;
margin-right: 2em;
margin-top: -0.3em;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

const LargeCardBottomDetailsContainer = styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
padding: 8.5em 10px 0 6px;
line-height: 1.4;
`;
const LargeCardBottomDetailsMediumText = styled.p`
font-size: 14px;
color:  #4c5041;
font-weight: 800;
font-family: "Arial", "Helvetica", "sans-serif";
line-height: 40px;
padding-inline-start: 40px;
letter-spacing: 0.5px;
font-weight: 500;
`;
const LargeCardBottomDetailsSmallText = styled.div`
padding-inline-start: 3em;
font-size: 11px;
color: #e2e2e2;
font-weight: 700;
text-transform: uppercase;
font-family: "Arial", "Helvetica", "sans-serif";
font-weight: 500;
`;
const LargeCardBottomSpacedHorizontalContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const LargeCardBottomButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover {
  background-color: transparent;
  color: white;
  border: 2px solid var(--circle-color);
  cursor: pointer;
  }
`;
const LargeCardBottomButton = styled.button`
padding: 10px 16px;
background-color: var(--circle-color);
color: var(--large-card-btn);
font-size: var(--large-card-btn-font-size);
font-weight: 700;
border: 2px solid transparent;
outline: none;
cursor: pointer;
transition: all 290ms ease-in-out;
border-radius: 8px;
&:hover {
  background-color: transparent;
  color: white;
  border: 2px solid var(--circle-color);
  }
`;
const LargeCardBottomLogo = styled.div`
width: 100%;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
  img {
    width: auto;
    height: 13px;
  }
`;
