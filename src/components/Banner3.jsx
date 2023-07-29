import React from 'react'
import Loading from './Loading'
import { Container, Row, Col } from 'react-bootstrap';

    function Banner2({data}) {
        
    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <div className="banner style--three">
            <img src={publicUrl + data.bannerShape.url} alt={data.bannerShape.alt} className="banner-shape" />
            <Container>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <div className="banner-content">
                            <h4>{data.subtitle}</h4>
                            <h1>{data.title}</h1>
                            <p>{data.desc}</p>

                            <div className="banner-btn-group">
                                {
                                    data.btn.map((item, index) =>{
                                        return (
                                            <div key={index} className="btn-wrap">
                                                <span></span>
                                                <a href={item.url} className="btn">{item.text}</a>
                                            </div>
                                        )
                                    })
                                }
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
