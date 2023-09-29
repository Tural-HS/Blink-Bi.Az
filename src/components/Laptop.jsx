import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import MySVG from "../images/media/laptop.gif";
import "./Laptop.css";

const Laptop = () => {
  const containerRef = useRef(null);
  const [isHalfVisible, setHalfVisible] = useState(false);

  const handleScroll = () => {
    if (containerRef.current) {
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
        setHalfVisible(true);
      } else {
        setHalfVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const props = useSpring({
    opacity: isHalfVisible ? 1 : 0,
    transform: `translateX(${isHalfVisible ? 0 : -window.innerWidth / 4}px)`,
    config: { duration: 1000 },
  });

  return (
    <div className="container" ref={containerRef}>
      <div className="row">
        <div className="col-md-10">
          <div className="image-container">
            <animated.div style={props}>
              <img src={MySVG} alt="SVG Image" className="laptop-svg" />
            </animated.div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="section-title">
            <h2
              style={{
                marginTop: "5rem",
                width: "500px",
                transform: "translateX(-70%)",
              }}
            >
              Manage HR in fully automated way with CHR-BI
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Laptop;
