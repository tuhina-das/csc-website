import React from 'react';
import '../styles/Home.css';
import HeroImg from '../assets/Home/csc-hero-img.png';
import Collab from '../assets/Home/collab.webp';
import Conferences from '../assets/Home/conferences.png';
import Competitions from '../assets/Home/competitions.png';
import Volunteering from '../assets/Home/volunteering.png';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <div className="hero">
                <img className="hero-img" src={HeroImg}></img>
                <h1 className="hero-txt">Computer Science For Community.</h1>
                <Link className="link" to="/chapters">
                    <button className="involve-btn">Get Involved</button>
                </Link>
            </div>
            <div className="carousel">
                {/* 2/25 - TBWO */}
            </div>
            <div className="about-us">
                <div className="about-us-box">
                    <div className="about-info">
                        <h1 className="about-header">About Us</h1>
                        <h2 className="about-subheader">Learn about our vision and community.</h2>
                        <h3 className="about-text">Get to know about the type of club we are and the members you are going to be working with.</h3>
                        <Link className="link" to="/about">
                            <button className="about-btn">Go Now</button>
                        </Link>
                    </div>
                    <img className="about-img" src={Collab}></img>
                </div>
            </div>
            <div className="chapters">
                {/* NTS TO PUT BUTTONS AND HEADER IN TWO SEPARATE BOXES */}
                <div className="chapters-box">
                    <h1 className="chapters-head">Chapters</h1>
                    <div className="line"></div>
                    <p className="chapters-ptext">Take initiative and start a CSC chapter at your school today and explore the chapters already established!</p>
                    <button className="chapters-btn">Start A Chapter</button>
                    <button className="chapters-btn">Explore Chapters</button>
                </div>
            </div>
            <div className="events">
                <div className="events-header">
                    <h1 className="events-title">Events</h1>
                    <h3 className="events-txt">CSC offers a variety of events for members to participate in and enroll in. These fun events include aspects of coding as well as community involvement.</h3>
                </div>
                <div className="events-options">
                    <div className="e-option option-1">
                        <img src={Conferences}></img>
                        <h1>Conferences</h1>
                    </div>
                    <div className="e-option option-2">
                        <img src={Competitions}></img>
                        <h1>Competitions</h1>
                    </div>
                    <div className="e-option option-3">
                        <img src={Volunteering}></img>
                        <h1>Volunteering</h1>
                    </div>
                </div>
                <h3 className="andMore">and more...</h3>
                <Link className="link" to="/events">
                    <button className="eventsInfo">MORE INFO</button>
                </Link>

            </div>
            <div className="contact-us">
                <div className="divider"></div>
                <div className="contact-box-home">
                    <h1>Contact Us</h1>
                    <p>Be involved with CSC by sponsoring us, partnering with us, or starting a chapter at your school. For any of the above reasons or more contact us by emailing us or filling out a form!</p>
                    <Link className="link" to="/contact-us">
                    <button className="contact-btn">Reach Out</button>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Home;