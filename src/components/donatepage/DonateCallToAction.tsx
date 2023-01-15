
import React, { FC, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import './DonateCallToAction.scss';
import donatePng from '../../assets/images/img-3d-donate.png';
import donateBg from '../../assets/images/img-mosque-donate-action.jpg';

function DonateCallToAction() {
    const [donateMenu, setDonateMenu] = useState('once');
    const [highlightedButton, setHighlightedButton] = useState(null);
    const [highlightedTimeButton, setHighlightedTimeButton] = useState(null);

    const containerClass = classNames({
        'donate-action-wrapper': true,
    });

  return (
    <div className='donate-action-wrapper'>

        <div className='donate-action-container'>
            <div className='donate-action-container-left'> 
                <img src={donatePng} />
                <div className='donate-action-title-container'>
                    <h1>Help MCM Phoenix Build a New Mosque</h1>
                    <h2>Any Contribtion helps</h2>
                    <h3>Whether you want to donate time, knowledge, finacially, or even just a smile</h3>
                </div>
                <div className='donate-action-text-container' >
                    <p>
                        We are reaching out to ask for your help in 
                        building a mosque for our community in Phoenix. 
                        MCM Phoenix is a non-profit organization that is 
                        dedicated to providing a place of worship and community 
                        for Muslims in Phoenix. We believe that building a mosque 
                        is like building a home in Jannah, and we need your 
                        support to make this dream a reality.
                    </p>
                    <p>
                        Your support is essential in helping us to create a 
                        space where Muslims in Phoenix can come together to 
                        worship, learn, and grow as a community. We are grateful 
                        for any support that you can offer, and we ask that you 
                        please consider making a donation to MCM Phoenix. Together, 
                        we can build a home in Jannah for our community.
                    </p>
                </div>
            </div>
            <div className='donate-action-container-right'>
                <div className='donate-action-container-right-side-car'>
                    <div className='donate-action-container-right-side-car-content'>
                        <div className='donate-action-container-right-side-car-title'>
                            <h3>Donate To MCM Here</h3>
                            <hr />
                        </div>
                        <div className='donate-action-container-right-side-car-buton-list'>
                            <ul>
                                <li><button className={donateMenu === 'once' ? 'highlighted' : ''}
                                onClick={() => { setDonateMenu('once');}}>Donate Once</button></li>

                                <li><button className={donateMenu === 'weekly' ? 'highlightedW' : ''}
                                onClick={() => { setDonateMenu('weekly');}}>Donate Weekly</button></li>

                                <li><button className={donateMenu === 'monthly' ? 'highlightedM' : ''}
                                onClick={() => {setDonateMenu('monthly');}}>Donate Monthly</button></li>
                            </ul>
                        </div>
                        <div className='donate-action-container-right-side-car-menu-content'>
                            <CSSTransition in={donateMenu === 'once'} timeout={300} classNames="donate-action-container-right-side-car-menu-item" unmountOnExit>
                                <OnceMenu highlightedButton={highlightedButton} setHighlightedButton={setHighlightedButton} />
                            </CSSTransition>
                            <CSSTransition in={donateMenu === 'weekly'} timeout={300} classNames="donate-action-container-right-side-car-menu-item" unmountOnExit>
                                <WeeklyMenu highlightedButton={highlightedButton} setHighlightedButton={setHighlightedButton} />
                            </CSSTransition>
                            <CSSTransition in={donateMenu === 'monthly'} timeout={300} classNames="donate-action-container-right-side-car-menu-item" unmountOnExit>
                                <MonthlyMenu highlightedButton={highlightedButton} setHighlightedButton={setHighlightedButton}/>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonateCallToAction


const OnceMenu = ({highlightedButton, setHighlightedButton}) => 
<div className='donate-action-container-right-side-car-menu-once'>
    
    <div className='donate-action-container-right-side-car-menu-title'>
        <h2>Choose Amount</h2>
    </div>
    <div className='donate-action-container-right-side-car-amount-list'>
        <ul>
            <li><button 
            className={highlightedButton === '5-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('5-button')}>$ 5</button></li>
            <li><button 
            className={highlightedButton === '10-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('10-button')}>$ 10</button></li>
            <li><button className={highlightedButton === '15-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('15-button')}>$ 15</button></li>
            <li><button 
            className={highlightedButton === '20-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('20-button')}>$ 20</button></li>
            <li><button 
            className={highlightedButton === '25-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('25-button')}>$ 25</button></li>
        </ul>
    </div>

    <div className='donate-action-container-right-side-car-donate-now'>
        <a href='https://www.paypal.com/donate/?hosted_button_id=LZGPUFLUNZC8E' >
            <button >Donate Now</button>
        </a>
    </div>    
    <div className='donate-action-container-right-side-car-menu-title'>
        <h3>Enter Your Email To Recieve Masjid Updates</h3>
    </div>
    <div className='donate-action-container-right-side-car-menu-input'>
        <form><input type="email" placeholder='Enter your email' /></form>
        <button type="submit">Submit</button>
    </div>
</div>;

const WeeklyMenu = ({highlightedButton, setHighlightedButton}) => 
<div className='donate-action-container-right-side-car-menu-weekly'>
<div className='donate-action-container-right-side-car-menu-title'>
        <h2>Choose Amount</h2>
    </div>
    <div className='donate-action-container-right-side-car-amount-list'>
        <ul>
            <li><button 
            className={highlightedButton === '5-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('5-button')}>$ 5</button></li>
            <li><button 
            className={highlightedButton === '10-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('10-button')}>$ 10</button></li>
            <li><button className={highlightedButton === '15-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('15-button')}>$ 15</button></li>
            <li><button 
            className={highlightedButton === '20-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('20-button')}>$ 20</button></li>
            <li><button 
            className={highlightedButton === '25-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('25-button')}>$ 25</button></li>
        </ul>
    </div>

    <div className='donate-action-container-right-side-car-donate-now'>
        <button>
            Donate Now
        </button>
    </div>    
    <div className='donate-action-container-right-side-car-menu-title'>
        <h3>Enter Your Email To Recieve Masjid Updates</h3>
    </div>
    <div className='donate-action-container-right-side-car-menu-input'>
        <form><input type="email" placeholder='Enter your email' /></form>
        <button type="submit">Submit</button>
    </div>
</div>;

const MonthlyMenu = ({highlightedButton, setHighlightedButton}) => 
<div className='donate-action-container-right-side-car-menu-monthly'>
<div className='donate-action-container-right-side-car-menu-title'>
        <h2>Choose Amount</h2>
    </div>
    <div className='donate-action-container-right-side-car-amount-list'>
        <ul>
            <li><button 
            className={highlightedButton === '5-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('5-button')}>$ 5</button></li>
            <li><button 
            className={highlightedButton === '10-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('10-button')}>$ 10</button></li>
            <li><button className={highlightedButton === '15-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('15-button')}>$ 15</button></li>
            <li><button 
            className={highlightedButton === '20-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('20-button')}>$ 20</button></li>
            <li><button 
            className={highlightedButton === '25-button' ? 'highlighted' : ''}
            onClick={() => setHighlightedButton('25-button')}>$ 25</button></li>
        </ul>
    </div>

    <div className='donate-action-container-right-side-car-donate-now'>
        <button>
            Donate Now
        </button>
    </div>    
    <div className='donate-action-container-right-side-car-menu-title'>
        <h3>Enter Your Email To Recieve Masjid Updates</h3>
    </div>
    <div className='donate-action-container-right-side-car-menu-input'>
        <form><input type="email" placeholder='Enter your email' /></form>
        <button type="submit">Submit</button>
    </div>
</div>;