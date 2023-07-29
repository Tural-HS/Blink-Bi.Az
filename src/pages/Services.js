import React, { useContext } from 'react'
import { DataContext } from '../context'
import PageTitle from '../components/PageTitle'
import Service from '../components/Service';
import Price from '../components/Price';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Services() {

    const context = useContext(DataContext);
    const { service, price, testimonial, footer } = context.allData
    const { handleSearch, handleOffcanvas } = context;

    return (
        <>
            <Navbar handler={{handleSearch, handleOffcanvas}} />
            <PageTitle pageName="Services" />
            <Service data={service} />
            <Price data={price} />
            <Testimonial data={testimonial} />
            <Footer data={footer} />
        </>
    )
}

export default Services
