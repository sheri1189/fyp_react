import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
export default function InstructorDetails() {
    const [instructor_name, setInstructorName] = useState("");
    const [instructor_email, setInstructorEmail] = useState("");
    const [instructor_skills, setInstructorSkills] = useState("");
    const [teacher_picture, setTeacherPicture] = useState("");
    const [teacher_experience, setTeacherExperience] = useState("");
    const [teacher_degree, setTeacherDegree] = useState("");
    const [teacher_program, setTeacherProgram] = useState("");
    const [teacher_univeristy, setTeacherUniveristy] = useState("");
    const [teacher_year, setTeacherYear] = useState("");
    const { id } = useParams();
    // const [listening_progress, setListeningProgress] = useState(0);
    // useEffect(() => {
    //     const listeninginterval = setInterval(() => {
    //         if (listening_progress < 90) {
    //             setListeningProgress(listening_progress + 1);
    //         } else {
    //             clearInterval(listeninginterval);
    //         }
    //     }, 90);
    //     return () => {
    //         clearInterval(listeninginterval);
    //     };
    // }, [listening_progress]);
    // const [designing_progress, setDesigningProgress] = useState(0);
    // useEffect(() => {
    //     const designinginterval = setInterval(() => {
    //         if (designing_progress < 80) {
    //             setDesigningProgress(designing_progress + 1);
    //         } else {
    //             clearInterval(designinginterval);
    //         }
    //     }, 80);
    //     return () => {
    //         clearInterval(designinginterval);
    //     };
    // }, [designing_progress]);
    // const [learning_progress, setLearningProgress] = useState(0);
    // useEffect(() => {
    //     const learninginterval = setInterval(() => {
    //         if (learning_progress < 95) {
    //             setLearningProgress(learning_progress + 1);
    //         } else {
    //             clearInterval(learninginterval);
    //         }
    //     }, 80);
    //     return () => {
    //         clearInterval(learninginterval);
    //     };
    // }, [learning_progress]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/instructor_detail/${id}`)
            .then(response => {
                setInstructorName(response.data.message.name);
                setInstructorEmail(response.data.message.email);
                setInstructorSkills(response.data.array_skills);
                setTeacherPicture(response.data.message.teacher_picture);
                setTeacherExperience(response.data.message.teacher_experience);
                setTeacherDegree(response.data.message.teacher_degree);
                setTeacherProgram(response.data.message.teacher_program);
                setTeacherUniveristy(response.data.message.teacher_univeristy);
                setTeacherYear(response.data.message.teacher_year);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);
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
                                    <Link to="javascript:void(0)">News</Link>
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
                        <form
                            method="post"
                            action="###"
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
                style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
            >
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">{instructor_name}</h1>
                        <ul className="page-breadcrumb">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>{instructor_name}</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* end main-content */}
            {/*Team Details Start*/}
            <section className="team-details">
                <div className="container pb-100">
                    <div className="team-details__top pb-70">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-left">
                                    <div className="team-details__top-img">

                                        <img
                                            src={
                                                "http://localhost:8000/admin/assets/images/instructors/" +
                                                teacher_picture
                                            }
                                            alt=""
                                        />
                                        <div className="team-details__big-text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__top-right">
                                    <div className="team-details__top-content">
                                        <h3 className="team-details__top-name">{instructor_name}</h3>
                                        <strong className="team-details__top-title fw-bold">
                                            {Object.entries(instructor_skills).map(([key, value]) => {
                                                if (key.includes(instructor_name)) {
                                                    const counter = key.split('_')[1];
                                                    return (
                                                        <span key={key} className="designation">
                                                            {value},
                                                        </span>
                                                    );
                                                }
                                                return null;
                                            })} Teacher
                                        </strong>
                                        <div className="team-details__social">
                                            <Link to={`mailto:${instructor_email}`}>
                                                <i className="fas fa-envelope" />
                                            </Link>
                                        </div>
                                        <p className="team-details__top-text-1">
                                            I help my students stand out and <br /> they help me grow.
                                        </p>
                                        <p className="team-details__top-text-3">
                                            A good teacher is like a candle—it consumes itself to light the way for others.
                                            "It's the teacher that makes the difference, not the classroom.
                                        </p>
                                        <p className="team-details__top-text-2">
                                            Teaching is more than imparting knowledge; it is inspiring change. Learning is more than absorbing facts; it is acquiring understanding.
                                            Teachers have three loves: love of learning, love of learners, and the love of bringing the first two loves together.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-details__bottom pt-100">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-left">
                                    <h4 className="team-details__bottom-left-title">
                                        Professional Experience
                                    </h4>
                                    <p className="team-details__bottom-left-text">
                                        I have a <strong className="text-muted fw-bold">{teacher_experience}</strong> experience.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="col-xl-6 col-lg-6">
                                <div className="team-details__bottom-right">
                                    <div className="team-details__progress">
                                        <div className="team-details__progress-single">
                                            <h4 className="team-details__progress-title">Lessening</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: `${listening_progress}%` }}>
                                                    <div className="count-text">{listening_progress}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-details__progress-single">
                                            <h4 className="team-details__progress-title">Designe</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar bg-success" style={{ width: `${designing_progress}%` }}>
                                                    <div className="count-text">{designing_progress}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-details__progress-single">
                                            <h4 className="team-details__progress-title">Learning</h4>
                                            <div className="bar marb-0">
                                                <div className="bar-inner count-bar bg-danger" style={{ width: `${learning_progress}%` }}>
                                                    <div className="count-text">{learning_progress}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/*Team Details End*/}
        </>
    );
}