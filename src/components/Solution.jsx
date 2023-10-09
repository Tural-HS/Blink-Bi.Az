import React from "react";
import Loading from "./Loading";
import Title from "./Title";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from "react-bootstrap";
import MySVG from "../images/media/Blink.svg";

import Lottie from "lottie-react";
import animationData from "./About.json";

import BV from "../images/media/BV.png";

const svgImage = (
  <img
    src={BV}
    alt="SVG Image"
    style={{ width: "2%", height: "auto", marginBottom: "0.5%" }}
  />
);

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${(x * -1) / 85}px,${(y * -1) / 85}px,0)`;

function Solution({ data, classText, styleTwo }) {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  let publicUrl = process.env.PUBLIC_URL + "/";

  if (!data) {
    return <Loading />;
  }
  if (!styleTwo)
    return (
      <section
        className={`${classText} solution`}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <img
          src={publicUrl + data.bg_pattern.url}
          alt={data.bg_pattern.alt}
          className="section-pattern-img"
        />
        <Container>
          <Row>
            <Col lg={12}>
              {data.itemsLeft.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="single-solution media align-items-center"
                  >
                    {/* <div className="img">
                        <img
                          src={publicUrl + item.img.url}
                          alt={item.img.alt}
                        />
                      </div> */}
                    <div className="content media-body">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </Col>
            <Col lg={12}>
              <div className="solution-content">
                <Title
                  title={data.title}
                  subtitle={data.desc}
                  classText=""
                  // classText="style_2 title-shape"
                />

                {data.items.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="single-solution media align-items-center"
                    >
                      {/* <div className="img">
                    
                      </div> */}
                      <div className="content media-body">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <h5>
                          {item.desc2}
                          {index === 0 && (
                            <span style={{ color: "black", fontSize: "15px" }}>
                              <span style={{ color: "#1F75C8" }}>
                                "Bilisim Vadisi"
                              </span>
                              {svgImage} Technology Development Zone.
                            </span>
                          )}
                        </h5>
                      </div>
                    </div>
                  );
                })}

                <Lottie
                  class="custom-image"
                  animationData={animationData}
                  style={{
                    width: "130%",
                    height: "auto",
                  }}
                />
                <div class="">
                  {/* <ul>
                    {data.listItems.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  return (
    <section className="gradient-section-bg position-relative pt-120 pb-120 solution">
      <img
        src={publicUrl + data.bg_pattern.url}
        alt={data.bg_pattern.alt}
        className="section-pattern-img"
      />
      <Container>
        <Row>
          <Col lg={6}>
            <div className="solution-img">
              <img
                src={publicUrl + data.fullImg2.url}
                alt={publicUrl + data.fullImg2.alt}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="solution-content text-white">
              <Title
                title={data.title}
                subtitle={data.desc}
                classText="section-title text-left title-shape title-shape-sky-blue style--two"
              />

              {data.items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="single-solution media align-items-center"
                  >
                    <div className="img style--three">
                      <img
                        src={publicUrl + item.img2.url}
                        alt={item.img2.alt}
                      />
                    </div>
                    <div className="content media-body">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Solution;

Solution.defaultProps = {
  classText: "layer section-bg pt-120 pb-120",
  styleTwo: false,
};
