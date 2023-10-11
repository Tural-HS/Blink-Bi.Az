import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context";
import PageTitle from "../components/PageTitle";
import Loading from "../components/Loading";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import { useSpring, animated } from "react-spring";

const dialogStyle = {
  display: "flex",
  width: "100%",
  height: "auto",
  backgroundColor: "white",
  boxShadow: "24px",
  padding: "20px",
};

const mockJobData = [
  {
    title: "Frontend Developer",
    content:
      "Join our team as a Frontend Developer and work on exciting projects!",
    salary: "$70,000 - $90,000 per year",
    jobType: "Full-Time",
  },
  {
    title: "UI/UX Designer",
    content:
      "Looking for a creative UI/UX Designer to design user-friendly interfaces.",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
  {
    title: "UI/UX Designer",
    content:
      "Looking for a creative UI/UX Designer to design user-friendly interfaces.",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
  {
    title: "System Admin",
    content:
      "Looking for a creative UI/UX Designer to design user-friendly interfaces.",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
  {
    title: "BackEnd Devolper",
    content:
      "Looking for a creative UI/UX Designer to design user-friendly interfaces.",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
  {
    title: "Help Desk",
    content:
      "Looking for a creative UI/UX Designer to design user-friendly interfaces.",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
];

function Careers() {
  const context = useContext(DataContext);
  const [open, setOpen] = useState(false);

  const cardData = mockJobData.map((job, index) => ({
    title: job.title,
    content: job.content,
    salary: job.salary,
    jobType: job.jobType,
  }));

  const { allInOneDetails, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fade = useSpring({
    transform: open ? "scale(1)" : "scale(0)",
  });

  const fadeClose = useSpring({
    transform: open ? "scale(0)" : "scale(1)",
  });

  if (!allInOneDetails) {
    return <Loading />;
  }

  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Certifications & Licenses" />
      <section className="service-details pt-120 pb-120">
        <Container fluid>
          <Row className="align-items-center mb-5">
            <Col lg={12}>
              <div className="text-center">
                <h2>eandfsjfnsjnfsjfn rfsf sjfnsjfnsjw fjskfnjfnfjw fjwfnj</h2>
                <p>sdmfnsjfbsjkfsjkfvbskvbdhkvd hvdbhvdsbhk</p>
                {!open && (
                  <Button color="secondary" onClick={() => setOpen(true)}>
                    Join Us
                  </Button>
                )}

                {open && (
                  <Row className="justify-content-center">
                    <Col lg={12} className="text-center">
                      <Button color="secondary" onClick={() => setOpen(false)}>
                        Close
                      </Button>
                    </Col>
                  </Row>
                )}
              </div>

              {open && (
                <animated.div style={{ ...dialogStyle, ...fade }}>
                  <Row className="d-flex justify-content-center">
                    {cardData.map((card, index) => (
                      <Col key={index} md={4} style={{ marginBottom: "20px" }}>
                        <Card>
                          <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.content}</Card.Text>
                            <Card.Text>Salary: {card.salary}</Card.Text>
                            <Card.Text>Job Type: {card.jobType}</Card.Text>
                            <Button variant="contained" color="primary">
                              Learn More
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </animated.div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer data={footer} />
    </>
  );
}

export default Careers;
