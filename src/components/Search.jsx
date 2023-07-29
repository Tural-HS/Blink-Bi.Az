import React from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

function Search({search}) {
    return (
        <div className="full-page-search show">
            <button className="search-close-btn" onClick={search}>
                <FaTimes />
            </button>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="search-form p-5">
                            <form action="#">
                                <div className="dvpn_input-wrapper">
                                    <input type="text" placeholder="Enter Your Keyword" name="search" required />
                                    <span className="input-icon"><FaSearch/></span>
                                </div>
                                <div className="btn-wrap">
                                    <span></span>
                                    <button type="submit" className="btn">SEARCH</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Search
