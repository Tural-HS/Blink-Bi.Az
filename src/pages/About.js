import React, { useContext } from "react";
import { DataContext } from "../context";
import PageTitle from "../components/PageTitle";
import Solution from "../components/Solution";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import LogoCarousel from "../components/LogoCarousel";
import Navbar from "../components/Navbar";

function About() {
  const context = useContext(DataContext);
  const { counter, companyLogo, solution, team, testimonial, footer } =
    context.allData;
  const { handleSearch, handleOffcanvas } = context;

  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="About Us" />
      <Solution data={solution} classText="layer pt-120 pb-120" />
      {/* <Team data ={team} classText="section-bg pt-120 pb-140" /> */}
      {/* <Counter data={counter} /> */}
      <Testimonial data={testimonial} />
      <LogoCarousel data={companyLogo} styleTwo="true" />
      <Footer data={footer} />
    </>
  );
}

export default About;
