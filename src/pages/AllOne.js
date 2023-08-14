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

function AllInOne() {
  const context = useContext(DataContext);
  const { allInOneDetails, counter, price, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  const [isOpen, setOpen] = useState(false);

  if (!allInOneDetails) {
    return <Loading />;
  }
  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="All In One Platform" />
      <section className="service-details pt-120 pb-120">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              {/* Video Wrapper */}
              <img
                className="h-100 w-100"
                src={require("../images/media/all-in-one.gif")}
                alt="Image description"
              />
              {/* End Video Wrapper */}
            </Col>
            <Col lg={6}>
              <div className="content pl-lg-3 pl-0">
                {/* Section Title */}
                <div className="section-title style--two text-left mb-4">
                  <h2>{allInOneDetails.title}</h2>
                  <p>{allInOneDetails.desc}</p>
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

export default AllInOne;
