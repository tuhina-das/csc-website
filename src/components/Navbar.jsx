import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import '../styles/Navbar.css';
import Logo from '../assets/csc-logo.webp'
import hamburger from '../assets/hamburger.png'

function Navbar() {
    const [visible, setVisible] = useState(false);
    function toggleMenu() {
        setVisible(!visible);
    }
    const handleClick = () => {
        toggleMenu()
    }

    const small = useMediaQuery('(max-width: 800px)');
    return (
        (small) ?
            <>
                <div className="navbar">
                    <Link className="link" to="/">
                    <img src={Logo} className="w-[20vw] ml-1 float-left" />
                </Link>
                    <span className="navOption">
                        <img className="hamburger" src={hamburger} onClick={handleClick} />
                    </span>
                </div>
                {visible &&
                    <div className="navmenu">
                        <div className="menuOption" onClick={handleClick}>
                            <Link className="link" to="/"><h2>Home</h2></Link>
                        </div>
                        <div className="menuOption" onClick={handleClick}>
                            <Link className="link" to="/about"><h2>About</h2></Link>
                        </div>
                        <div className="menuOption" onClick={handleClick}>
                            <Link className="link" to="/chapters"><h2>Chapters</h2></Link>
                        </div>
                        <div className="menuOption" onClick={handleClick}>
                            <Link className="link" to="/events"><h2>Events</h2></Link>
                        </div>
                        <div className="menuOption" onClick={handleClick}>
                            <Link className="link" to="/contact-us"><h2>Contact</h2></Link>
                        </div>
                    </div>
                }
            </>
            :
            <div className="navbar">
                <Link className="link" to="/">
                    <img src={Logo} className="w-[10vw] ml-1 float-left" />
                </Link>

                <div className="options-box">
                    <span className="navOption">
                        <Link className="link" to="/events"><h2>Events</h2></Link>
                    </span>
                    <span className="navOption">
                        <Link className="link" to="/chapters"><h2>Chapters</h2></Link>
                    </span>
                    <span className="navOption">
                        <Link className="link" to="/about"><h2>About</h2></Link>
                    </span>
                    <span className="navOption">
                        <Link className="link" to="/"><h2>Home</h2></Link>
                    </span>
                </div>
                <div className="contact-box">
                    <span className="navOption contact-button mr-1">
                        <Link className="link" to="/contact-us">
                            <button className="w-[100%] text-[80%] bg-[#16CF10] text-white px-3 py-2.5 hover:bg-[#3b9aff]">Contact Us</button>
                        </Link>
                    </span>
                </div>
            </div>
    )
};

export default Navbar;