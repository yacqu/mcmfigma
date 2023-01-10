import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

import './PrayerBanner.scss'

function PrayerBanner() {

    const [apiData, setApiData] = useState(null);
    const desiredPrayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const desiredDate = ['readable']

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8');
            {/* console.log(response); */}
            console.log(response);
            setApiData(response);
        }
        fetchData();
    }, []);

    const fajr = apiData?.data?.timings?.Fajr;


  return (
    <PrayerBannerWrapper>
        <div className='prayer-banner-container'>
            <div className='prayer-banner-content'>
                <div className='prayer-banner-left-container'>
                    <h1>Prayer Times</h1>
                    <h2>Phoenix, Az</h2>
       
                </div>

                <div className='prayer-banner-right-container'>
                    <h1>right</h1>
                </div>
            </div>
        </div>
        
    </PrayerBannerWrapper>
  )
}

export default PrayerBanner

const PrayerBannerWrapper = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: center;
border: 1px solid black;
background-color: #58696e;
`;