import React from 'react'
import Loading from './Loading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';

function LogoCarousel({data, styleTwo}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 6,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                slidesToShow: 2,
                }
            }
        ]
    };

    if(!data) {
        return <Loading />
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Slider {...settings} className={`logo-carousel ${styleTwo ? 'style--two': ''}`}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index} className="single-logo">
                                            <img src={publicUrl + item.url} alt={item.alt} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogoCarousel
