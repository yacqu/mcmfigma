import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';


import './ProgramCardItem.scss'


function ProgramCardItem(props) {
  return (
    <div className="program-card-wrapper">
        <div className="program-card-container">
            <div className="program-card">
                <div className="program-card-image-container">
                    <img src={props.image} alt="card image" />
                </div>
                <div className="program-card-content">
                    <div className="program-card-title">
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                    </div>
                    <div className="program-card-text">
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ProgramCardItem;