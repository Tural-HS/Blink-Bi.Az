import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context";
import PageTitle from "../components/PageTitle";
import Loading from "../components/Loading";
import { TextField, Button } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function CreateVacancy() {
  const context = useContext(DataContext);
  const { allInOneDetails, counter, price, footer } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  // Initialize with null start and end dates
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleCreateVacancy = () => {
    console.log("Job Title:", jobTitle);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Job Type:", jobType);
    console.log("Employment Type:", employmentType);
    console.log("Requirements:", requirements);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!allInOneDetails) {
    return <Loading />;
  }

  const handleDateChange = (ranges) => {
    // Update the start and end dates when the user selects a range
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Create Vacancy" />
      <section className="service-details pt-70 pb-70">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}></Col>
            <Col lg={12}>
              <div className="content pl-lg-3 pl-0">
                <TextField
                  label="Job Title"
                  fullWidth
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  margin="normal"
                />
                <DateRangePicker
                  ranges={[
                    {
                      startDate,
                      endDate,
                      key: "selection",
                    },
                  ]}
                  onChange={handleDateChange}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                />
                <TextField
                  label="Job Type"
                  fullWidth
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Employment Type"
                  fullWidth
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Requirements"
                  fullWidth
                  multiline
                  rows={4}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCreateVacancy}
                >
                  Create
                </Button>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </section>

      <Footer data={footer} />
    </>
  );
}

export default CreateVacancy;
