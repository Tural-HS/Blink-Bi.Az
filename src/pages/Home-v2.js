import React, { useContext } from 'react'
import { DataContext } from '../context'
import Banner2 from '../components/Banner2';
import LogoCarousel from '../components/LogoCarousel';
import Price from '../components/Price';
import Solution from '../components/Solution';
import Service from '../components/Service';
import App from '../components/App';
import ServicePoint from '../components/ServicePoint';
import Testimonial from '../components/Testimonial';
import HomeBlog from '../components/HomeBlog';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {

    const context = useContext(DataContext);
    const { hero2, companyLogo, solution, service, price, app, servicePoint, testimonial, blog, footer } = context.allData
    const { handleSearch, handleOffcanvas } = context;

    return (
        <>
            <Navbar handler={{handleSearch, handleOffcanvas}} headerTop="true" />
            <Banner2 data={hero2} />
            <LogoCarousel data={companyLogo} />
            <Price data={price} classText="pb-90" styleTwo="true" />
            <Solution data={solution} styleTwo="true" />
            <Service data={service} classText="pt-120 mb-lg-0 mb-n4 pb-0 pb-lg-4" styleTwo="true" />
            <App data={app} />
            <ServicePoint data={servicePoint} />
            <Testimonial data={testimonial} styleTwo="true" />
            <HomeBlog data={blog} styleTwo="true" />
            <Footer data={footer} styleTwo="true" />
        </>
    )
}

export default Home
