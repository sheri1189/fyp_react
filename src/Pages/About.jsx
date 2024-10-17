import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function About() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
            <header className="main-header header-style-one">
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo">
                            <Link to="/">
                                <img
                                    src="assets/images/logo.png"
                                    alt=""
                                    title="Tronis"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <ul className="navigation">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/instructor">Instructor</Link>
                                </li>
                                <li>
                                    <Link to="/courses">Courses</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="dropdown">
                                    <Link to="#">News</Link>
                                    <ul>
                                        <li>
                                            <Link to="/news">Latest News</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="outer-box">
                            <Link to="tel:+923355138907" className="info-btn">
                                <i className="icon fa fa-phone" />
                                <small>Call Anytime</small>
                                <br /> +92 (333) - 55138907
                            </Link>
                            <div className="ui-btn-outer">
                                <Link to="http://localhost:8000/" className="ui-btn" target="_blank">
                                    <i className="fas fa-sign-in-alt" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <div className="menu-backdrop" />
                        <nav className="menu-box">
                            <div className="upper-box">
                                <div className="nav-logo">
                                    <Link to="/">
                                        <img src="assets/images/logo-2.png" alt="" title="" />
                                    </Link>
                                </div>
                                <div className="close-btn">
                                    <i className="icon fa fa-times" />
                                </div>
                            </div>
                            <ul className="navigation clearfix">
                            </ul>
                            <ul className="contact-list-one">
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-phone-handset" />
                                        <span className="title">Call Now</span>
                                        <Link to="tel:923355138907"
                                            className="text"
                                            style={{ marginLeft: "-11px" }}
                                        >
                                            + (92) 335-5138907{" "}
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <span className="icon lnr-icon-envelope1" />
                                        <span className="title">Send Email</span>
                                        <Link to="mailto:itsme.shaharyar@gmail.com"
                                            className="text"
                                        >
                                            itsme.shaharyar@gmail.com
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <span className="icon lnr-icon-clock" />
                                        <span className="title">Send Email</span>
                                        Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                    </div>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <Link to="#">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fab fa-pinterest" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
                {/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search">
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form
                            method="post"
                            action="##"
                        >
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="search-field"
                                    defaultValue=""
                                    placeholder="Search..."
                                    required=""
                                />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link to="/" title="">
                                    <img src="assets/images/logo.png" alt="" title="" />
                                </Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <ul className="navigation clearfix">
                                            {/*Keep This Empty / Menu will come through Javascript*/}
                                        </ul>
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler">
                                    <Link to="http://localhost:8000/" className="ui-btn" target="_blank">
                                        <i className="fas fa-sign-in-alt" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
            </header>
            {/* Start main-content */}
            <section
                className="page-title"
                style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}
            >
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">About Us</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* end main-content */}
            {/* About Section */}
            <section className="about-section">
                <div className="anim-icons">
                    <span className="icon icon-dotted-map" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div
                            className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight"
                            data-wow-delay="600ms"
                        >
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Get to know us</span>
                                    <h2>Grow Your Skills And Learn With Us</h2>
                                    <div className="text">
                                        Helping students gain skills and providing Career Counseling. We often take a back seat to business priorities for contributing towards better education place.
                                    </div>
                                </div>
                                <ul className="list-style-one two-column">
                                    <li>
                                        <i className="icon fa fa-check" /> Expert trainers
                                    </li>
                                    <li>
                                        <i className="icon fa fa-check" /> Great results
                                    </li>
                                </ul>
                                {/* <div className="btn-box">
                                    <Link to="/about" className="theme-btn btn-style-one">
                                        <span className="btn-title">Discover more</span>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="anim-icons">
                                <span className="icon icon-dotted-map-2" />
                                <span className="icon icon-paper-plan" />
                                <span className="icon icon-dotted-line" />
                            </div>
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp">
                                    <img
                                        src="assets/images/resource/about-1.jpeg"
                                        alt=""
                                    />
                                </figure>
                                <div className="experience bounce-y">
                                    <span className="count">6+</span> Years of Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Emd About Section */}
            {/* Features Section */}
            <section className="features-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Feature Block */}
                        <div className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                            <div className="inner-box ">
                                <i className="icon flaticon-online-learning" />
                                <h5 className="title">
                                    Top
                                    <br /> Instructors
                                </h5>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="400ms"
                        >
                            <div className="inner-box ">
                                <i className="icon flaticon-elearning" />
                                <h5 className="title">
                                    Experienced
                                    <br /> Management
                                </h5>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="800ms"
                        >
                            <div className="inner-box ">
                                <i className="icon flaticon-web-2" />
                                <h5 className="title">
                                    Parent-Teacher <br />
                                    Coordination
                                </h5>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                            data-wow-delay="1200ms"
                        >
                            <div className="inner-box ">
                                <i className="icon flaticon-users" />
                                <h5 className="title">
                                Separate Classrooms for <br />
                                enhancing learning environment
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Section*/}
        </>
    );
}