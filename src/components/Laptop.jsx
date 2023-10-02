import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import MySVG from "../images/media/laptop.gif";
import CHR from "../images/media/CHR.png";
import styles from "./Laptop.module.css";

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

  // Animation for the laptop SVG
  const laptopProps = useSpring({
    opacity: isHalfVisible ? 1 : 0,
    transform: `translateX(${isHalfVisible ? 0 : -window.innerWidth / 4}px)`,
    config: { duration: 1000 },
  });

  // Animation for the CHR.png and header
  const chrHeaderProps = useSpring({
    opacity: isHalfVisible ? 1 : 0,
    transform: `translateX(${isHalfVisible ? 0 : window.innerWidth / 4}px)`,
    config: { duration: 1000 },
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.row}>
        <div className={styles.imageContainer}>
          <animated.div style={laptopProps}>
            <img src={MySVG} alt="SVG Image" className={styles.laptopSvg} />
          </animated.div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.chrContainer}>
            <animated.img
              src={CHR}
              alt="Png"
              className={styles.CHR}
              style={{
                ...chrHeaderProps,
                width: "auto", // Adjust the width
                height: "auto", // Adjust the height
              }}
            />
          </div>
          <div className={styles.sectionTitle}>
            <animated.h3 style={chrHeaderProps}>
              Manage HR in a fully automated way with CHR-BI
            </animated.h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
