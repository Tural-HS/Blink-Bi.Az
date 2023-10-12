import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
    time: "12.10.2013 - 31.12.2023",
    employmentType: "Project based (6 month)",
    salary: "$70,000 - $90,000 per year",

    jobType: "Full-Time",

    flipped: false, // Added flipped property
    // Added requirements property
  },
  {
    title: "UI/UX Designer",
    time: "12.10.2013 - 31.12.2023",
    employmentType: "Project based (6 month)",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
  {
    title: "UI/UX Designer",
    time: "12.10.2013 - 31.12.2023",

    employmentType: "Project based (6 month)",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
  {
    title: "System Admin",
    time: "12.10.2013 - 31.12.2023",
    employmentType: "Project based (6 month)",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
  },
  {
    title: "BackEnd Devolper",
    time: "12.10.2013 - 31.12.2023",
    employmentType: "Full employment",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
    requirements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin ultricies risus nec finibus. Donec luctus consequat nisl, blandit molestie diam commodo id. Pellentesque dignissim varius elementum. In aliquam ultrices hendrerit. Etiam vel lobortis tellus, id facilisis quam. Pellentesque in tincidunt mi, in eleifend risus. In laoreet eros a enim finibus, vel vestibulum leo mollis. Praesent placerat tempor mollis. In vitae augue nisi. Maecenas ultrices volutpat dapibu ",
  },
  {
    title: "Help Desk",
    time: "12.10.2013 - 31.12.2023",
    employmentType: "Project based (6 month)",
    salary: "$60,000 - $80,000 per year",
    jobType: "Part-Time",
    requirements:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin ultricies risus nec finibus. Donec luctus consequat nisl, blandit molestie diam commodo id. Pellentesque dignissim varius elementum. In aliquam ultrices hendrerit. Etiam vel lobortis tellus, id facilisis quam. Pellentesque in tincidunt mi, in eleifend risus. In laoreet eros a enim finibus, vel vestibulum leo mollis. Praesent placerat tempor mollis. In vitae augue nisi. Maecenas ultrices volutpat dapibu ",
  },
];
function Careers() {
  const history = useHistory();
  const context = useContext(DataContext);
  const [open, setOpen] = useState(false);

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [cardData, setCardData] = useState(mockJobData);

  const toggleCardFlip = (index) => {
    setCardData((prevCardData) =>
      prevCardData.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
    setFlippedCardIndex(index);
  };
  const { allInOneDetails, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fade = useSpring({
    transform: open ? "scale(1)" : "scale(0)",
  });

  const handleButtonHistory = () => {
    history.push("/create");
  };

  const cardFlipProps = useSpring({
    transform: `rotateY(${
      flippedCardIndex !== null && cardData[flippedCardIndex].flipped ? 180 : 0
    }deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
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
      <PageTitle pageName="Careers" />
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

                <Button color="primary" onClick={handleButtonHistory}>
                  {" "}
                  Admin{" "}
                </Button>

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
                            <Card.Text style={{ fontSize: "10px" }}>
                              {card.time}
                            </Card.Text>
                            <Card.Text>
                              {card.flipped ? card.requirements : card.content}
                            </Card.Text>
                            {card.flipped && index === 0 && (
                              <>
                                <Card.Text>
                                  Requirements: {card.requirements}
                                </Card.Text>
                              </>
                            )}
                            {!card.flipped && (
                              <>
                                <Card.Text>Job Type: {card.jobType}</Card.Text>
                                <Card.Text>Salary: {card.salary}</Card.Text>
                                <Card.Text>
                                  Employment Type: {card.employmentType}
                                </Card.Text>
                              </>
                            )}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => toggleCardFlip(index)}
                            >
                              Apply
                            </Button>{" "}
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => toggleCardFlip(index)}
                            >
                              {card.flipped ? "Content" : "Requirements"}
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
