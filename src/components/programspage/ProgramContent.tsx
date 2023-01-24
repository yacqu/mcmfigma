import React from 'react'

import './ProgramContent.scss'

const calendarImage = require("../../assets/images/img-3d-calendar.png");

function ProgramContent() {
  return (
    <div className='program-content-wrapper'>
        <div className='program-content-container'>
            <div className='program-content-content'>
                <div className='program-content-box'>
                    <div className='program-content-title'>
                        <h1>20</h1>
                        <div className="program-content-date">
                            <h3>February</h3>
                            <h4>Monday</h4>
                        </div>
                    </div>
                    <div className='program-content-img'>
                        <img src={calendarImage} alt='calendar' />
                    </div>
                    <div className="program-content-text-container">
                        <div className='program-content-text'>
                            <h4> Womens Halaqah Night</h4>
                            <p>Join MCM PHOENIX for a halaqah night targeted
                                for women at 7 pm
                            </p>
                        </div>
                    </div>
                    <div className='program-content-btn'>
                        <button>Find Out More</button>
                    </div>
                </div>
                <div className='program-content-box'>
                <div className='program-content-title'>
                        <h1>23</h1>
                        <div className="program-content-date">
                            <h3>February</h3>
                            <h4>Monday</h4>
                        </div>
                    </div>
                    <div className='program-content-img'>
                        <img src={calendarImage} alt='calendar' />
                    </div>
                    <div className="program-content-text-container">
                        <div className='program-content-text'>
                            <h4> Fiqh and Sunnah Night</h4>
                            <p>Join MCM PHOENIX for a Fiqh and Sunnah night targeted
                                for everyone at 7 pm
                            </p>
                        </div>
                    </div>
                    <div className='program-content-btn'>
                        <button>Find Out More</button>
                    </div>
                    </div>
                <div className='program-content-box'>
                <div className='program-content-title'>
                        <h1>27</h1>
                        <div className="program-content-date">
                            <h3>February</h3>
                            <h4>Monday</h4>
                        </div>
                    </div>
                    <div className='program-content-img'>
                        <img src={calendarImage} alt='calendar' />
                    </div>
                    <div className="program-content-text-container">
                        <div className='program-content-text'>
                            <h4> Salah and Wudu Training Night</h4>
                            <p>Join MCM PHOENIX for a Salah and Wudu Training
                                night targeted
                                for everyone at 7 pm
                            </p>
                        </div>
                    </div>
                    <div className='program-content-btn'>
                        <button>Find Out More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgramContent