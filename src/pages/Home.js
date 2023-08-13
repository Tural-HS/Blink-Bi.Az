import React, { useContext } from "react";
import { DataContext } from "../context";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Solution from "../components/Solution";
import Service from "../components/Service";
import Price from "../components/Price";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import HomeBlog from "../components/HomeBlog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Laptop from "../components/Laptop";

function Home() {
  const context = useContext(DataContext);
  const {
    hero1,
    feature,
    solution,
    service,
    price,
    team,
    testimonial,
    blog,
    footer,
  } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <Banner data={hero1} />
      {/* <Feature data={feature} /> */}
      <Laptop />
      {/* <Solution data={solution} /> */}
      <Service data={service} />
      {/* <Price data={price} />
            <Team data={team} /> */}
      {/* <Testimonial data={testimonial} />
            <HomeBlog data={blog} /> */}
      <Footer data={footer} />
    </>
  );
}

export default Home;
