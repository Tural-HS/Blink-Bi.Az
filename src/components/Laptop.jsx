import React, { useState, useEffect } from "react";
import mainLaptopImage from "../images/media/main-laptop.png";
import dashboardScreenImage1 from "../images/media/dashboard_screen.png";
import dashboardScreenImage2 from "../images/media/mezunyetMatris.png";
import "./Laptop.css";

const Laptop = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screenshotImages = [dashboardScreenImage1, dashboardScreenImage2];
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (autoplayEnabled) {
      const interval = setInterval(() => {
        setCurrentScreenIndex(
          (currentScreenIndex + 1) % screenshotImages.length
        );
      }, 2000); // Change slide every 5 seconds

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentScreenIndex, autoplayEnabled]);

  const moveSlide = (direction) => {
    if (!autoplayEnabled) {
      let newIndex = currentScreenIndex + direction;
      if (newIndex < 0) {
        newIndex = screenshotImages.length - 1;
      } else if (newIndex >= screenshotImages.length) {
        newIndex = 0;
      }
      setCurrentScreenIndex(newIndex);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image-container">
            <img src={mainLaptopImage} alt="Laptop" />
            <img
              className="screenshot-overlay"
              src={screenshotImages[currentScreenIndex]}
              alt="Screenshot"
            />
            <button
              className="overlay-button left"
              onClick={() => moveSlide(-1)}
            >
              &lt;
            </button>
            <button
              className="overlay-button right"
              onClick={() => moveSlide(1)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
