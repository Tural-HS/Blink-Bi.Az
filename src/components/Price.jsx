import React from 'react'
import Loading from './Loading'
import Title from './Title'
import { Container, Row, Col } from 'react-bootstrap';

function Price({data, classText, styleTwo, styleThree, styleFour}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <section className={`${classText} pricing`}>
            <img src={publicUrl + data.bg_pattern.url} alt={data.bg_pattern.alt} className="section-pattern-img" />
            <Container>
                <Row>
                    <Col>
                        {/* Section Title */}
                        <Title title={data.title} subtitle={data.desc} classText={`${styleTwo ? 'title-shape title-shape-sky-blue text-center' : styleThree ? 'text-white title-shape title-shape-style-two text-center' : styleFour ? 'title-shape text-center' : 'text-white title-shape title-shape-style-two text-center'}`} />
                        {/* End Section Title */}
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    
                    {
                        data.items.map((item, index) => {
                            let active = index === 1 ? "active" : '';
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                    {/* Single Price  */}
                                    <div className={`${active} single-price ${styleTwo ? 'style--two' : styleThree ? 'style--three' : ''}`}>
                                        {item.ribbon ? <h4 className="ribbon">{item.ribbon}</h4> : ''}
                                        <div className="price-head">
                                            <h4>{item.title}</h4>
                                            <div className="price">
                                                <span className="currency">{item.price.currency}</span>
                                                <span className="value">{item.price.value}</span>
                                                <span className="duration">{item.price.duration}</span>
                                            </div>
                                            <h6>{item.saving}</h6>
                                        </div>
                                        <div className="price-body">
                                            <ul>
                                                <li>
                                                    <del>{item.feature_list.price.sale_price}</del>
                                                    <strong>{item.feature_list.price.base_price}</strong>
                                                </li>
                                                <li>{item.feature_list.feature1}</li>
                                                <li>{item.feature_list.feature2}</li>
                                            </ul>
                                            <div className="btn-wrap">
                                                <span></span>
                                                <a href={item.button.url} className="btn btn-sm">{item.button.text}</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Price  */}
                                </div>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Price

Price.defaultProps = {
    classText: 'gradient-bg pt-120 pb-90',
    styleTwo: false,
    styleThree: false
}
