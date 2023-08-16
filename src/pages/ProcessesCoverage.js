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

import MySVG from "../images/media/process-cov.svg";

function HrBusinessProcessesCoverage() {
  const context = useContext(DataContext);
  const { processesDetails, counter, price, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  const [isOpen, setOpen] = useState(false);

  if (!processesDetails) {
    return <Loading />;
  }
  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Coverage Of All Bussines Processes" />
      <section className="service-details pt-120 pb-120">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              {/* Video Wrapper */}
              <img src={MySVG} alt="SVG Image" />
              {/* End Video Wrapper */}
            </Col>
            <Col lg={6}>
              <div className="content pl-lg-3 pl-0">
                {/* Section Title */}
                <div className="section-title style--two text-left mb-4">
                  <h2>{processesDetails.title}</h2>
                  <p>{processesDetails.desc}</p>
                </div>
                {/* End Section Title */}

                {/* <div className="btn-wrap">
                  <span></span>
                  <a href={processesDetails.btn.url} className="btn">
                    {processesDetails.btn.text}
                  </a>
                </div> */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="content pb-2">
                <h2>{processesDetails.howItWorks.title}</h2>
                <p>{processesDetails.howItWorks.desc}</p>
              </div>

              {/* <Accordion className="mb-4" defaultActiveKey="0">
                <div>
                  <Accordion.Toggle variant="link" eventKey="0">
                    <h3>{processesDetails.accordion.one.title}</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <p>{processesDetails.accordion.one.desc}</p>
                  </Accordion.Collapse>
                </div>

                <div>
                  <Accordion.Toggle variant="link" eventKey="1">
                    <h3>{processesDetails.accordion.two.title}</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <p>{processesDetails.accordion.two.desc}</p>
                  </Accordion.Collapse>
                </div>

                <div>
                  <Accordion.Toggle variant="link" eventKey="2">
                    <h3>{processesDetails.accordion.three.title}</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <p>{processesDetails.accordion.three.desc}</p>
                  </Accordion.Collapse>
                </div>

                <div>
                  <Accordion.Toggle variant="link" eventKey="3">
                    <h3>{processesDetails.accordion.four.title}</h3>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <p>{processesDetails.accordion.four.desc}</p>
                  </Accordion.Collapse>
                </div>
              </Accordion> */}

              {/* Service List */}
              <div class="row justify-content-center">
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList.title}</h4>
                  <ul class="service-list">
                    {processesDetails.serviceList.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList2.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList2.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList3.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList3.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                {/* <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList4.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList4.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div> */}
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList4.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList4.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
              </div>
              <div class="row  justify-content-center">
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList5.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList5.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList6.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList6.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList7.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList7.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
                <div class="col-md-2 content  mb-4">
                  <h4 class="mb-4">{processesDetails.serviceList8.title}</h4>
                  <ul className="service-list">
                    {processesDetails.serviceList8.listItems.map(
                      (item, index) => {
                        return <li key={index}>{item}</li>;
                      }
                    )}
                  </ul>
                </div>
              </div>
              {/* End Service List */}
            </Col>
          </Row>
        </Container>
      </section>

      <Footer data={footer} />
    </>
  );
}

export default HrBusinessProcessesCoverage;
