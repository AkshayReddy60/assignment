import React, { useState, useEffect } from "react";
import './navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <h1 className={`his ${isScrolled ? 'hidden' : ''}`}>HISTAY</h1>
                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    &#9776; 
                </div>
                
                <div className={`navnames ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link className="namess" to="home" spy={true} smooth={true} offset={-100} duration={500}>HOME</Link>
                    <Link className="namess" to="aboutus" spy={true} smooth={true} offset={-100} duration={500}>ABOUT US</Link>
                    <Link className="namess" to="destination" spy={true} smooth={true} offset={-100} duration={500}>DESTINATION</Link>
                    <Link className="namess" to="packages" spy={true} smooth={true} offset={-100} duration={500}>PACKAGES</Link>
                    <Link className="namess" to="contactus" spy={true} smooth={true} offset={-100} duration={500}>CONTACT US</Link>
                </div>
                
                <button className="butt">HI, GUEST</button>
            </nav>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <Link className="namess" to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMobileMenu}>HOME</Link>
                <Link className="namess" to="aboutus" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMobileMenu}>ABOUT US</Link>
                <Link className="namess" to="destination" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMobileMenu}>DESTINATION</Link>
                <Link className="namess" to="packages" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMobileMenu}>PACKAGES</Link>
                <Link className="namess" to="contactus" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMobileMenu}>CONTACT US</Link>
            </div>
        </>
    );
}

export default Navbar;
