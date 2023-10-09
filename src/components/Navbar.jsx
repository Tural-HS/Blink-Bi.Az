import React, { Component } from "react";

// Logo
import Logo from "../images/logo.png";
import stickyLogo from "../images/sticky-logo.png";

import { Link, NavLink, withRouter } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import "./AnimatedSignInButton.css";

import Dropdown from "react-bootstrap/Dropdown";
import {
  FaSearch,
  FaGlobe,
  FaAngleDown,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { withTranslation } from "react-i18next"; // Import the withTranslation HOC

//import image
import Flag1 from "../images/flag1.png";
import Flag2 from "../images/flag2.png";
import Flag3 from "../images/flag3.png";
import Flag4 from "../images/flag4.png";

import KPI from "../images/media/KPI nav.svg";

import CHR from "../images/media/CHR nav.svg";

import BBY from "../images/media/BBY nav.svg";

import RM from "../images/media/RM nav.svg";

import Button from "../components/Button";
import "./AnimatedSignInButton.css";
class Navbar extends Component {
  _isMounted = false;

  state = {
    stickyClass: "",
    mobileNav: false,
    isScrolled: false,
  };
  myRef = React.createRef();

  componentDidMount() {
    this._isMounted = true;
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    this._isMounted = false;
    // window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
    let lastScrollY = window.scrollY;

    if (lastScrollY >= 70 && this._isMounted) {
      this.setState({
        stickyClass: "sticky fadeInDown animated fixed-top",
        isScrolled: true,
      });
      document.querySelector(".header").classList.add("scrolled");
    } else {
      if (this._isMounted)
        this.setState({
          stickyClass: "",
          isScrolled: false,
        });
      document.querySelector(".header").classList.remove("scrolled");
    }
  }

  funRef(e) {
    e.preventDefault();
    this.setState({
      mobileNav: !this.state.mobileNav,
    });
  }

  style = {
    color: "#5551EF",
  };

  handleLanguageChange = (language) => {
    const { i18n } = this.props; // Access i18n from props
    console.log("Changing language to:", language);
    i18n.changeLanguage(language);
  };

  render() {
    const { isScrolled } = this.state;

    const { location, headerTop, t } = this.props; // Use t (translate) function from props

    const currentUrl = location.pathname;

    const isSignInPage = currentUrl === "/signIn";

    return (
      <header className={`header ${headerTop ? "" : "fixed-top"}`}>
        <div className={`header-top pb-2 pb-lg-0 ${headerTop ? "" : "d-none"}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9 text-center text-lg-left">
                <div className="info-bar text-white">
                  <ul className="list-inline">
                    <li>Your Ip : 103.237.76.105</li>
                    <li>Your Location : Sydney, Australia</li>
                    <li>
                      Your Status : <span>Protected</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 text-center text-lg-right">
                <div className="social-links">
                  <a href="https://www.facebook.com">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com/">
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${this.state.stickyClass} ${
            headerTop ? "bg-white" : ""
          } header-main`}
        >
          <Container>
            <Row className="position-relative">
              <Col lg={2} xs={5}>
                {/* Logo */}
                <div className="logo">
                  <Link to="/">
                    <img
                      src={headerTop ? stickyLogo : Logo}
                      className="main-logo"
                      alt="Logo"
                    />
                    <img
                      src={stickyLogo}
                      className="sticky-logo"
                      alt="Sticky Logo"
                    />
                  </Link>
                </div>
                {/* End Logo */}
              </Col>

              <Col
                lg={10}
                xs={7}
                className="d-flex align-items-center justify-content-center position-static"
              >
                {/* Nav Wrapper */}
                <div className="nav-wrapper" style={{ marginLeft: "90px" }}>
                  {/* Menu Button */}
                  <div id="menu-button" onClick={(e) => this.funRef(e)}>
                    <span></span>
                  </div>
                  {/* End Menu Button */}
                  <div
                    className={`nav-wrap-inner ${
                      this.state.mobileNav ? "active" : ""
                    }`}
                    ref={this.myRef}
                  >
                    {/* Nav */}
                    <ul className="nav justify-content-center ml-auto">
                      {/* <li> */}
                      {/* <NavLink to="#">Home</NavLink> */}
                      {/* <ul className="sub-menu">
                          <li>
                            <NavLink to="/">
                              {t("navbar.home", { defaultValue: "Home" })}
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/home-v2" activeStyle={this.style}>
                              Home Two
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/home-v3" activeStyle={this.style}>
                              Home Three
                            </NavLink>
                          </li>
                        </ul> */}
                      {/* </li> */}
                      <li>
                        <NavLink to="#">Corporative</NavLink>
                        <ul className="sub-menu">
                          <li>
                            <NavLink to="/about" activeStyle={this.style}>
                              About Us
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/licenses" activeStyle={this.style}>
                              Certifications & Licenses
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/careers" activeStyle={this.style}>
                              Careers
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="#">Services & Products</NavLink>
                        <ul className="sub-menu">
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={CHR}
                              alt="SVG Image"
                              style={{
                                width: "24%",
                                height: "24%",
                                marginLeft: "5%",
                                paddingBottom: "2%",
                              }}
                            />
                            <NavLink to="#" activeStyle={this.style}>
                              CHR-BI
                            </NavLink>

                            <ul className="sub-menu">
                              <li>
                                <NavLink
                                  to="/single-blog"
                                  activeStyle={this.style}
                                >
                                  Demo
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li
                            style={{
                              backgroundColor: "#E5E7EB",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={KPI}
                              alt="SVG Image"
                              style={{
                                width: "26%",
                                height: "26%",
                                marginLeft: "2%",
                              }}
                            />
                            <NavLink
                              to="#"
                              activeStyle={this.style}
                              className="text-muted"
                              style={{ marginRight: "2%" }}
                            >
                              KPI-BI (Upcoming)
                            </NavLink>
                          </li>
                          <li
                            style={{
                              backgroundColor: "#E5E7EB",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={RM}
                              alt="SVG Image"
                              style={{
                                width: "26%",
                                height: "26%",
                                marginLeft: "2.3%",
                              }}
                            />
                            <NavLink
                              to="#"
                              activeStyle={this.style}
                              className="text-muted"
                              style={{ marginRight: "2%" }}
                            >
                              RM-BI (Upcoming)
                            </NavLink>
                          </li>
                          <li
                            style={{
                              backgroundColor: "#E5E7EB",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <img
                              src={BBY}
                              alt="SVG Image"
                              style={{
                                width: "21%",
                                height: "21%",
                                marginLeft: "6%",
                              }}
                            />
                            <NavLink
                              to="#"
                              activeStyle={this.style}
                              className="text-muted"
                              style={{ marginRight: "2%" }}
                            >
                              BBY-AI (Upcoming)
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <NavLink to="#">News</NavLink>
                        {/* <ul className="sub-menu">
                          <li>
                            <NavLink to="/blog" activeStyle={this.style}>
                              Blog
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/single-blog" activeStyle={this.style}>
                              Blog Details
                            </NavLink>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                      </li>
                      <li>
                        {/* Render the SignIn button only if it's not the SignIn page */}
                        {!isSignInPage && (
                          <NavLink
                            to="/signIn"
                            className={`btn animated-sign-in-button ${
                              isScrolled ? "active" : ""
                            }`}
                          >
                            Login
                          </NavLink>
                        )}
                      </li>
                    </ul>
                    {/* End Nav */}
                  </div>
                </div>
                {/* End Nav Wrapper */}

                <div className="d-flex align-items-center ml-auto">
                  {/* Search Toggle */}
                  {/* <div className="search-toggle">
                    <button
                      className="search-toggle-btn"
                      onClick={this.props.handler.handleSearch}
                    >
                      <FaSearch />
                    </button>
                  </div> */}
                  {/* End Search Toggle */}

                  {/* Language */}
                  <div className="flag-dropdown ml-3">
                    <Dropdown>
                      <Dropdown.Toggle className="dropdown-btn d-flex align-items-center">
                        <FaGlobe />
                        <FaAngleDown />
                      </Dropdown.Toggle>

                      {/* Apply the "animated" class to the Dropdown.Menu component */}
                      <Dropdown.Menu className="animated ">
                        <Dropdown.Item
                          onClick={() => this.handleLanguageChange("en")}
                          style={{}}
                        >
                          <img
                            src={Flag1}
                            alt="Flag"
                            className="pulse"
                            style={{ width: "25px", height: "25px" }}
                          />
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => this.handleLanguageChange("tr")}
                        >
                          <img
                            src={Flag2}
                            alt="Flag"
                            className="pulse"
                            style={{ width: "25px", height: "25px" }}
                          />
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <img
                            src={Flag3}
                            alt="Flag"
                            className="pulse"
                            style={{ width: "25x", height: "25px" }}
                          />
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <img
                            src={Flag4}
                            alt="Flag"
                            className="pulse"
                            style={{ width: "25px", height: "25px" }}
                          />
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  {/* End Language */}

                  {/* Offcanvas Triggar */}

                  {/* End Offcanvas Triggar */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    );
  }
}
export default withTranslation()(withRouter(Navbar));
