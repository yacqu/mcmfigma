
import React, { FC, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import './DonateCallToAction.scss';

function DonateCallToAction() {
    const [donateMenu, setDonateMenu] = useState('once');
    const [highlightedButton, setHighlightedButton] = useState(null);
    const [highlightedTimeButton, setHighlightedTimeButton] = useState(null);

  return (
    <div className='donate-action-wrapper'>
        <div className='donate-action-container'>
            <div className='donate-action-container-left'> 
                <div className='donate-action-title-container'>
                    <h1>Help MCM Phoenix Build a New Mosque</h1>
                    <h2>Any Contribtion helps</h2>
                    <h3>Whether you want to donate time, knowledge, finacially, or even just a smile</h3>
                </div>
            </div>
            <div className='donate-action-container-right'>
                <div className='donate-action-container-right-side-car'>
                    <div className='donate-action-container-right-side-car-content'>
                        <div className='donate-action-container-right-side-car-title'>
                            <h3>Donate Here</h3>
                        </div>
                        <div className='donate-action-container-right-side-car-buton-list'>
                            <ul>
                                <li><button 
                                className={donateMenu === 'once' ? 'highlighted' : ''}
                                onClick={() => {
                                setDonateMenu('once');
                                }}
                                >Donate Once</button></li>

                                <li><button 
                                className={donateMenu === 'weekly' ? 'highlightedW' : ''}
                                onClick={() => {
                                setDonateMenu('weekly');
                                }}
                                >Donate Weekly</button></li>

                                <li><button 
                                className={donateMenu === 'monthly' ? 'highlightedM' : ''}
                                onClick={() => {
                                setDonateMenu('monthly');
                                }}
                                >Donate Monthly</button></li>
                            </ul>
                        </div>
                        <div className='donate-action-container-right-side-car-menu-content'>
                            <CSSTransition in={donateMenu === 'once'} timeout={300} classNames="donate-action-container-right-side-car-menu-item" unmountOnExit>
                                <OnceMenu highlightedButton={highlightedButton} setHighlightedButton={setHighlightedButton} />
                            </CSSTransition>
                            <CSSTransition in={donateMenu === 'weekly'} timeout={300} classNames="donate-action-container-right-side-car-menu-item" unmountOnExit>
                                <WeeklyMenu />
                            </CSSTransition>
                            <CSSTransition in={donateMenu === 'monthly'} timeout={300} classNames="donate-action-container-right-side-car-menu-item" unmountOnExit>
                                <MonthlyMenu />
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

const WeeklyMenu = () => 
<div className='donate-action-container-right-side-car-menu-weekly'>
    <div className='donate-action-container-right-side-car-menu-title'>
        <h2>Enter Your Email To Recieve Weekly Reminders</h2>
    </div>
    <div className='donate-action-container-right-side-car-menu-input'>
        <form>
            <input type="email" placeholder='Enter your email' />
        </form>

    </div>
</div>;
const MonthlyMenu = () => 
<div className='donate-action-container-right-side-car-menu-monthly'>
    <div className='donate-action-container-right-side-car-menu-title'>
        <h3>Enter Your Email To Recieve Monthly Reminders</h3>
    </div>
    <div className='donate-action-container-right-side-car-menu-input'>
        <form>
            <input type="email" placeholder='Enter your email' />
        </form>
    </div>
</div>;