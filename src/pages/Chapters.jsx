import React from 'react';
import '../styles/Chapters.css';
import HeroImg from '../assets/Chapters/startChapterBg.webp';

function Chapters() {

    return (
        <>
            <div className="chapter-hero">
                <img className="chapter-hero-img" src={HeroImg}></img>
            </div>
            <div className="why-box">
                <div className="why-header">
                    <h1>Why you should start one...</h1>
                </div>
                <div className="why-information">
                    
                </div>
            </div>
        </>
    )
};

export default Chapters;