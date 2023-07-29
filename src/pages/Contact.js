import React, { useContext } from 'react'
import { DataContext } from '../context'
import Footer from '../components/Footer'
import Map from '../components/Map'
import PageTitle from '../components/PageTitle'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Loading from '../components/Loading'
import Navbar from '../components/Navbar';

function Contact() {

    const context = useContext(DataContext);
    const { footer, contactInfo } = context.allData
    const { handleSearch, handleOffcanvas } = context;
    
    if(!contactInfo) {
        return <Loading />
    }
    return (
        <>
            <Navbar handler={{handleSearch, handleOffcanvas}} />
            <PageTitle pageName="Contact Us" />

            <section className="contact pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            <div className="contact-form-wrap">
                                <form action="#" className="contact-form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="number" className="form-control" placeholder="Your Phone No." />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="form-control" name="message" placeholder="Messages"></textarea>
                                        </div>
                                        <div className="col-lg-12 mt-3">
                                            <div className="btn-wrap">
                                                <span></span>
                                                <button type="submit" className="btn">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="form-response"></div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-info">
                                <div className="section-title style--two text-left">
                                    <h2>{contactInfo.title}</h2>
                                    <p>{contactInfo.desc}</p>
                                </div>

                                <div className="contact-info-list mt-n3">
                                    <div className="single-contact media">
                                        <div className="contact-icon">
                                            <FaPhone />
                                        </div>
                                        <div className="contact-content">
                                            {
                                                contactInfo.phone.map((item, index) => {
                                                    return <a key={index} href={`callto:${item.link}`}>{item.text}</a>
                                                })
                                            }
                                        </div>
                                    </div>
                                    
                                    <div className="single-contact media">
                                        <div className="contact-icon">
                                            <FaEnvelope />
                                        </div>
                                        <div className="contact-content">
                                            {
                                                contactInfo.email.map((item, index) => {
                                                    return <a key={index} href={`mailto:${item.link}`}>{item.text}</a>
                                                })
                                            }
                                        </div>
                                    </div>
                                    
                                    <div className="single-contact media">
                                        <div className="contact-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="contact-content">
                                            <p>{contactInfo.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Map />
            <Footer data={footer} />
        </>
    )
}

export default Contact
