import React from 'react'
import Loading from './Loading'
import { FaStar } from 'react-icons/fa';
import Title from './Title';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';

function Testimonial({data, classText, styleTwo, styleThree}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 771,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };

    if(!data) {
        return <Loading />
    }
    return (
        <section className={`${classText} testimonial`}>
            <Container>
                <Row>
                    <Col>
                        {/* Section Title */}
                        <Title title={data.title} subtitle={data.desc} classText={`${styleTwo ? 'title-shape title-shape-sky-blue text-center' : styleThree ? 'title-shape title-shape-c2 title-shape-style-three text-center' : 'title-shape text-center'}`} />
                        {/* End Section Title */}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Slider {...settings} className={`testimonial-carousel ${styleTwo ? 'style--two' : styleThree ? 'style--three' : ''}`}>
                            {
                                data.items.map((item, index) => {
                                    return (
                                        <div key={index} className="single-testimonial">
                                            <div className="quote"><svg xmlns="http://www.w3.org/2000/svg" width="23.999" height="20" viewBox="0 0 23.999 20" className="svg">
                                                <path id="quote" d="M910.187,5611a2.271,2.271,0,0,1-2.343-2.185v-1.4a.47.47,0,0,1,.937,0v1.4a1.362,1.362,0,0,0,1.406,1.311h6.469a1.363,1.363,0,0,0,1.407-1.311v-5.238a1.362,1.362,0,0,0-1.407-1.31h-3.508a.454.454,0,0,1-.468-.437,7.642,7.642,0,0,1,1.2-4.6,4.746,4.746,0,0,1,3.282-1.841V5591.9c-5.64.471-8.384,3.819-8.384,10.223v1.563a.47.47,0,0,1-.937,0v-1.563c0-3.488.819-6.2,2.435-8.05,1.633-1.873,4.1-2.909,7.329-3.079h.026a.486.486,0,0,1,.322.12.421.421,0,0,1,.147.317v4.342a.45.45,0,0,1-.427.435c-2.617.221-3.946,1.917-4.053,5.18h3.032a2.271,2.271,0,0,1,2.344,2.184v5.238a2.271,2.271,0,0,1-2.344,2.185Zm-12.843,0a2.271,2.271,0,0,1-2.343-2.185v-6.687c0-3.488.818-6.2,2.435-8.05,1.633-1.873,4.1-2.909,7.329-3.079h.026a.49.49,0,0,1,.322.12.42.42,0,0,1,.146.317v4.342a.45.45,0,0,1-.426.435c-2.618.221-3.946,1.917-4.053,5.18h3.032a2.271,2.271,0,0,1,2.344,2.184v5.238a2.272,2.272,0,0,1-2.344,2.185Zm.844-4.106v3.232h5.625a1.363,1.363,0,0,0,1.407-1.311v-5.238a1.362,1.362,0,0,0-1.407-1.31H900.3a.454.454,0,0,1-.468-.437,7.638,7.638,0,0,1,1.2-4.6,4.746,4.746,0,0,1,3.281-1.841V5591.9c-5.639.471-8.383,3.819-8.383,10.223v6.687a1.353,1.353,0,0,0,1.312,1.307v-3.229a.47.47,0,0,1,.938,0Zm9.656-1.338v-.009a.47.47,0,0,1,.937,0v.009a.47.47,0,0,1-.937,0Zm-10.594-.176v0a.47.47,0,1,1,.469.438A.454.454,0,0,1,897.25,5605.374Z" transform="translate(-895.001 -5590.998)" fill="#fff"></path>
                                                </svg>
                                            </div>


                                            <div className="testimonial-content">
                                                <p>{item.desc}</p>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="media review-info align-items-center">
                                                    <div className="testimonial-img">
                                                        <img src={publicUrl + item.img.url} alt={item.img.alt} />
                                                    </div>
                                                    <div className="testimonial-name">
                                                        <h4>{item.title}</h4>
                                                        <span>{item.subtitle}</span>
                                                    </div>
                                                </div>
                                                <div className="rating">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial

Testimonial.defaultProps = {
    classText: 'section-bg pt-120 pb-140'
}
