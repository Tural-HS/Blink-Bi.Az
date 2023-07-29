import React from 'react'
import Loading from './Loading'
import { Container, Row, Col } from 'react-bootstrap';

    function Banner2({data}) {
        
    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <div className="banner layer gradient-section-bg style--two">
            <img src={publicUrl + data.bannerShape.url} alt={data.bannerShape.alt} className="banner-shape" />
            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <div className="banner-content">
                            <h4>{data.subtitle}</h4>
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>
                            <div className="btn-wrap">
                                <span></span>
                                <a href={data.button.url} className="btn btn-white">{data.button.text}</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="banner-img">
                            <img src={publicUrl + data.img.url} alt={data.img.alt} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner2
