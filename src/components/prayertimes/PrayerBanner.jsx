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

  return (
    <PrayerBannerWrapper>
        <div className='prayer-banner-container'>
            <div className='prayer-banner-content'>
                <div className='prayer-banner-left-container'>
                    <h1>Prayer Times</h1>
                    <h2>Phoenix, Az</h2>
                </div>

                <div className='prayer-banner-right-container'>
                    {apiData && Object.entries(apiData.data.data.timings).map(([key, value]) => {
                        if (desiredPrayers.includes(key)) {
                        return (  
                            <div>                                        
                                <li key={key} className='prayer-times-widget-item'>
                                    <h2 className='prayer-times-widget-item-title' key={key}>
                                        {key}
                                    </h2> 
                                    {value}
                                </li>
                            </div> 
                        )}}
                    )}
                </div>
            </div>
        </div>
        
    </PrayerBannerWrapper>
  )
}

export default PrayerBanner

const PrayerBannerWrapper = styled.div`
width: 100%;
min-height: 160px;
display: flex;
justify-content: center;
background: linear-gradient(180deg, #a5acaff4 83%, rgba(255,255,255,1) 97%);
color: #4e5a5e;

`;