import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="main-footer">
            <div
                className="bg-image zoom-two"
                style={{ backgroundImage: "url(./assets/images/background/4.jpg)" }}
            />
            {/*Widgets Section*/}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        {/*Footer Column*/}
                        <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                            <div className="footer-widget about-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img
                                            src="assets/images/logo.png"
                                            alt="logo"
                                            style={{ height: 90 }}
                                        />
                                    </a>
                                </div>
                                <div className="text">Get best courses from us</div>
                                <ul className="social-icon-two">
                                    <li>
                                        <Link to="https://web.facebook.com/thenestacademy101?mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank">
                                            <i className="fab fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="itsme.shaharyar@gmail.com">
                                            <i className="fas fa-envelope" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/thenestacademy101/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*Footer Column*/}
                        <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <h4 className="widget-title">Explore</h4>
                                <ul className="user-links">
                                    <li>
                                        <Link to="/contact">Contacts</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*Footer Column*/}
                        <div className="footer-column col-xl-2 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget">
                                <h4 className="widget-title">Links</h4>
                                <ul className="user-links">
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
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*Footer Column*/}
                        <div className="footer-column col-xl-5 col-lg-4 col-md-6 col-sm-12">
                            <div className="footer-widget contact-widget">
                                <h4 className="widget-title">Contact</h4>
                                <div className="widget-content">
                                    <ul className="contact-info">
                                        <li>
                                            <i className="fa fa-phone-square" />{" "}
                                            <a href="tel:923355138907">
                                                + (92) 335-5138907{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" />{" "}
                                            <a href="mailto:itsme.shaharyar@gmail.com">
                                                itsme.shaharyar@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker-alt" /> Flat No.1,Plot
                                            No.64,Linear Commercial,Phase 8,Baharia
                                            Town,Rawalpindi,Pakistan
                                        </li>
                                    </ul>
                                    {/* <div className="subscribe-form">
                                        <form method="post" action="#">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="email"
                                                    defaultValue=""
                                                    placeholder="Email Address"
                                                    required=""
                                                />
                                                <button type="button" className="theme-btn btn-style-one">
                                                    <i className="fa fa-long-arrow-alt-right" />
                                                </button>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">
                            © Copyright by <a href="/">thenestacademy.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}