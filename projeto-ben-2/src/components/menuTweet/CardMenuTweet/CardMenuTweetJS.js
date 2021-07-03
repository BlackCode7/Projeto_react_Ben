import React from 'react'
import './components/menuTweet/CardMenuTweet'

const Menu = () => {
    return (
        <div className="menu-page">
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#Profile">Profile</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    );
}

export default Menu