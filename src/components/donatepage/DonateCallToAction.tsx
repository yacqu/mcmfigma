
import React, { FC, useState, useEffect } from 'react'

import './DonateCallToAction.scss';

function DonateCallToAction() {
    const [donateMenu, setDonateMenu] = useState('once');

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
                                <li>
                                    <button onClick={() => setDonateMenu('once')}>Donate Once</button>
                                </li>
                                <li>
                                    <button onClick={() => setDonateMenu('weekly')}>Donate Weekly</button>
                                </li>
                                <li>
                                    <button onClick={() => setDonateMenu('monthly')}>Donate Monthly</button>
                                </li>
                            </ul>
                        </div>
                        <div className='donate-action-container-right-side-car-menu-content'>
                            {donateMenu === 'once' && <OnceMenu />}
                            {donateMenu === 'weekly' && <WeeklyMenu />}
                            {donateMenu === 'monthly' && <MonthlyMenu />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonateCallToAction


const OnceMenu = () => 
<div className='donate-action-container-right-side-car-menu-once'>
    Donate Once
    <div className='donate-action-container-right-side-car-menu-title'>
        <h3>Enter Your Email</h3>
    </div>
    <div className='donate-action-container-right-side-car-menu-input'>
        <form>
            <input type="email" placeholder='Enter your email' />
        </form>
    </div>
</div>;

const WeeklyMenu = () => 
<div className='donate-action-container-right-side-car-menu-weekly'>
    Donate Weekly

</div>;
const MonthlyMenu = () => <div>Donate Monthly</div>;