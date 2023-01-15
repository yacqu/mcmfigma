
import React, { FC, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';


import './DonationBar.scss';


function DonationBar() {
  return (
    <div className='donate-bar-wrapper'>
        <div className='donate-bar-container'>
            <div className="donate-bar-title">
                <h1>Donation Progress</h1>
                {/* <h2>Goal: $ 250,000</h2> */}
            </div>
            <div className="donate-bar-content">
                <div className="donate-bar-box">
                    <div className="donate-bar-progress">
                        <h3>$50,000 Raised</h3>
                    </div>
                    <div className="donate-bar-goal">
                        <h3>Goal: $ 250,000</h3>
                    </div>
                </div>
                <div className="donate-bar-btn">
                    <a href='https://www.paypal.com/donate/?hosted_button_id=LZGPUFLUNZC8E'><button type="button">
                        Join Us
                    </button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonationBar