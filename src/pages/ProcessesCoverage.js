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

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";

function HrBusinessProcessesCoverage() {
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
  };
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
              <div className="content pb-2 text-center">
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
                <div class=" content  mb-4">
                  <Button
                    id="basic-button-1"
                    aria-controls={open1 ? "basic-menu-1" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open1 ? "true" : undefined}
                    onClick={handleClick1}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList.title}
                  </Button>
                  <Menu
                    id="basic-menu-1"
                    anchorEl={anchorEl1}
                    open={open1}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button-1",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {processesDetails.serviceList.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
                </div>
                <div class=" content  mb-4">
                  <Button
                    id="basic-button-2"
                    aria-controls={open2 ? "basic-menu-2" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open2 ? "true" : undefined}
                    onClick={handleClick2}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList2.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {" "}
                    {processesDetails.serviceList2.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
                </div>
                <div class=" content  mb-4">
                  <Button
                    id="basic-button-3"
                    aria-controls={open3 ? "basic-menu-3" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open3 ? "true" : undefined}
                    onClick={handleClick3}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList3.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl3}
                    open={open3}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {" "}
                    {processesDetails.serviceList3.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
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
                <div class=" content  mb-4">
                  <Button
                    id="basic-button-4"
                    aria-controls={open4 ? "basic-menu-4" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open4 ? "true" : undefined}
                    onClick={handleClick4}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList4.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl4}
                    open={open4}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {" "}
                    {processesDetails.serviceList4.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
                </div>
              </div>
              <div class="row  justify-content-center">
                <div class="content  mb-4">
                  <Button
                    id="basic-button-5"
                    aria-controls={open5 ? "basic-menu-5" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open5 ? "true" : undefined}
                    onClick={handleClick5}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList5.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl5}
                    open={open5}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {" "}
                    {processesDetails.serviceList5.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
                </div>
                <div class="content  mb-4">
                  <Button
                    id="basic-button-6"
                    aria-controls={open6 ? "basic-menu-6" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open6 ? "true" : undefined}
                    onClick={handleClick6}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList6.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl6}
                    open={open6}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {" "}
                    {processesDetails.serviceList6.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
                </div>
                <div class=" content  mb-4">
                  <Button
                    id="basic-button-7"
                    aria-controls={open7 ? "basic-menu-7" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open7 ? "true" : undefined}
                    onClick={handleClick7}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList7.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl7}
                    open={open7}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {" "}
                    {processesDetails.serviceList7.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
                </div>
                <div class="content  mb-4">
                  <Button
                    id="basic-button-8"
                    aria-controls={open8 ? "basic-menu-8" : undefined}
                    aria-haspopup="true"
                    color="primary"
                    aria-expanded={open8 ? "true" : undefined}
                    onClick={handleClick8}
                    sx={{
                      width: "80rem",

                      justifyContent: "center",
                    }}
                  >
                    {processesDetails.serviceList8.title}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl8}
                    open={open8}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    PaperProps={{
                      sx: {
                        width: "100%",
                        maxWidth: "80rem",
                        backgroundColor: "#f8f8f8",
                      },
                    }}
                  >
                    {" "}
                    {processesDetails.serviceList8.listItems.map(
                      (item, index) => {
                        return (
                          <MenuItem
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            key={index}
                          >
                            {item}
                          </MenuItem>
                        );
                      }
                    )}
                  </Menu>
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
