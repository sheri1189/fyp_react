import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", subject);
        formData.append("message", message);
        try {
            const response = await axios.post("http://localhost:8000/api/add_contacts", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            if (response.data.success == "insert") {
                setName("");
                setEmail("");
                setSubject("");
                setContact("");
                setMessage("");
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'Your Query Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <header className="main-header header-style-one">
                {/* Main box */}
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
                    {/*Nav Box*/}
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
                        {/* Main Menu End*/}
                        <div className="outer-box">
                            <Link to="tel:+923355138907" className="info-btn">
                                <i className="icon fa fa-phone" />
                                <small>Call Anytime</small>
                                <br /> +92 (333) - 55138907
                            </Link>
                            <div className="ui-btn-outer">
                                {/* <button className="ui-btn ui-btn search-btn">
                                    <span className="icon lnr lnr-icon-search" />
                                </button> */}
                                <Link to="http://localhost:8000/" className="ui-btn" target="_blank">
                                    <i className="fas fa-sign-in-alt" />
                                </Link>
                                {/* <Link to="#" className="theme-btn btn-style-two">
                                    <span className="btn-title">Try For Free</span>
                                </Link> */}
                            </div>
                            {/* <Link to="#" className="theme-btn btn-style-one">
                                <span className="btn-title">Try For Free</span>
                            </Link> */}
                            {/* <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <span className="icon lnr-icon-bars" />
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* End Main Box */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
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
                            {/*Keep This Empty / Menu will come through Javascript*/}
                        </ul>
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link
                                        to="tel:923355138907"
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
                                    <Link
                                        to="mailto:itsme.shaharyar@gmail.com"
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
                        <h1 className="title">Contact</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Contact Details Start*/}
            <section className="contact-details">
                <div className="container ">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="sec-title">
                                <span className="sub-title">Send us email</span>
                                <h2>Feel free to write</h2>
                            </div>
                            {/* Contact Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="text" value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control required email"
                                                type="email"
                                                placeholder="Enter Email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className="form-control required"
                                                type="text"
                                                placeholder="Enter Subject"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                                className="form-control"
                                                type="text"
                                                placeholder="Enter Phone"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="form-control required"
                                        rows={7}
                                        placeholder="Enter Message"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        name="form_botcheck"
                                        className="form-control"
                                        type="hidden"
                                        defaultValue=""
                                    />
                                    <button
                                        type="submit"
                                        className="theme-btn btn-style-one"
                                    >
                                        <span className="btn-title">Send message</span>
                                    </button>
                                </div>
                            </form>
                            {/* Contact Form Validation*/}
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-details__right">
                                <div className="sec-title">
                                    <span className="sub-title">Need any help?</span>
                                    <h2>Get in touch with us</h2>
                                    <div className="text">If you have any query. Need Help?</div>
                                </div>
                                <ul className="list-unstyled contact-details__info">
                                    <li>
                                        <div className="icon bg-theme-color2">
                                            <span className="lnr-icon-phone-plus" />
                                        </div>
                                        <div className="text">
                                            <h6>Have any question?</h6>
                                            <Link to="tel:923355138907">
                                                + (92) 335-5138907{" "}
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="lnr-icon-envelope1" />
                                        </div>
                                        <div className="text">
                                            <h6>Write email</h6>
                                            <Link to="mailto:itsme.shaharyar@gmail.com">
                                                itsme.shaharyar@gmail.com
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="lnr-icon-location" />
                                        </div>
                                        <div className="text">
                                            <h6>Visit anytime</h6>
                                            <span>Phase 8,Baharia Town,Rawalpindi,Pakistan</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Contact Details End*/}
            {/* Divider: Google Map */}
            <section>
                <div className="container-fluid p-0">
                    <div className="row">
                        {/* Google Map HTML Codes */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.022089877751!2d73.105217!3d33.5008024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff36e0e5f1397%3A0x8a7c7e7c0ac67555!2sThe%20Nest%20Academy!5e0!3m2!1sen!2s!4v1696369942902!5m2!1sen!2s"
                            data-tm-width="100%"
                            height={500}
                            frameBorder={0}
                            allowFullScreen=""
                        />
                    </div>
                </div>
            </section>

        </>
    );
}