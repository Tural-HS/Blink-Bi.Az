import React from "react";
import Loading from "./Loading";
import Title from "./Title";
import { Container, Row, Col } from "react-bootstrap";

function Feature({ data, classText }) {
  let publicUrl = process.env.PUBLIC_URL + "/";
  if (!data) {
    return <Loading />;
  }
  return (
    <section className={`${classText} feature`}>
      <Container>
        <Row>
          <Col>
            <Title title={data.title} subtitle={data.desc} />
          </Col>
        </Row>
        <Row className="justify-content-center single-feature-wrap">
          {data.items.map((item, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="single-feature">
                  <div className="feature-icon">
                    <img src={publicUrl + item.img.url} alt={item.img.alt} />
                  </div>
                  <div className="feature-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
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

export default Feature;

Feature.defaultProps = {
  classText: "pt-120 pb-90",
};
