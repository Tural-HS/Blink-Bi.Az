import React, { useContext } from 'react'
import { DataContext } from '../context'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

function Error() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    const context = useContext(DataContext);
    const { fourZeroFour } = context.allData

    if(!fourZeroFour) {
        return <Loading />
    }
    return (
        <section className="min-vh-100 vw-100 bg-404 d-flex align-items-center justify-content-center text-center">
            <Container>
                <Row>
                    <Col>
                        {/* 404 Content */}
                        <div className="content-404">
                            <img src={publicUrl + fourZeroFour.img.url} className="mb-4" alt={fourZeroFour.img.alt} />
                            <h1>{fourZeroFour.title}</h1>
                            <p>{fourZeroFour.desc}</p>

                            {/* Search Form */}
                            <div className="search-form style--two">
                                {/* Widget Search Begin */}
                                <form action={fourZeroFour.form.action}>
                                    <input name="s" type="text" className="form-control" placeholder="Enter Your Keyword" required />
                                    <button type="submit">
                                        <img src="images/icons/search.svg" alt="" />
                                    </button>
                                </form>
                            </div>
                            {/* End Search Form */}

                            <Link to="/" className="btn-link style--two">
                                <img src="images/icons/left-arrow.svg" alt="" className="mr-2" />
                                Go Back Home
                            </Link>
                        </div>
                        {/* End 404 Content */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Error
