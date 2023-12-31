import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context";
import PageTitle from "../components/PageTitle";
import { FaPlay } from "react-icons/fa";
import Loading from "../components/Loading";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import ModalVideo from "react-modal-video";
import Accordion from "react-bootstrap/Accordion";
import Counter from "../components/Counter";
import Price from "../components/Price";
import Navbar from "../components/Navbar";

import MySVG from "../images/media/clear-data.svg";

import Lottie from "lottie-react";
import animationData from "./ClearData.json";

function ClearData() {
  const context = useContext(DataContext);
  const { clearDataDetails, counter, price, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!clearDataDetails) {
    return <Loading />;
  }
  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Clear - Data Clear - View" />
      <section className="service-details pt-10 pb-10">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={7}>
              {/* Video Wrapper */}
              <Lottie
                style={{ width: "100%", height: "120%" }}
                class="custom-image"
                animationData={animationData}
              />
              {/* End Video Wrapper */}
            </Col>
            <Col lg={5}>
              <div className="content pl-lg-3 pl-0">
                {/* Section Title */}
                <div className="section-title style--two text-left mb-4">
                  <h2>{clearDataDetails.title}</h2>
                  <p>{clearDataDetails.desc}</p>
                </div>
                {/* End Section Title */}

                {/* <div className="btn-wrap">
                  <span></span>
                  <a href={serviceDetails.btn.url} className="btn">
                    {serviceDetails.btn.text}
                  </a>
                </div> */}
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </section>

      <Footer data={footer} />
    </>
  );
}

export default ClearData;
