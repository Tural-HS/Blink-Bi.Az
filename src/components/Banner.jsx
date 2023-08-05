import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";
import Loading from "./Loading";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from "react-bootstrap";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${(x * -1) / 85}px,${(y * -1) / 85}px,0)`;
const trans2 = (x, y) => `translate3d(${(x * -1) / 45}px,${(y * -1) / 45}px,0)`;

function Banner({ data }) {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const [isOpen, setOpen] = useState(false);

  let publicUrl = process.env.PUBLIC_URL + "/";

  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div
        className="banner"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />

        <Container>
          <Row>
            <Col lg={7}>
              {/* Banner Content */}
              <div className="banner-content">
                <h4>{data.subtitle}</h4>
                <h1>{data.title}</h1>
                <p>{data.desc}</p>

                <div className="banner-btn-group">
                  <div className="btn-wrap">
                    <span></span>
                    <a href={data.button.btn_url} className="btn btn-white">
                      {data.button.btn_text}
                    </a>
                  </div>

                  {/* <a href={ data.playButton.btn_url } className="mfp-iframe video-btn">
                                    <span><FaPlay /></span> { data.playButton.btn_text }
                                </a> */}
                  <button className="video-btn" onClick={() => setOpen(true)}>
                    <span>
                      <FaPlay />
                    </span>{" "}
                    {data.playButton.btn_text}
                  </button>
                </div>
              </div>
              {/* End Banner Content */}
            </Col>

            <Col lg={5}>
              {/* Banner Img */}
              <div className="banner-img d-none d-xl-block">
                <animated.img
                  style={{ transform: props.xy.interpolate(trans1) }}
                  src={publicUrl + data.images.Check_Img.url}
                  alt={data.images.Check_Img.alt}
                  className="check-img"
                />
                <img
                  class=""
                  src={publicUrl + data.images.Main_Img.url}
                  alt={data.images.Main_Img.alt}
                  className="main-img"
                />

                <animated.img
                  style={{ transform: props.xy.interpolate(trans2) }}
                  src={publicUrl + data.images.Card_Img.url}
                  alt={data.images.Card_Img.alt}
                  className="card-img"
                />
                <animated.img
                  style={{ transform: props.xy.interpolate(trans1) }}
                  src={publicUrl + data.images.Setting_Img.url}
                  alt={data.images.Setting_Img.alt}
                  className="setting-img"
                />
                <animated.img
                  style={{ transform: props.xy.interpolate(trans1) }}
                  src={publicUrl + data.images.Lock_Img.url}
                  alt={data.images.Lock_Img.alt}
                  className="lock-img"
                />
                <animated.img
                  style={{ transform: props.xy.interpolate(trans2) }}
                  src={publicUrl + data.images.Sheild_Img.url}
                  alt={data.images.Sheild_Img.alt}
                  className="sheild-img"
                />

                {/* <animated.img
                  style={{ transform: props.xy.interpolate(trans2) }}
                  src={publicUrl + data.images.Box_Img.url}
                  alt={data.images.Box_Img.alt}
                  className="box-img"
                /> */}

                <animated.img
                  style={{ transform: props.xy.interpolate(trans1) }}
                  src={publicUrl + data.images.Setting2.url}
                  alt={data.images.Setting2.alt}
                  className="setting2-img"
                />
              </div>
              {/* End Banner Img */}

              {/* Banner Img Responsive */}
              <div className="banner-img-responsive d-block d-xl-none">
                <img
                  src={publicUrl + data.images.resImg.url}
                  alt={data.images.resImg.alt}
                />
              </div>
              {/* End Banner Img Responsive */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Banner;
