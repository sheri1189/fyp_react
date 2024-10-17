import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import axios from "axios";
export default function Home() {
    const [courses, setCourses] = useState([]);
    const [students, setStudents] = useState("");
    const [classes, setClasses] = useState("");
    const [teachers, setTeachers] = useState("");
    const [activeItem, setActiveItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const openVideo = () => {
        setIsOpen(true);
    };
    useEffect(() => {
        axios.get('http://localhost:8000/api/all_courses')
            .then(response => {
                setCourses(response.data.message);
                setStudents(response.data.students);
                setTeachers(response.data.teachers);
                setClasses(response.data.classes);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);
    return (
        <>
            <header className="main-header header-style-two">
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container">
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
                            <ul className="contact-info-outer">
                                <li>
                                    {/* Contact Info Box */}
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-phone-handset" />
                                        <span className="title">Call Anytime</span>
                                        <Link to="tel:0515709527" className="text">

                                            (051) 5709527
                                        </Link>
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
                                        <i className="icon fas fa-envelope" />
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
                                        <i className="icon fas fa-map-marker-alt" />
                                        <span className="title">
                                            Flat No.1,Plot No.64,Linear Commercial,Phase 8
                                        </span>
                                        <div className="text">Baharia Town,Rawalpindi,Pakistan</div>
                                    </div>
                                </li>
                            </ul>
                            {/* Mobile Nav toggler */}
                            <div className="outer-box">
                                <div className="ui-btn-outer">
                                    <Link to="http://localhost:8000/" className="ui-btn" target="_blank">
                                        <i className="fas fa-sign-in-alt" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        {/* Main box */}
                        <div className="main-box">
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
                                {/* <div className="outer-box">
                                    <div className="ui-btn-outer">
                                        <Link to="http://localhost:8000/" className="ui-btn" target="_blank">
                                            <i className="fas fa-sign-in-alt" />
                                        </Link>
                                    </div>
                                    <Link to="#" className="theme-btn btn-style-two">
                                        <span className="btn-title">Try For Free</span>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                        {/* End Main Box */}
                    </div>
                </div>
                {/* Header Lower */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <Link to="/">
                                    <img
                                        src="assets/images/logo-2.png"
                                        alt=""
                                        title=""
                                    />
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
                                <Link to="javascript:void(0)">
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">
                                    <i className="fab fa-pinterest" />
                                </Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">
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
                        <form method="post">
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
                                    <img
                                        src="assets/images/logo.png"
                                        alt=""
                                        title=""
                                    />
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
            {/*Main Slider*/}
            <section className="main-slider style-two">
                <div
                    className="rev_slider_wrapper fullwidthbanner-container"
                    id="rev_slider_one_wrapper"
                    data-source="gallery"
                >
                    <div
                        className="rev_slider fullwidthabanner"
                        id="rev_slider_one"
                        data-version="5.4.1"
                    >
                        <ul>
                            {/* Slide 1 */}
                            <li data-index="rs-1" data-transition="zoomout">
                                {/* MAIN IMAGE */}
                                <img
                                    src="assets/images/main-slider/1.jpg"
                                    alt=""
                                    className="rev-slidebg"
                                />
                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-1 big-ipad-hidden"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['-260','-50','0','150']"
                                    data-voffset="['-20','120','120','120']"
                                    data-x="['right','right','right','right']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                ></div>
                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-2 big-ipad-hidden"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['-300','-120','-120','-120']"
                                    data-voffset="['200','100','100','100']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure>
                                        <img
                                            src="assets/images/main-slider/icon/icon-plane.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-1 big-ipad-hidden"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['-40','120','120','120']"
                                    data-voffset="['-160','100','100','100']"
                                    data-x="['center','center','center','center']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure>
                                        <img
                                            src="assets/images/main-slider/icon/icon-dots-3.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <div
                                    className="tp-caption tp-resizeme"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['-160','-70','-250','-450']"
                                    data-voffset="['70','40','60','60']"
                                    data-x="['right','right','right','right']"
                                    data-y="['bottom','bottom','bottom','bottom']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure className="main-image">
                                        <img
                                            src="assets/images/main-slider/hero-02.png"
                                            alt="img not found"
                                        />
                                    </figure>
                                </div>
                                <div
                                    className="tp-caption tp-resizeme rs-parallaxlevel-1 ipad-hidden big-ipad-hidden"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['100','-50','0','150']"
                                    data-voffset="['210','120','120','120']"
                                    data-x="['center','center','center','center']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":2000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure>
                                        <img
                                            src="assets/images/main-slider/icon/icon-paper-pin.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <div
                                    className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="auto"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['-195','-100','-100','-100']"
                                    data-voffset="['250','-190','-190','-190']"
                                    data-x="['right','right','right','right']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-frames='[{"from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure>
                                        <img
                                            src="assets/images/main-slider/icon/icon-sheild.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[15,15,15,15]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['750','750','750','750']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['-205','-190','-210','-220']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <span className="title"></span>
                                </div>
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['750','750','750','450']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['-55','-50','-50','-90']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <h1>
                                        Best <span className="style-font">learning</span> <br />
                                        courses from <br />
                                        The Nest Academy
                                    </h1>
                                </div>
                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['750','750','750','450']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['110','100','100','65']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    <div className="text mt-5">
                                        <strong className="text-dark fw-bold me-1">In The Nest Academy</strong>
                                        we educate the best courses for the learning, training <br /> and development of students by top teachers.
                                    </div>
                                    <ul
                                        style={{
                                            fontSize: 15,
                                            fontWeight: "bold",
                                            color: "#212529"
                                        }}
                                    >
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            <span className="ms-1">Course Certificate</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            <span className="ms-1">Cooperative and Experienced Staff</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle" />
                                            <span className="ms-1">Career Counseling</span>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="tp-caption mt-5"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[15,15,15,15]"
                                    data-paddingright="[15,15,15,15]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['700','750','700','450']"
                                    data-whitespace="normal"
                                    data-hoffset="['0','0','0','0']"
                                    data-voffset="['200','185','200','185']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                >
                                    {/* <Link
                                        to="/courses"
                                        className="theme-btn btn-style-one bg-theme-color2 mt-5"
                                    >
                                        Find Course
                                    </Link> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Main Slider*/}
            {/* About Section Three */}
            <section className="about-section-three pt-40">
                <div className="auto-container">
                    <div className="row">
                        <div
                            className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight"
                            data-wow-delay="600ms"
                        >
                            <div className="inner-column">
                                <div className="anim-icons">
                                    <span className="icon icon-dots-5 bounce-x" />
                                    <span className="icon icon-dots-3 bounce-y" />
                                    <span className="icon icon-star-2 spin-one" />
                                </div>
                                <div className="sec-title">
                                    <span className="sub-title">About the academy</span>
                                    <h2>Increase Your Education Level with the Nest Academy</h2>
                                    <div className="text">
                                        All students are empowered to learn and achieve, experiencing high quality teaching practice that promotes learning and wellbeing, equipping them with the knowledge, skills and dispositions for lifelong learning and to shape the world around them."
                                        We offer fresh courses on emerging topics that keep your level updated.
                                    </div>
                                </div>
                                <ul className="list-style-two">
                                    <li>
                                        <i className="icon fa fa-book" /> Experienced & Qualified Teachers.
                                    </li>
                                    <li>
                                        <i className="icon fa fa-book" /> Effective Leadership.
                                    </li>
                                    <li>
                                        <i className="icon fa fa-book" /> Career Counseling.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="anim-icons">
                                    <span className="icon icon-percent bounce-y" />
                                    <span className="icon icon-star-1 spin-one" />
                                    <span className="icon icon-dots-4 bounce-x" />
                                    <span className="icon icon-wave" />
                                    <span className="icon icon-idea bounce-y" />
                                </div>
                                <figure className="image overlay-anim wow fadeInUp">
                                    <img
                                        src="assets/images/new_images/mam_farhat.jpg"
                                        alt="" style={{ borderTopRightRadius: "70px", borderBottomLeftRadius: "70px", boxShadow: '9px 12px 10px 6px rgba(232,228,228,0.6)' }}
                                    />
                                </figure>
                                <div className="author-info bounce-x">
                                    <h3 className="name">Farhat Babar</h3>
                                    <span className="designation">Principal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Emd About Section Three */}
            {/* Fun Fact Section */}
            <section className="fun-fact-section pt-0">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            {/* Counter block*/}
                            <div className="counter-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <div className="count-box">
                                        <span className="count-text">
                                            {students}
                                        </span>
                                    </div>
                                    <h6 className="counter-title">Student Enrolled</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div
                                className="counter-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="inner">
                                    <div className="count-box">
                                        <span className="count-text">
                                            {classes}
                                        </span>
                                    </div>
                                    <h6 className="counter-title">Total Classes</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div
                                className="counter-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                                data-wow-delay="600ms"
                            >
                                <div className="inner">
                                    <div className="count-box">
                                        <span className="count-text">
                                            {teachers}
                                        </span>
                                    </div>
                                    <h6 className="counter-title">Top Instructors</h6>
                                </div>
                            </div>
                            {/*Counter block*/}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Fun Fact Section */}
            {/* Courses Section */}
            <section className="courses-section-two">
                <div className="auto-container">
                    <div className="anim-icons">
                        <span className="icon icon-e wow zoomIn" />
                        <span className="icon icon-group-1 bounce-y" />
                        <span className="icon icon-group-2 bounce-y" />
                    </div>
                    <div className="sec-title text-center">
                        <span className="sub-title">popular courses</span>
                        <h2>
                            Select a course to
                            <br /> get started your study
                        </h2>
                    </div>
                    <div className="row">
                        {courses.map(course => (
                            <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link to={`/course/details/${course.id}`}>
                                                <img
                                                    src={
                                                        "http://localhost:8000/admin/assets/images/courses/" +
                                                        course.course_picture
                                                    }
                                                    alt=""
                                                    style={{ height: 187 }}
                                                />
                                            </Link>
                                        </figure>
                                        <span className="price">Rs. {course.course_price.split("-")[1]}</span>
                                        <div className="value">Advanced</div>
                                    </div>
                                    <div className="content-box">
                                        <ul className="course-info">
                                            <li>
                                                <i className="fa fa-users" /> 20 Students
                                            </li>
                                            <li>
                                                <i className="fa fa-clock" />{course.course_duration + " Months"}
                                            </li>
                                            <li>
                                                <i className="fas fa-money-bill-wave-alt" /> Rs. {course.course_price}
                                            </li>
                                        </ul>
                                        <h5 className="title">
                                            <Link to={`/course/details/${course.id}`}>
                                                {course.course_title.charAt(0).toUpperCase() + course.course_title.slice(1)}
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* End Courses Section*/}
            {/* FAQ Section */}
            <section className="faqs-section">
                <div
                    className="bg-image"
                    style={{ backgroundImage: "url(assets/images/background/5.jpg)" }}
                />
                <div className="auto-container">
                    <div className="row">
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="faq-bg" />
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our FAQs</span>
                                    <h2>Frequently asked questions?</h2>
                                </div>
                                <ul className="accordion-box wow fadeInRight">
                                    {/* FAQ Item 1 */}
                                    <li className={`accordion block ${activeItem === 1 ? 'active-block' : ''}`}>
                                        <div className="acc-btn" onClick={() => setActiveItem(1)}>
                                            How can I contact academy?
                                            <div className="icon fa fa-angle-right" />
                                        </div>
                                        <div className={`acc-content ${activeItem === 1 ? 'current' : ''}`}>
                                            <div className="content">
                                                <div className="text">
                                                    You can contact academy through email <Link to="mailto:itsme.shaharyar@gmail.com" className="text-primary">itsme.shaharyar@gmail.com</Link> or by calling (051) 5709527 + (92) 335-5138907.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* FAQ Item 2 */}
                                    <li className={`accordion block ${activeItem === 2 ? 'active-block' : ''}`}>
                                        <div className="acc-btn" onClick={() => setActiveItem(2)}>
                                            Where is academy located?
                                            <div className="icon fa fa-angle-right" />
                                        </div>
                                        <div className={`acc-content ${activeItem === 2 ? 'current' : ''}`}>
                                            <div className="content">
                                                <div className="text">
                                                    The academy is located on the Flat No.1,Plot No.64,Linear Commercial,Phase 8,Baharia Town,Rawalpindi,Pakistan
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* FAQ Item 3 */}
                                    <li className={`accordion block ${activeItem === 3 ? 'active-block' : ''}`}>
                                        <div className="acc-btn" onClick={() => setActiveItem(3)}>
                                            Do I get a certificate after completing the course?
                                            <div className="icon fa fa-angle-right" />
                                        </div>
                                        <div className={`acc-content ${activeItem === 3 ? 'current' : ''}`}>
                                            <div className="content">
                                                <div className="text">
                                                    Upon successful completion of the course, students will be issued a certificate
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* FAQ Item 4 */}
                                    <li className={`accordion block ${activeItem === 4 ? 'active-block' : ''}`}>
                                        <div className="acc-btn" onClick={() => setActiveItem(4)}>
                                            How do you support students who are entering The Academy adjust to the high expectations?
                                            <div className="icon fa fa-angle-right" />
                                        </div>
                                        <div className={`acc-content ${activeItem === 4 ? 'current' : ''}`}>
                                            <div className="content">
                                                <div className="text">
                                                    Our teachers have the ability to assess each student’s understanding on a continual basis and to differentiate instruction accordingly. If a student needs extra support, this need will be identified quickly, communicated to the student’s parents, and parents and teacher will collaborate to identify a learning plan.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 text-center pt-5">
                            <figure className="image mt-5">
                                <img
                                    className="mt-5"
                                    src="assets/images/new_images/questions.jpeg"
                                    alt=""
                                    style={{
                                        borderRadius: 20,
                                        boxShadow: "10px 16px 12px 3px rgba(214,206,206,0.51)",
                                        WebkitBoxShadow: "10px 16px 12px 3px rgba(214,206,206,0.51)",
                                        MozBoxShadow: "10px 16px 12px 3px rgba(214,206,206,0.51)"
                                    }}
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            {/*End FAQ Section */}
            {/* Video Section */}
            <section className="video-section">
                <div
                    className="bg-image"
                    style={{ backgroundImage: "url(assets/images/background/dark5.jpg)" }}
                />
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <h2 className="title">
                                Take a video tour to learn
                                <br /> intro of the nest academy
                            </h2>
                            <button
                                onClick={openVideo}
                                className="theme-btn btn-style-one bg-theme-color3"
                            >
                                Take a Tour
                            </button>
                        </div>
                        <div className="video-box wow fadeInUp">
                            <span className="float-icon icon-arrow-2" />
                            <a
                                onClick={openVideo}
                                className="play-btn lightbox-image"
                            >
                                <i className="icon fa fa-play play-btn" />
                            </a>
                        </div>
                    </div>
                </div>
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="0JmySpqBjl8"
                    onClose={() => setIsOpen(false)}
                />
            </section>
            <section className="features-section-two pt-40">
                <div className="anim-icons">
                    <span className="icon icon-shape-1 zoom-one" />
                    <span className="icon icon-shape-2 zoom-one" />
                    <span className="icon icon-e zoom-one" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our Advantages</span>
                        <h2>
                            You’ve come to the right <br />
                            place to learn
                        </h2>
                    </div>
                    <div className="row">
                        {/* Feature Block */}
                        <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box ">
                                <figure className="image">
                                    <img
                                        src="assets/images/new_images/courses.jpg"
                                        alt=""
                                        style={{ borderRadius: 10, height: 249 }}
                                    />
                                </figure>
                                <h4 className="title">
                                    <Link to="/about">Fresh Courses On Emerging Topics</Link>
                                </h4>
                                <div className="text">
                                    We have Top Instructors for teaching you Fresh Courses On Emerging Topics to keep your level updated.
                                </div>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                            data-wow-delay="400ms"
                        >
                            <div className="inner-box ">
                                <figure className="image">
                                    <img
                                        src="assets/images/new_images/6.jpg"
                                        alt=""
                                        style={{ borderRadius: 10, height: 249 }}
                                    />
                                </figure>
                                <h4 className="title">
                                    <Link to="/about">Separate Classroom for enhancing learing enviroment</Link>
                                </h4>
                                <div className="text">
                                    Whether you want to learn or to share what you know, you’ve come
                                    to the right place.
                                </div>
                            </div>
                        </div>
                        {/* Feature Block */}
                        <div
                            className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                            data-wow-delay="800ms"
                        >
                            <div className="inner-box ">
                                <figure className="image">
                                    <img
                                        src="assets/images/new_images/5.jpeg"
                                        alt=""
                                        style={{ borderRadius: 10, height: 249 }}
                                    />
                                </figure>
                                <h4 className="title">
                                    <Link to="/about">Career Counseling</Link>
                                </h4>
                                <div className="text">
                                    Career counseling in academic institutions is vital for guiding students in making informed decisions about their future. It facilitates career exploration, helps set and plan realistic goals, assesses and enhances skills.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Section Two*/}
            {/* About Section Four */}
            <section className="about-section-four">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Over 6 years in distant learning for skills</h2>
                                    <div className="text">
                                        Adaptability is a hallmark of great teachers, as they adjust
                                        their teaching methods to accommodate diverse learning styles
                                        and changing educational landscapes
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <i className="icon fa fa-phone" />
                                    <h6 className="title">Have any question?</h6>
                                    <div className="info">
                                        Call us now:
                                        <Link to="tel:923355138907" className="text">
                                            +(92) 335-5138907
                                        </Link>
                                    </div>
                                </div>
                                <div className="counter-info-box">
                                    <div className="inner">
                                        <div className="count-box">
                                            <span className="count-text" data-speed={5000} data-stop={45}>
                                                {students}
                                            </span>
                                        </div>
                                        <div className="text">students are enrolled in our academy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image" style={{ height: 643 }}>
                                        <img
                                            src="assets/images/new_images/a5.jpg"
                                            alt=""
                                            style={{ height: 643 }}
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section Four */}
            {/* Event Section*/}
            <section className="event-section">
                <div className="anim-icons">
                    <span className="icon icon-dotted-map-3" />
                </div>
                <div className="auto-container">
                    <div className="sec-title-outer">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="sec-title">
                                    <span className="sub-title">Latest Events</span>
                                    <h2>
                                        Our Upcoming
                                        <br /> Events List
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="text">
                                    Events connect us, inspire us, and allow us to experience the
                                    extraordinary.Every great event starts with an idea, but it's the
                                    execution that separates the remarkable from the mediocre..
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img
                                                src="assets/images/new_images/2.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <h5 className="title">
                                        <Link to="#">Starting IELTS Course</Link>
                                    </h5>
                                    <ul className="post-info">
                                        <li>
                                            <strong style={{ fontWeight: 'bold' }}>Location:</strong>  Flat No.1,Plot No.64,Linear Commercial,Phase 8 <br />
                                            <strong>Baharia Town,Rawalpindi,Pakistan</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img
                                                src="assets/images/new_images/3.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <h5 className="title">
                                        <Link to="#">
                                            Starting NAT, NET, MD-CAT, E-CAT, etc. Course
                                        </Link>
                                    </h5>
                                    <ul className="post-info">
                                        <li>
                                            <strong style={{ fontWeight: 'bold' }}>Location:</strong>  Flat No.1,Plot No.64,Linear Commercial,Phase 8 <br />
                                            <strong>Baharia Town,Rawalpindi,Pakistan</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img
                                                src="assets/images/new_images/4.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <h5 className="title">
                                        <Link to="#">
                                            Starting Amazon(Virtrual Assistant) Course
                                        </Link>
                                    </h5>
                                    <ul className="post-info">
                                        <li>
                                            <strong style={{ fontWeight: 'bold' }}>Location:</strong>  Flat No.1,Plot No.64,Linear Commercial,Phase 8 <br />
                                            <strong>Baharia Town,Rawalpindi,Pakistan</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Event Block */}
                        <div className="event-block col-lg-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img
                                                src="assets/images/new_images/6.jpg"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                    <h5 className="title">
                                        <Link to="#">
                                            Starting freelancing Course
                                        </Link>
                                    </h5>
                                    <ul className="post-info">
                                        <li>
                                            <strong style={{ fontWeight: 'bold' }}>Location:</strong>  Flat No.1,Plot No.64,Linear Commercial,Phase 8 <br />
                                            <strong>Baharia Town,Rawalpindi,Pakistan</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Event Section*/}
        </>
    );
}