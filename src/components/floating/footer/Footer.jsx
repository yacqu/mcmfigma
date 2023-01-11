import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import './Footer.scss'

import fbLogo from '../../../assets/logos/icons8-facebook-30.png';
import igLogo from '../../../assets/logos/icons8-instagram-30.png';
import ytLogo from '../../../assets/logos/icons8-youtube-30.png';
import twLogo from '../../../assets/logos/icons8-twitter-30.png';

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="footer-content-container">
          <div className="footer-top-container">
            <div className="footer-top-container-title">
              <h3>Join Us</h3>
              <h1>Newsletter</h1>
            </div>
            <div className="footer-top-container-content">
              <form>
                <label>
                  <input type='text' name='email' placeholder='Email address' />
                </label>
              </form>
              <button type='submit' name='email'>
                Subscribe
              </button>
            </div>

          </div>
          <div className="footer-bottom-container">
           <div className='footer-bottom-contact-container'>
              <div className='footer-bottom-contact-title'>
                <h1>Contact Us</h1>
                <hr></hr>
              </div>
              <div className='footer-bottom-contact-content'>
                <ul>
                  <li>Address: <br/> 1818 N 32nd St, Phoenix, AZ 85008</li>
                  <br/>
                  <li>Phone: (602) 306-4959</li>
                  <br/>
                  <li>Email: contact@mcmphoenix.com</li>
                </ul>
              </div>
           </div>
           <div className='footer-bottom-menu-container'>
              <div className='footer-bottom-menu-title'>
                <h1>Quick Menu</h1>
                <hr></hr>
              </div>
              <div className='footer-bottom-menu-content'>
                <ul>
                  <li><NavLink>Home</NavLink></li>
                  <li><NavLink>About</NavLink></li>
                  <li><NavLink>Services</NavLink></li>
                  <li><NavLink>Programs</NavLink></li>
                  <li><NavLink>Construction</NavLink></li>
                  <li><NavLink>Contact</NavLink></li>
                  <li><NavLink>Donate</NavLink></li>
                </ul>
              </div>

           </div>
           <div className='footer-bottom-social-container'>
              <div className='footer-bottom-social-title'>
                <h1>Social Media</h1>
                <hr></hr>
              </div>
              <div className='footer-bottom-social-content'>
                <ul>
                  <li><NavLink> <img src={fbLogo} alt='fb'/> Facebook</NavLink></li>
                  <li><NavLink> <img src={igLogo} alt='IG'/> Instagram</NavLink></li>
                  <li><NavLink> <img src={ytLogo} alt='YT'/> Youtube</NavLink></li>
                  <li><NavLink> <img src={twLogo} alt='TW'/> Twitter</NavLink></li>
                </ul>
              </div>

           </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
display: flex;
max-width: 60%;
width: 100%
`;
