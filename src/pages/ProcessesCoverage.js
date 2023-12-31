import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context";
import PageTitle from "../components/PageTitle";
import { FaPlay } from "react-icons/fa";
import Loading from "../components/Loading";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import ModalVideo from "react-modal-video";

import Counter from "../components/Counter";
import Price from "../components/Price";
import Navbar from "../components/Navbar";

import MySVG from "../images/media/process-cov.svg";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Lottie from "lottie-react";
import animationData from "./Coverage.json";

function HrBusinessProcessesCoverage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const [anchorEl6, setAnchorEl6] = React.useState(null);
  const [anchorEl7, setAnchorEl7] = React.useState(null);
  const [anchorEl8, setAnchorEl8] = React.useState(null);

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  const open5 = Boolean(anchorEl5);
  const open6 = Boolean(anchorEl6);
  const open7 = Boolean(anchorEl7);
  const open8 = Boolean(anchorEl8);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClick6 = (event) => {
    setAnchorEl6(event.currentTarget);
  };
  const handleClick7 = (event) => {
    setAnchorEl7(event.currentTarget);
  };
  const handleClick8 = (event) => {
    setAnchorEl8(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setAnchorEl4(null);
    setAnchorEl5(null);
    setAnchorEl6(null);
    setAnchorEl7(null);
    setAnchorEl8(null);
    setIsMenuOpen(false);
    setIsMenuOpen2(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
    setIsMenuOpen5(false);
    setIsMenuOpen6(false);
    setIsMenuOpen7(false);
    setIsMenuOpen8(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const [isMenuOpen6, setIsMenuOpen6] = useState(false);
  const [isMenuOpen7, setIsMenuOpen7] = useState(false);
  const [isMenuOpen8, setIsMenuOpen8] = useState(false);
  const handleIconClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };
  const handleIconClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
    setIsMenuOpen2(!isMenuOpen2);
  };
  const handleIconClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
    setIsMenuOpen3(!isMenuOpen3);
  };
  const handleIconClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
    setIsMenuOpen4(!isMenuOpen4);
  };
  const handleIconClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
    setIsMenuOpen5(!isMenuOpen5);
  };
  const handleIconClick6 = (event) => {
    setAnchorEl6(event.currentTarget);
    setIsMenuOpen6(!isMenuOpen6);
  };
  const handleIconClick7 = (event) => {
    setAnchorEl7(event.currentTarget);
    setIsMenuOpen7(!isMenuOpen7);
  };
  const handleIconClick8 = (event) => {
    setAnchorEl8(event.currentTarget);
    setIsMenuOpen8(!isMenuOpen8);
  };

  const [isRotated, setIsRotated] = useState(false);

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
      <section className="service-details pt-50 pb-120">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={7}>
              {/* Video Wrapper */}
              <Lottie
                class="custom-image"
                animationData={animationData}
                style={{ width: "120%", height: "auto" }}
              />
              {/* End Video Wrapper */}
            </Col>
            <Col lg={5}>
              <div
                className="content pl-lg-3 pl-0"
                style={{ paddingBottom: "10%" }}
              >
                {/* Section Title */}
                <div className="section-title style--two text-left mb-4">
                  <h2>{processesDetails.title}</h2>
                  <p>{processesDetails.desc}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="content pb-2 text-center">
                <h2>{processesDetails.howItWorks.title}</h2>
                <p>{processesDetails.howItWorks.desc}</p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="col justify-content-center">
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400px",
                      }}
                    >
                      {processesDetails.serviceList.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList2.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400px",
                      }}
                    >
                      {processesDetails.serviceList2.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                      <Accordion>
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon sx={{ color: "white" }} />
                          }
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          sx={{
                            display: "flex",

                            backgroundColor: "#648FC5",
                            border: "2px",

                            color: "white",
                          }}
                        >
                          <Typography>
                            {processesDetails.serviceListEnd.title}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            fontWeight: "400px",
                          }}
                        >
                          {processesDetails.serviceListEnd.listItems.map(
                            (item, index) => {
                              return (
                                <Typography key={index}>{item}</Typography>
                              );
                            }
                          )}
                        </AccordionDetails>
                      </Accordion>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList3.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400px",
                      }}
                    >
                      {processesDetails.serviceList3.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList4.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400px",
                      }}
                    >
                      {processesDetails.serviceList4.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList9.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400px",
                      }}
                    >
                      {processesDetails.serviceList9.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="col ">
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList5.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400px",
                      }}
                    >
                      {processesDetails.serviceList5.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList6.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {processesDetails.serviceList6.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList7.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {processesDetails.serviceList7.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="col-12 col-md-12 mb-4">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        display: "flex",

                        backgroundColor: "#054388",
                        border: "2px",

                        color: "white",
                      }}
                    >
                      <Typography>
                        {processesDetails.serviceList8.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        fontWeight: "400px",
                      }}
                    >
                      {processesDetails.serviceList8.listItems.map(
                        (item, index) => {
                          return <Typography key={index}>{item}</Typography>;
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </Col>
            {/* End Service List */}
          </Row>
        </Container>
      </section>

      <Footer data={footer} />
    </>
  );
}

export default HrBusinessProcessesCoverage;
