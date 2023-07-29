import React from "react";
import Loading from "./Loading";
import Title from "./Title";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function HrBusiness({ data, classText, styleTwo, styleThree }) {
  let publicUrl = process.env.PUBLIC_URL + "/";
  if (!data) {
    return <Loading />;
  }

  return (
    <section className={`${classText} service`}>
      <Container>
        <Row>
          <Col>
            {/* Section Title */}
            <Title
              title={data.title}
              subtitle={data.desc}
              classText={`${
                styleTwo
                  ? "title-shape title-shape-sky-blue text-center"
                  : styleThree
                  ? "title-shape title-shape-c2 title-shape-style-three text-center"
                  : "title-shape text-center"
              }`}
            />
            {/* End Section Title */}
          </Col>
        </Row>
        <Row className="justify-content-center">
          {data.items.map((item, index) => {
            let active = index === 1 ? "active" : "";
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className={`single-service hover-effect ${
                    styleTwo
                      ? "style--two"
                      : styleThree
                      ? `style--three ${active}`
                      : ""
                  }`}
                >
                  <div className="service-icon">
                    <img
                      src={publicUrl + item.img.url}
                      alt={publicUrl + item.img.alt}
                    />
                  </div>
                  <div className="service-content">
                    <Link to="/procesess-coverage">
                      <h3>{item.title}</h3>
                    </Link>
                    <p>{item.desc}</p>
                    <Link to="/procesess-coverage" className="btn-link">
                      {item.button.text} <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default HrBusiness;

Service.defaultProps = {
  classText: "pt-120 pb-90",
};
