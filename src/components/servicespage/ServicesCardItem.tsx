import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';


import './ServicesCardItem.scss'


export default function ServicesCardItem(props) {
  return (
    <div className="service-card-wrapper">
        <div className="service-card-container">
            <div className="service-card">
                <motion.div className="service-card-image-container">
                    <div className="service-card-image-circle-overlay"></div>
                    <img src={props.image} alt="card image" />
                </motion.div>
                <div className="service-card-content">
                    <div className="service-card-title">
                        <h1>{props.title}</h1>
                        <h2>{props.subtitle}</h2>
                    </div>
                    <div className="service-card-text">
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

