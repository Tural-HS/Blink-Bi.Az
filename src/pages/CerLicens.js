import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context";
import PageTitle from "../components/PageTitle";
import { FaPlay } from "react-icons/fa";
import Loading from "../components/Loading";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import Lottie from "lottie-react";

function CerLicens() {
  const context = useContext(DataContext);
  const { allInOneDetails, counter, price, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!allInOneDetails) {
    return <Loading />;
  }
  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Certifications & Licenses" />
      <section className="service-details pt-70 pb-70">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="content pl-lg-3 pl-0">
                {/* Section Title */}

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

export default CerLicens;
