import React, { useContext } from 'react'
import { DataContext } from '../context'
import Countdown from 'react-countdown';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading';


// Random component
const Completionist = () => <span>You are good to go!</span>;


// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <ul id="countdown">
                <li>
                    <div className="single-countdown">
                        <h2 className="days">{days}</h2>
                        <span className="days_text">Days</span>
                    </div>
                </li>
                <li>
                    <div className="single-countdown">
                        <h2 className="hours">{hours}</h2>
                        <span className="hours_text">Hours</span>
                    </div>
                </li>
                <li>
                    <div className="single-countdown">
                        <h2 className="minutes">{minutes}</h2>
                        <span className="minutes_text">Minutes</span>
                    </div>
                </li>
                <li>
                    <div className="single-countdown">
                        <h2 className="seconds">{seconds}</h2>
                        <span className="seconds_text">Seconds</span>
                    </div>
                </li>
            </ul>
        )
    }
};


function ComingSoon() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    const context = useContext(DataContext);
    const { comingSoon } = context.allData

    if(!comingSoon) {
        return <Loading />
    }
    return (
        <section className="coming-soon min-vh-100 vw-100">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        {/* Coming Soon Content */}
                        <div className="coming-soon-content text-white">
                            <img src={publicUrl + comingSoon.logo.url} alt={comingSoon.logo.alt} />
                            <h1>{comingSoon.title}</h1>

                            <Countdown
                                date={'2021-12-14'}
                                renderer={renderer}
                            />

                            <p>{comingSoon.desc}</p>
                            
                            {/* Coming Soon Newsletter */}
                            <div className="coming-soon-newsletter">
                                <form action={comingSoon.form.action} target="_blank" className="newsletter-form">
                                    <div className="input-group">
                                        <input className="form-control" type="email" placeholder="Join Newsletters"/>
                                        <div className="input-group-prepend">
                                            <div className="btn-wrap">
                                                <span></span>
                                                <button className="btn" type="submit">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Coming Soon Newsletter */}
                        </div>
                        {/* End Coming Soon Content */}
                    </Col>
                    <Col lg={6}>
                        {/* Coming Soon IMG */}
                        <div className="coming-soon-img">
                            <img src="images/media/coming-soon-img.png" alt="" />
                        </div>
                        {/* End Coming Soon IMG */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ComingSoon
