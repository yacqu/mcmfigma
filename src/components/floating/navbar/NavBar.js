import React from 'react'
import styled from "styled-components";
import { makeStyles } from '@mui/material/styles';
import {AppBar, Toolbar, Typography, Button, IconButton, Stack} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



import "./NavBar.css";


function NavBar() {

  return (
    <NavBarWrapper>
      <NavBarLogo>
        <img className='nav-bar-img' alt="logo" src="/images/logos/img-main-logo-wide.png" />
      </NavBarLogo>
      <NavBarContainer>
        <AppBar className='nav-bar-app-bar' position="static">
          <Toolbar className='nav-bar-tool-bar' variant='dense'>

            <Stack className='nav-bar-stack' direction="row" alignItems="center" spacing={1.8}>
              <Button className='nav-bar-stack-btn' color="inherit" component="div">
                <NavBarLinkText>Home</NavBarLinkText>
              </Button>
              <Button className='nav-bar-stack-btn' color="inherit" component="div">
                <NavBarLinkText>Events</NavBarLinkText>
              </Button>
              <Button className='nav-bar-stack-btn' color="inherit" component="div">
                <NavBarLinkText>Services</NavBarLinkText>
              </Button>
              <Button className='nav-bar-stack-btn' color="inherit" component="div">
                <NavBarLinkText>Programs</NavBarLinkText>
              </Button>
              <Button className='nav-bar-stack-btn' color="inherit" component="div">
                <NavBarLinkText>Construction</NavBarLinkText>
              </Button>
              <Button className='nav-bar-stack-btn' color="inherit" component="div">
                <NavBarLinkText>Contact</NavBarLinkText>
              </Button>
              <Button className='nav-bar-stack-btn' color="inherit" component="div">
                <NavBarLinkText>Donate</NavBarLinkText>
              </Button>

            </Stack>
          </Toolbar>
        </AppBar>
      </NavBarContainer>
    </NavBarWrapper>
  );
}

export default NavBar

const NavBarWrapper = styled.div`
max-width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0% 0% 0%;
`;
const NavBarLogo = styled.div`
padding: 1% 5% 1%;
`;
const NavBarContainer = styled.div`
padding: 1% 5% 1%;
`;
const NavBarLinkText = styled.div`
padding: 1% 1% 1%;
font-size: 16px;
width: 100%;
font-weight: 900;
letter-spacing: 1px;
font-family:serif;
`;


