import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import Loading from "./Loading";
import { Container, Row, Col } from "react-bootstrap";

function Footer({ data, styleTwo, styleThree }) {
  // let publicUrl = process.env.PUBLIC_URL + '/'
  if (!data) {
    return <Loading />;
  }
  const {
    widgetAddress,
    widgetServices,
    widgetSolutions,
    widgetRecentPost,
    socials,
    copyrightText,
  } = data;

  return (
    <footer
      className={`footer ${
        styleTwo ? "style--two" : styleThree ? "style--three" : ""
      }`}
    >
      <div className="footer-bg-shape"></div>

      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <div className="widget widget_contact">
                <h3 className="widget-title">{widgetAddress.title}</h3>
                <ul>
                  <li>
                    <span className="icon">
                      <FaEnvelope />
                    </span>
                    <a href={`mailto:${widgetAddress.mail.link}`}>
                      {widgetAddress.mail.text}
                    </a>
                  </li>
                  <li>
                    <span className="icon">
                      <FaPhone />
                    </span>
                    <a href={`callto:${widgetAddress.phone.link}`}>
                      {widgetAddress.phone.text}
                    </a>
                  </li>
                  <li>
                    <span className="icon">
                      <FaMapMarkerAlt />
                    </span>
                    {widgetAddress.location}
                  </li>
                </ul>

                <div className="social-links style--two mt-4">
                  {/* <a href={socials.facebook_url}>
                    <FaFacebookF />
                  </a>
                  <a href={socials.twitter_url}>
                    <FaTwitter />
                  </a> */}
                  <a href={socials.linkedin_url}>
                    <FaLinkedinIn />
                  </a>
                  <a href={socials.instagram_url}>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Col>
            {/* <Col lg={2} md={6}>
              <div className="widget widget_nav_menu">
                <h3 className="widget-title">{widgetServices.title}</h3>
                <div className="menu-dvpn-container">
                  <ul className="menu">
                    {widgetServices.widgetLink.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href={item.link}>{item.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col> */}
            {/* <Col lg={3} md={6}>
              <div className="widget widget_nav_menu">
                <h3 className="widget-title">{widgetSolutions.title}</h3>
                <div className="menu-dvpn-container">
                  <ul className="menu">
                    {widgetSolutions.widgetLink.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href={item.link}>{item.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col> */}
            {/* <Col lg={3} md={6}>
              <div className="widget widget_recent_entries">
                <h3 className="widget-title">{widgetRecentPost.title}</h3>
                <ul>
                  {widgetRecentPost.widgetLink.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className="posted-on">
                          <FaCalendarAlt />
                          <a href={item.date.link}>{item.date.text}</a>
                        </span>
                        <h4 className="post-title">
                          <a href={item.title.link}>{item.title.text}</a>
                        </h4>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col>
              <div className="footer-bottom-text text-center">
                Copyright © {new Date().getFullYear()}{" "}
                <a href={copyrightText.link} className="bold">
                  {copyrightText.linkText}
                </a>{" "}
                {copyrightText.lastText}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
