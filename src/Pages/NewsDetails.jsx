import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function NewDetails() {
    const [news_name, setNewsName] = useState("");
    const [news_picture, setNewsPicture] = useState("");
    const [news_date, setNewsDate] = useState("");
    const [news_details, setNewsDetails] = useState("");
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/news_detail/${id}`)
            .then(response => {
                setNewsName(response.data.message.blog_title);
                setNewsPicture(response.data.message.blog_image);
                setNewsDate(response.data.message.created_at);
                setNewsDetails(response.data.message.blog_description);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);
    const originalDateString = news_date;

    const convertDate = (originalDate) => {
        const date = new Date(originalDate);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'short' });
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    };
    const fontSizeStyle = {
        fontSize: '24px',
    };
    const formattedDate = convertDate(originalDateString);
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
                                        + (92) 335-5138907
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
                        <h1 className="title" style={{ textTransform:"capitalize" }}>{news_name}</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li style={{ textTransform:"capitalize" }}>{news_name}</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* end main-content */}
            {/*Blog Details Start*/}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <div className="blog-main-wrapper mb-0">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                                            <div className="blog-thumb ">
                                                <img src={
                                                    "http://localhost:8000/admin/assets/images/blog/" + news_picture
                                                } alt="blog-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-12">
                            <div className="blog-content-wrapper">
                                <div className="blog-meta">
                                    <div className="blog-date">
                                        <i className="flaticon-calendar" />
                                        <span className="text-muted fw-bold">{formattedDate}</span>
                                    </div>
                                    <div className="blog-user">
                                        <i className="flaticon-avatar" />
                                        <span className="fw-bold text-muted" style={{ textTransform:"capitalize" }}>{news_name}</span>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <blockquote>
                                        <p style={{ fontSize: "27px", fontWeight: "bold", fontFamily: "math" }}>
                                            <i>{"''" + news_details + "''"}</i>
                                        </p>
                                        <p className="mb-0">
                                            <span className="text-primary">----</span><cite>The Nest Academy</cite>
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Blog Details End*/}
        </>
    );
}