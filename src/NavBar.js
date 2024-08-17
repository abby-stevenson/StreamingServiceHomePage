import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import logoText from './GenerateMovies.png';
import notificationIcon from './Notification.png';
import settingsIcon from './Settings-alt.png';
import userIcon from './Icon.png';

 export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <div className = "logo">
                <img src={logo} alt="Logo"/>
                <img src={logoText} alt="Logo Text"/>
            </div>
        </div>
        <div className="navbar-center">
            <div className="nav-links">
                    <button className='nav-button'>Home</button>
                    <button className='nav-button'>Movies</button>
                    <button className='nav-button'>Series</button>
            </div>
        </div>
        <div className="navbar-right">
            <button class="icon-button"> <img src={notificationIcon} alt="Notifications"/></button>
            <button class="icon-button"> <img src={userIcon} alt="User"/></button>
            <button class="icon-button"> <img src={settingsIcon} alt="Setting"/></button>
        </div>
    </nav>
    );
};