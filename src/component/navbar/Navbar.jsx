import React from 'react';
import './navbar.css';
import logo from '../../image/logo.png'


const Navbar = () => {
 
const handlemobile = () =>{
    console.log("clicked")
}
    return (
        <>
            <nav>
                <div className="menu-top">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder='Search' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="menu-bottom">

                    <ul className='menu'>
                        <li>
                            <a href="/">आचार्य-जी</a>
                            <ul>
                                <li>
                                    <a href="/">जीवन-परिचय</a>
                                </li>
                                <li>
                                    <a href="/">त्याग</a>
                                </li>
                                <li>
                                    <a href="/">आरती</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">संघ</a>
                        </li>
                        <li>
                            <a href="/">महोत्सव</a>
                        </li>
                        <li>
                            <a href="/">चातुर्मास</a>
                        </li>
                    </ul>
                    <div className="hamburger" onClick={handlemobile}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar