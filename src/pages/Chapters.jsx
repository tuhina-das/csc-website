import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Chapters.css';
import HeroImg from '../assets/Chapters/startChapterBg.webp';
import { TypeAnimation } from 'react-type-animation';

function Chapters() {

    // TODO: get current chapters on there

    let ref = useRef();

    function scroll() {
        console.log("hi")
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        // TODO: debug footer
        <div className="chaptersPage">
            <div className="chapter-hero">
                <div className="hero-box">
                    <div className="text-box">
                        <h1>Start a Chapter</h1>
                        <h3>Ignite passion among coders in your community today</h3>
                        <div className="button-box">
                            <button className="contact-btn" onClick={() => scroll()}>Benefits</button>
                            <Link className="link" to="/contact-us">
                                <button className="contact-btn">Start Now!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="why-box">
                <div className="typeSequence py-[2vh]">
                    <TypeAnimation
                        sequence={[
                            'We have a chapter at Rockwell International School',
                            2000,
                            'We have a chapter at Lebanon Trail High School',
                            2000,
                            'We have a chapter at Liberty High School',
                            2000,
                            'We have a chapter at Braswell High School',
                            2000,
                            'We have a chapter at Prosper High School',
                            2000,
                            'We have a chapter at Rock Hill High School',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block', overflowX: 'scroll' }}
                        repeat={Infinity}
                    />
                </div>
                <div className="why-information" ref={ref}>
                    <h1 className="text-3xl pt-3 mt-[1vh] text-white">Why you should start one...</h1>
                    <div className="infobox-wrapper grid grid-cols-3 py-3">
                        <div className="infobox-1">
                            <div className="circle-1">
                                <h1 className="text-[4.5vh]">1</h1>
                            </div>
                            <div className="reason-1">
                                <h2 className="font-bold text-[2vh]">Give Back to Your Community</h2>
                                <p>
                                    Our chapters empower local communities through tech-driven solutions. By creating a CSC chapter at your school, you contribute to creating accessible and inclusive technology, bridging the digital gap, and making a real impact where it matters most.
                                </p>
                            </div>
                        </div>
                        <div className="infobox-2">
                            <div className="circle-2">
                                <h1 className="text-[4.5vh]">2</h1>
                            </div>
                            <div className="reason-2">
                                <h2 className="font-bold text-[2vh]">Enrich Local Computer Science Education</h2>
                                <p>
                                    Join us in enhancing local software development education, where members walk away with skills that open doors to exciting employment opportunities. Our program focuses on hands-on learning, cutting-edge technologies, and real-world projects, ensuring that participants gain practical experience that aligns with industry needs.
                                </p>
                            </div>
                        </div>
                        <div className="infobox-3">
                            <div className="circle-3">
                                <h1 className="text-[4.5vh]">3</h1>
                            </div>
                            <div className="reason-3">
                                <h2 className="font-bold text-[2vh]">Unlock Your Leadership Potential</h2>
                                <p>
                                    Discover the transformative journey of learning to lead with us.  Starting a CSC chapter comes with a whole trove of opportunity: from embracing adaptability to fostering chapter development, you'll pick up on numerous leadership skills. Join us on this dynamic journey of self-discovery and growth!
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="ready-txt">Ready to start a chapter?</h2>
                    <Link className="link" to="/contact-us">
                        <button className="start-btn">Click me!</button>
                    </Link>
                </div>
            </div>

        </div>
    )
};

export default Chapters;