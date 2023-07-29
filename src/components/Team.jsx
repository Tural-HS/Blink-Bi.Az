import React from 'react'
import Loading from './Loading'
import { FaArrowRight, FaDribbble, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Title from './Title';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';

function Team({data, classText, styleThree}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
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
        <section className={`${classText} team service-team`}>
            <Container>
                <Row>
                    <Col>
                        {/* Section Title  */}
                        <Title title={data.title} subtitle={data.desc} classText={`${styleThree ? 'title-shape title-shape-c2 title-shape-style-three text-center' : 'title-shape text-center'}`} />
                        {/* End Section Title  */}
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Slider {...settings} className={`team-carousel ${styleThree ? 'style--three' : ''}`}>
                            {
                                data.items.map((item, index) => {
                                    return (
                                        <div key={index} className={`single-team text-center ${styleThree ? `style--three` : ''}`}>
                                            <div className="member-img">
                                                <img src={publicUrl + item.img.url} alt={item.img.alt} />
                                                <a href={item.btn_url} className="btn-rounded">
                                                    <FaArrowRight />
                                                </a>
                                            </div>
                                            
                                            <div className="member-details">
                                                <h3>{item.title}</h3>
                                                <p>{item.subtitle}</p>
                                            </div>
                                            
                                            <div className="social-links">
                                                <a href={item.socials.dribble_url}>
                                                    <FaDribbble />
                                                </a>
                                                <a href={item.socials.twitter_url}>
                                                    <FaTwitter />
                                                </a>
                                                <a href={item.socials.linkedin_url}>
                                                    <FaLinkedinIn />
                                                </a>
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

export default Team

Team.defaultProps = {
    classText: 'pt-120 pb-140'
}