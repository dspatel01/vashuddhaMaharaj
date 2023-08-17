import React, { useState } from 'react';
import './navbar.css';
import logo from '../../image/logo.png'


const Navbar = () => {

const [bar,setBar] = useState("burger-bar unclicked");
const [menu_Class, setMenuClass] = useState("menu1 hidden");
const [ismobile, setIsMobile] = useState(false);
 
const handlemobile = () =>{
    if(!ismobile){
        setBar("burger-bar clicked")
        setMenuClass("menu1 hidden")
    }else{
        setBar("burger-bar unclicked")
        setMenuClass("menu1 visible")
    }
    setIsMobile(!ismobile)
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
                    <ul className={ismobile?"visible":"hidden"}>
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
                    <div className="burger-menu" onClick={handlemobile} >
                        <div className={bar}></div>
                        <div className={bar}></div>
                        <div className={bar}></div>
                    </div>
                <div className={menu_Class}></div>
                </div>
            </nav>

        </>
    )
}

export default Navbar