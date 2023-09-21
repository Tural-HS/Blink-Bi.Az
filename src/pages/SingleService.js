import React, { useContext, useState } from "react";
import { DataContext } from "../context";
import PageTitle from "../components/PageTitle";
import { FaPlay } from "react-icons/fa";
import Loading from "../components/Loading";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import MySVG from "../images/media/fast-secure.svg";
import MySVG2 from "../images/media/shart.svg";

function SingleService() {
  const context = useContext(DataContext);
  const { serviceDetails, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  const [isOpen, setOpen] = useState(false);

  if (!serviceDetails) {
    return <Loading />;
  }
  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Fast-Secure-Reliable" />
      <section className="service-details pt-120 pb-120">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <div className="solution-img d-none d-xl-block">
                <div className="parent-container">
                  <img src={MySVG} alt="SVG Image" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="content pl-lg-3 pl-0">
                <div className="section-title style--two text-left mb-4">
                  <h2>{serviceDetails.title}</h2>
                  <p>{serviceDetails.desc}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {" "}
            <div className="chart">
              <img
                src={MySVG2}
                alt="SVG Image"
                style={{ width: "1200px", height: "800px" }}
              />
            </div>
          </Row>
        </Container>
      </section>

      <Footer data={footer} />
    </>
  );
}

export default SingleService;
