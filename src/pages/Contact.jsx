import React from 'react';
import '../styles/Contact.css'
import InstagramIcon from "../assets/Contact/instagram.png"
import LinkedInIcon from "../assets/Contact/linkedin.png"
import { Link } from 'react-router-dom'

// TODO: build contact form with Email.js

function Contact() {

    return (
        <div className="contactBox" style={{ backgroundColor: "rgb(231, 240, 253)", height: "100vh" }}>
            <h1 className="contact-text">Contact Us</h1>
            <div className="contact-paragraph">
                <p >If you want to reach out to us for any reason, including requests to start a chapter, sponsor, or partner with us, please fill out the contact form or send us an email and we will get back to you as soon as we can. Make sure to also follow us on social media so you can be updated on any CSC news!</p>
            </div>
            <span className="contactInfoBox">
                <div className="emailBox" style={{ textAlign: "left" }}>
                    <p>Email Us:</p>
                    <Link className="emailText link" target="_blank" rel="noopener noreferrer" to="mailto:csc.org.contact@gmail.com">
                        <p>csc.org.contact@gmail.com</p>
                    </Link>
                </div>
                <div className="socialBox" style={{ textAlign: "right" }}>
                    <p>Social Media</p>
                    <div className="socialIcons">
                        <Link className="link" target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/company/computer-science-for-community/">
                            <img className="linkedinIcon" src={LinkedInIcon} />
                        </Link>
                        <Link className="link" target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/csc.organization/">
                            <img className="instagramIcon" src={InstagramIcon} />
                        </Link>
                    </div>
                </div>
            </span>
        </div>
    )
};

export default Contact;