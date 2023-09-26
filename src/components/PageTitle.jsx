import React from "react";
import { Link } from "react-router-dom";
import "./PageTitle.css"; // Import the CSS file for styling

function PageTitle({ pageName }) {
  return (
    <div className="page-title-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title text-center text-white">
              <h2>{pageName}</h2>
              <ul className="nav justify-content-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-animation"></div>
      <div className="wave-animation2"></div>
      <div className="wave-animation3"></div>
    </div>
  );
}

export default PageTitle;
