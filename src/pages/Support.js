import React, { useContext, useState } from "react";
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

import MySVG from "../images/media/support.svg";

import Lottie from "lottie-react";
import animationData from "./Support.json";

function Support() {
  const context = useContext(DataContext);
  const { supportDetails, counter, price, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  const [isOpen, setOpen] = useState(false);

  if (!supportDetails) {
    return <Loading />;
  }
  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Fast and professional Support" />
      <section className="service-details pt-120 pb-120">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={7}>
              {/* Video Wrapper */}
              <Lottie class="custom-image" animationData={animationData} />
            </Col>
            <Col lg={5}>
              <div className="content pl-lg-3 pl-0">
                {/* Section Title */}
                <div className="section-title style--two text-left mb-4">
                  <h2>{supportDetails.title}</h2>
                  <p>{supportDetails.desc}</p>
                  <p>{supportDetails.desc2}</p>
                  <p>{supportDetails.desc3}</p>
                  <p>{supportDetails.desc4}</p>
                  {supportDetails.desc5.map((item, index) => {
                    return (
                      <p style={{}} key={index}>
                        {item}
                      </p>
                    );
                  })}
                </div>
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

export default Support;
