import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import '../styles/AboutNavbar.css'
import MissionLaptop from '../assets/About/mission-laptop.webp'
import CommunityBg from '../assets/About/community-bg.png'
import SponsorImg from '../assets/About/sponsor-img.webp'
import OfficerCard from "./OfficerCard";
import {
    Sriram,
    Rohan,
    Sai,
    Tuhina,
    Shreya,
    Tanush,
    Karthik,
    Arpit,
    Naavya, 
    Sanjana
} from "../assets/About/officers";

function AboutNavbar() {

    const [page, setPage] = useState('mission');

    const small = useMediaQuery('(max-width: 800px)');
    const xsmall = useMediaQuery('(max-width:640px)');

    return (
        <div className="about-navbar-container">
            <div className="about-navbar">
                <div className="about-options-box">
                    <span className="about-navOption" style={{ borderBottomColor: (page == 'mission') ? '#16CF10' : '' }} onClick={() => setPage('mission')}>
                        <h2>Mission</h2>
                    </span>
                    <span className="about-navOption" style={{ borderBottomColor: (page == 'community') ? '#16CF10' : '' }} onClick={() => setPage('community')}>
                        <h2>Community</h2>
                    </span>
                    <span className="about-navOption" style={{ borderBottomColor: (page == 'sponsors') ? '#16CF10' : '' }} onClick={() => setPage('sponsors')}>
                        <h2>Sponsors</h2>
                    </span>
                    <span className="about-navOption" style={{ borderBottomColor: (page == 'team') ? '#16CF10' : '' }} onClick={() => setPage('team')}>
                        <h2>Team</h2>
                    </span>
                </div>
            </div>
            {
                (page == 'mission') ?
                    <div>
                        {(small) ?
                            <div className="flex flex-col mx-[10%]">
                                <div className="w-[50vw] mt-10 mb-10 m-auto">
                                    <img className="rounded-xl shadow-2xl shadow-[#48abe0]" src={MissionLaptop} />
                                </div>
                                <div className="lg:w-[50vw] sm:w-[100%] md:w-[100%] text-left">
                                    <h1 className="py-5 text-[3vh]">Our Mission</h1>
                                    <p>
                                        CSC is dedicated to fostering a vibrant community of computer science enthusiasts. Our mission is to harness the power of technology for positive change by creating community-based applications that address real-world challenges. We strive to inspire innovation, collaboration, and lifelong learning among our members. Guided by our core values of innovation, inclusivity, and continuous learning, we aim to empower individuals to make a meaningful impact through technology. Join us as we code for a purpose, connect minds, and build a future where technology is utilized as a tool to develop communities all around the globe.
                                    </p>
                                </div>
                            </div>
                            :
                            <div className="flex flex-row mx-[10%]">
                                <div className="w-[50vw] text-left lg:p-20 ">
                                    <h1 className="py-5 text-[3vh]">Our Mission</h1>
                                    <p>
                                        CSC is dedicated to fostering a vibrant community of computer science enthusiasts. Our mission is to harness the power of technology for positive change by creating community-based applications that address real-world challenges. We strive to inspire innovation, collaboration, and lifelong learning among our members. Guided by our core values of innovation, inclusivity, and continuous learning, we aim to empower individuals to make a meaningful impact through technology. Join us as we code for a purpose, connect minds, and build a future where technology is utilized as a tool to develop communities all around the globe.
                                    </p>
                                </div>
                                <div className="w-[50vw] p-20 m-auto">
                                    <div className="flex justify-items-center align-middle w-[10vw] h-[50vh] z-1 m-auto bg-missionBg rounded-lg shadow-2xl shadow-[#48abe0]">
                                        <img className="max-w-[20vw] -translate-x-[25%] translate-y-[15vh] z-3 absolute " src={MissionLaptop} />
                                    </div>
                                </div>
                            </div>
                        }
                    </div> :
                    (page == 'community') ?
                        <div>
                            {(small) ?
                                <>
                                    <div className="flex flex-col mx-[10%]">
                                        <div className="relative flex justify-center pt-20 m-auto">
                                            <img className="max-w-[50%] h-[50%] lg:max-w-[50%]" src={CommunityBg}></img>
                                        </div>
                                        <div className="max-w-[100%] text-left my-20">
                                            <h1 className="text-[3vh]">Building A Community.</h1>
                                            <p className="font-[Red_Hat_Display_Light]">
                                                We believe that technology has the power to build more than just applications – it can build communities. Join us on a journey of collaboration, knowledge-sharing, and collective growth as we focus on building a community that extends beyond lines of code. Beyond the screen, we foster meaningful connections, host engaging events, and provide a supportive environment for learning and collaboration. Whether you're a seasoned coder or just starting your programming journey, our community is a place where your ideas are valued, skills are honed, and friendships are forged. Together, let's not just write code; let's build a community that inspires, supports, and thrives on the shared passion for using technology to make a positive impact
                                            </p>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="flex flex-row mx-[10%]">
                                        <div className="max-w-[50vw] relative pt-20 m-auto">
                                            <img className="w-[30vw] h-[60vh]" src={CommunityBg}></img>
                                        </div>
                                        <div className="w-[50vw] text-left p-20 py-40 ">
                                            <h1 className="py-5 text-[3vh]">Building A Community.</h1>
                                            <p className="font-[Red_Hat_Display_Light]">
                                                We believe that technology has the power to build more than just applications – it can build communities. Join us on a journey of collaboration, knowledge-sharing, and collective growth as we focus on building a community that extends beyond lines of code. Beyond the screen, we foster meaningful connections, host engaging events, and provide a supportive environment for learning and collaboration. Whether you're a seasoned coder or just starting your programming journey, our community is a place where your ideas are valued, skills are honed, and friendships are forged. Together, let's not just write code; let's build a community that inspires, supports, and thrives on the shared passion for using technology to make a positive impact
                                            </p>
                                        </div>
                                    </div>
                                </>
                            }
                        </div> :
                        (page == 'sponsors') ?
                            <div>
                                {(small) ?
                                    <>
                                        <div className="flex flex-col mx-[10%]">
                                            <div className="max-w-[50vw] relative pt-20 m-auto">
                                                <img className="max-w-[50vw] rounded-xl shadow-2xl shadow-[#48abe0] z-3 " src={SponsorImg} />
                                            </div>
                                            <div className="w-[100%] text-left pt-10">
                                                <h1 className="py-5 text-[3vh]">Sponsor Change. Sponsor Us.</h1>
                                                <p>
                                                    At CSC we invite you to be a driving force behind positive change by sponsoring us in our mission to harness technology for the betterment of our community. As we innovate and create community-based applications that make a tangible impact, your support becomes an integral part of this transformative journey. By partnering with us, you're not just endorsing a club; you're investing in a future where technology serves as a catalyst for positive change. Join our community, and together, let's sponsor change. Your support fuels innovation, education, and community empowerment, making a lasting difference in the world of computer science. Be a sponsor of progress and contribute to a brighter, tech-driven future with CSC.
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="flex flex-row mx-[10%]">
                                            <div className="w-[50vw] text-left p-20 ">
                                                <h1 className="py-5 text-[3vh]">Sponsor Change. Sponsor Us.</h1>
                                                <p>
                                                    At CSC we invite you to be a driving force behind positive change by sponsoring us in our mission to harness technology for the betterment of our community. As we innovate and create community-based applications that make a tangible impact, your support becomes an integral part of this transformative journey. By partnering with us, you're not just endorsing a club; you're investing in a future where technology serves as a catalyst for positive change. Join our community, and together, let's sponsor change. Your support fuels innovation, education, and community empowerment, making a lasting difference in the world of computer science. Be a sponsor of progress and contribute to a brighter, tech-driven future with CSC.
                                                </p>
                                            </div>
                                            <div className="w-[50vw] relative pt-20 m-auto">
                                                <img className="w-[50vw] rounded-xl shadow-2xl shadow-[#48abe0] z-3 " src={SponsorImg} />
                                            </div>
                                        </div>
                                    </>
                                }
                            </div> :
                            (page == 'team') ?
                                <div>
                                    {(small) ?
                                        <>
                                            <div>
                                                <div className="m-[5vh] grid grid-cols-1">
                                                    <OfficerCard
                                                        img={Sriram}
                                                        name="Sriram M."
                                                        role="Founder/President"
                                                        email="sriram.madanapalli@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Rohan}
                                                        name="Rohan S."
                                                        role="Vice President"
                                                        email="sarakintirohan@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Tuhina}
                                                        name="Tuhina D."
                                                        role="Webmaster"
                                                        email="tuhinakdas@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Sai}
                                                        name="Sai S."
                                                        role="Event Coordinator"
                                                        email="18saisathanapalli@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Shreya}
                                                        name="Shreya G."
                                                        role="Outreach Officer"
                                                        email="Shreya.goel.0910@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Tanush}
                                                        name="Tanush C."
                                                        role="Webapp Development Curriculum Manager"
                                                        email="tanushchauhan07@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Karthik}
                                                        name="Karthik P."
                                                        role="Director of Corporate Relations"
                                                        email="sud.r.2021@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Arpit}
                                                        name="Arpit K."
                                                        role="Graphic Designer/Animator"
                                                        email="arpit.khavate@gmail.com"
                                                    />
                                                    <OfficerCard
                                                        img={Naavya}
                                                        name="Naavya V."
                                                        role="AI Development Curriculum Manager"
                                                        email="naavya.vig@gmail.com"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div>
                                                <div className="m-[5vh] grid grid-cols-3 sm:grid-cols-3">
                                                    <OfficerCard
                                                        img={Sriram}
                                                        name="Sriram M."
                                                        role="Founder/President"
                                                        email="president@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Rohan}
                                                        name="Rohan S."
                                                        role="Vice President"
                                                        email="vicepresident@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Tuhina}
                                                        name="Tuhina D."
                                                        role="Director of Web Development"
                                                        email="webdirector@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Sai}
                                                        name="Sai S."
                                                        role="Director of Event Management"
                                                        email="eventdirector@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Shreya}
                                                        name="Shreya G."
                                                        role="Director of Outreach"
                                                        email="outreachdirector@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Tanush}
                                                        name="Tanush C."
                                                        role="Director of Curriculum - Web Development"
                                                        email="webappdevdirector@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Sanjana}
                                                        name="Sanjana V."
                                                        role="Director of Marketing"
                                                        email="marketingdirector@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Arpit}
                                                        name="Arpit K."
                                                        role="Director of Design"
                                                        email="graphicsdirector@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Karthik}
                                                        name="Karthik P."
                                                        role="Director of Corporate Relations"
                                                        email="corporaterelationsdirector@cs4community.com"
                                                    />
                                                    <OfficerCard
                                                        img={Naavya}
                                                        name="Naavya V."
                                                        role="Director of Curriculum - AI Development"
                                                        email="aidevdirector@cs4community.com"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                                :
                                <></>
            }
        </div>

    )
};

export default AboutNavbar;