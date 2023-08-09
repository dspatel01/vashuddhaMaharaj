import React from 'react';
import './navbar.css';
import logo from '../../image/logo.png'


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="menu-top">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder='Search' />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="menu-bottom">
                    <ul>
                        <li>आचार्य-जी</li>
                        <li>संघ</li>
                        <li>महोत्सव</li>
                        <li>चातुर्मास</li>
                    </ul>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar