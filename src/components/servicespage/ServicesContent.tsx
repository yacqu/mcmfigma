import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';

import './ServicesContent.scss'

function ServicesContent() {
  return (
    <ServicesContentWrapper>
        <div className="services-content-wrapper">
            <div className="services-content-container">
                <div className="services-content-quran-container">
                    <h1>Quran Program </h1>
                    <div className="services-content-quran-content">
                        <p>{Text.quran}</p>
                    </div>
                </div>
                <div className="services-content-counseling-container">
                    <h1>Counseling Services</h1>
                    <div className="services-content-counseling-content">
                        <p>{Text.counseling}</p>
                    </div>
                </div>
                <div className="services-content-nikkah-container">
                    <h1>Nikkah Services</h1>
                    <div className="services-content-nikkah-content">
                        <p>{Text.nikkah}</p>
                    </div>
                </div>
                <div className="services-content-revert-container">
                    <h1>Revert Services</h1>
                    <div className="services-content-revert-content">
                        <p>content text</p>
                    </div>
                </div>
                <div className="services-content-zakat-container">
                    <h1>Zakat Services</h1>
                    <div className="services-content-zakat-content">
                        <p>content text</p>
                    </div>
                </div>
                <div className="services-content-funeral-container">
                    <h1>Funeral Services</h1>
                    <div className="services-content-funeral-content">
                        <p>content text</p>
                    </div>
                </div>
            </div>
        </div>
    </ServicesContentWrapper>
  )
}

export default ServicesContent

const ServicesContentWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
`;

const Text = {
    quran: `MCM Phoenix mosque offers a comprehensive Quran 
    program for members of the community of all ages. 
    The program includes classes for children, teenagers, 
    and adults, each tailored to the appropriate level of 
    understanding and learning. The classes provide a deep 
    dive into the Quran, including its teachings and principles, 
    as well as their relevance in daily life. The curriculum is 
    designed to help students develop a strong foundation in 
    Quranic studies and a deeper understanding of Islam, under 
    the guidance of experienced teachers.`,
    counseling: `MCM Phoenix mosque offers a counseling program
    for members of the community of all ages, with a focus 
    on Islamic marriage counseling. The program includes 
    counseling services for individuals, couples, and 
    families, with a special emphasis on addressing issues 
    related to marriage and family. The counseling sessions 
    are led by experienced professionals, who provide guidance 
    and support based on Islamic principles and teachings. In 
    addition to marriage counseling, the program also addresses 
    mental health concerns and provides support for individuals 
    dealing with emotional and psychological issues. 
    The counseling services are confidential and aim to help 
    individuals and families navigate difficult situations in 
    a supportive and understanding environment.`,
    nikkah: `MCM Phoenix mosque offers a Nikkah program to 
    assist members of the community in planning and conducting 
    the Islamic marriage ceremony. The program provides guidance 
    and support for couples throughout the process, including 
    assistance with the legal requirements and Islamic teachings 
    related to the Nikkah. The program is led by experienced 
    Imams who will perform the ceremony, and provide the couple 
    with information on the spiritual significance of the 
    ceremony, as well as the rights and responsibilities of 
    the couple in an Islamic marriage. Additionally, the program 
    also provides resources and support for newlyweds as they 
    begin their married life together, including marital 
    counseling, financial planning, and more based on teachings 
    of the Prophet Muhammad (PBUH). This program aims to ensure 
    that the couples have a solid foundation for a successful 
    and fulfilling marriage.`,
    revert: ``,
};