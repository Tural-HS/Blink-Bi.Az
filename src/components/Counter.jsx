import React, { useState } from "react";
import CountUp from 'react-countup'
import Loading from './Loading';
import VisibilitySensor from 'react-visibility-sensor';
import { Container, Row, Col } from 'react-bootstrap';



function Counter({data}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    const [didViewCountUp , setDidViewCountUp ] = useState(false);

    if(!data) {
        return <Loading />
    }
    return (
        <section className="counter-statistics pt-120 pb-90">
            <Container>
                <Row>
                    {
                        data.map((item, index) => {
                            return (
                                <Col lg={3} sm={6} key={index}>
                                    <div className="single-counter">
                                        <div className="counter-icon">
                                            <img src={publicUrl + item.img.url} alt={item.img.alt} />
                                        </div>
                                        
                                        <div className="counter-content">
                                            <CountUp end={didViewCountUp ? item.countNumber : 0} separator=",">
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={isVisible => isVisible ? setDidViewCountUp(true) : null} delayedCall>
                                                        <h2 className="count count-number" ref={countUpRef}>1,200</h2>
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                            <span>{item.countText}</span>
                                        </div> 
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Counter
