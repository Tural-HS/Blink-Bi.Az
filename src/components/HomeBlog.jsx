import React from 'react'
import Loading from './Loading'
import Title from './Title'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

function HomeBlog({data, classText, styleTwo, styleThree}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <section className={`${classText} blog`}>
            <Container>
                <Row>
                    <Col>
                        {/* Section Title */}
                        <Title title={data.title} subtitle={data.desc} classText={`${styleTwo ? 'title-shape title-shape-sky-blue text-center' : styleThree ? 'title-shape title-shape-c2 text-center' : 'title-shape text-center'}`} />
                        {/* End Section Title */}
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Row>
                            {
                                data.items.map((item, index) => {
                                    if( index < 2) {
                                    return (
                                        <Col md={6} key={index}>
                                            <div className={`single-blog ${styleTwo ? 'style--three' : styleThree ? 'style--four' : ''}`}>
                                                <Link to="/single-blog" className="blog-img">
                                                    <img src={publicUrl + item.img.url} alt={item.img.alt} className="img-fluid" />
                                                </Link>
                                                <div className="blog-content">
                                                    <div className="blog-meta">
                                                        <ul className="list-inline">
                                                            <li><a href={item.blog_meta.url} className="posted">{item.blog_meta.date}</a></li>
                                                        </ul>
                                                    </div>
                                                    <h3><Link to="/single-blog">{item.title}</Link></h3>
                                                    <p>{item.desc}</p>
                                                    <Link to="/single-blog" className="btn-link">{item.button.text} <FaArrowRight /></Link>
                                                </div>
                                            </div>
                                        </Col>
                                    )} else {return null}
                                })
                            }
                        </Row>
                    </Col>
                    <Col lg={4} md={6}>
                        <div className={`news-letter-form-wrapper text-center ${styleTwo ? 'style--two' : styleThree ? 'style--three' : ''}`}>
                            <h3>{data.newsletter.title}</h3>
                            <p>{data.newsletter.desc}</p>
                            <div className="newsletter-form">
                                <form action={data.newsletter.action} method="post" target="_blank" >
                                    <div className="dvpn_input-wrapper">
                                        <input className="sectsubscribe-email" type="email" placeholder={data.newsletter.placeholder} required />
                                    </div>
                                    <div className="btn-wrap w-100 d-block">
                                        <span></span>
                                        <button name="sectsubscribe" className="btn btn-white w-100 d-block" type="submit">{data.newsletter.btn}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeBlog

HomeBlog.defaultProps = {
    classText: 'pt-120 pb-90'
}
