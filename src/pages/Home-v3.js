import React, { useContext } from 'react'
import { DataContext } from '../context'
import Banner3 from '../components/Banner3';
import Price from '../components/Price';
import Team from '../components/Team';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';
import HomeBlog from '../components/HomeBlog';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {

    const context = useContext(DataContext);
    const { hero3, service, price, team, testimonial, blog, footer } = context.allData
    const { handleSearch, handleOffcanvas } = context;

    return (
        <>
            <Navbar handler={{handleSearch, handleOffcanvas}} />
            <Banner3 data={hero3} />
            <Service data={service} styleThree="true" />
            <Price data={price} classText="pricing gradient-bg2 position-relative pt-120 pb-90" styleThree="true" />
            <Team data={team} styleThree="true" />
            <Testimonial data={testimonial} styleThree="true" />
            <HomeBlog data={blog} styleThree="true" />
            <Footer data={footer} styleThree="true" />
        </>
    )
}

export default Home
