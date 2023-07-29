import React, { useContext } from "react";
import { DataContext } from "../context";
import { Pagination } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import { FaArrowRight } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Blog() {
  const context = useContext(DataContext);
  const { blog, footer, sidebar } = context.allData;
  const { handleSearch, handleOffcanvas } = context;

  let publicUrl = process.env.PUBLIC_URL + "/";
  if (!blog) {
    return <Loading />;
  }
  return (
    <>
      <Navbar handler={{ handleSearch, handleOffcanvas }} />
      <PageTitle pageName="Our Blog" />
      <section className="pt-120 pb-120">
        <Container>
          <Row className="gutter-50">
            <Col lg={8}>
              <Row>
                {blog.items.map((item, index) => {
                  return (
                    <Col md={6} key={index}>
                      <div className={`single-blog`}>
                        <Link to="/single-blog" className="blog-img">
                          <img
                            src={publicUrl + item.img.url}
                            alt={item.img.alt}
                            className="img-fluid"
                          />
                        </Link>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <ul className="list-inline">
                              <li>
                                <a href={item.blog_meta.url} className="posted">
                                  {item.blog_meta.date}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h3>
                            <Link to="/single-blog">{item.title}</Link>
                          </h3>
                          <p>{item.desc}</p>
                          <Link to="/single-blog" className="btn-link">
                            {item.button.text} <FaArrowRight />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
              <Row>
                <Col>
                  <Pagination className="pagination mb-0">
                    {/* <Pagination.First > <FaArrowLeft /> </Pagination.First> */}
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item active>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Last>
                      {" "}
                      <FaArrowRight />{" "}
                    </Pagination.Last>
                  </Pagination>
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Sidebar data={sidebar} />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer data={footer} />
    </>
  );
}

export default Blog;
