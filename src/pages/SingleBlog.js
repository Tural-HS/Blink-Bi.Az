import React, { useContext } from 'react'
import { DataContext } from '../context'
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle'
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaStackOverflow, FaWhatsapp, FaShare } from 'react-icons/fa';
import Comments from '../components/Comments';
import Navbar from '../components/Navbar';

function SingleBlog() {

    const context = useContext(DataContext);
    const { blogDetails, footer, sidebar } = context.allData
    const { handleSearch, handleOffcanvas } = context;

    let replayLink = '#';
    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!blogDetails) {
        return <Loading />
    }
    return (
        <>
            <Navbar handler={{handleSearch, handleOffcanvas}} />
            <PageTitle pageName="Blog Details" />
            <div className="pt-120 pb-120">
                <Container>
                    <Row className="gutter-50">
                        <Col lg={8}>
                            <article className="post-details">
                                <header className="entry-header">
                                    <div className="entry-thumbnail"> 
                                        <img src={publicUrl + blogDetails.img.url} alt={blogDetails.img.alt} />
                                    </div>

                                    <h1 className="entry-title">{blogDetails.title}</h1>

                                    <ul className="list-inline list-unstyled entry-meta">
                                        <li>
                                            <span>{blogDetails.postedOn.text}</span>
                                            <a href={blogDetails.postedOn.link}><time className="entry-date">{blogDetails.postedOn.date}</time></a>
                                        </li>

                                        <li>
                                            <span>{blogDetails.postedBy.text}</span>
                                            <a href={blogDetails.postedBy.link}>{blogDetails.postedBy.name}</a>
                                        </li>
                                    </ul>
                                </header>
                                
                                <div className="entry-content mb-40">
                                    <p>{blogDetails.para1}</p>

                                    
                                    <blockquote>
                                        <p>{blogDetails.blockquote.desc}</p>

                                        <cite>{blogDetails.blockquote.cite}</cite>
                                    </blockquote>
                                    
                                    <p>{blogDetails.para2}</p>
                                </div>
                                
                                <footer className="entry-footer">
                                    <div className="social-share d-flex justify-content-center align-items-center mb-40">
                                        <p className="mb-0 mr-3"><strong>{blogDetails.socialShare.text}</strong></p>
                                        <div className="social-links">
                                            <a href={blogDetails.socialShare.links.facebook}><FaFacebookF /></a>
                                            <a href={blogDetails.socialShare.links.twitter}><FaTwitter /></a>
                                            <a href={blogDetails.socialShare.links.instagram}><FaInstagram /></a>
                                            <a href={blogDetails.socialShare.links.pinterest}><FaPinterestP /></a>
                                            <a href={blogDetails.socialShare.links.stackoverflow}><FaStackOverflow /></a>
                                        </div>
                                    </div>

                                    <div className="row border-top border-bottom pt-3 pb-3">
                                        <div className="col-lg-6">
                                            <div className="entry-tags">
                                                <ul className="list-inline media">
                                                    <li>{blogDetails.tags.title}</li>
                                                    <li className="media-body">
                                                        {
                                                            blogDetails.tags.tag.map((tag, index) => {
                                                                return <a key={index} href={tag.link}>{tag.text}</a>
                                                            })
                                                        }
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="entry-categories">
                                                <ul className="list-inline media">
                                                    <li>{blogDetails.categories.title}</li>
                                                    <li className="media-body">
                                                        {
                                                            blogDetails.categories.category.map((tag, index) => {
                                                                return <a key={index} href={tag.link}>{tag.text}</a>
                                                            })
                                                        }
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </article>
                            
                            <div className="post-author media align-items-sm-center">
                                <div className="author-thumb">
                                    <img alt={blogDetails.postAuthor.img.alt} src={publicUrl + blogDetails.postAuthor.img.url} />
                                </div>
                                
                                <div className="author-info media-body">
                                    <h4>{blogDetails.postAuthor.title}</h4>
                                    <p>{blogDetails.postAuthor.desc}</p>

                                    <div className="social-links">
                                        <a href={blogDetails.postAuthor.links.facebook}><FaFacebookF /></a>
                                        <a href={blogDetails.postAuthor.links.twitter}><FaTwitter /></a>
                                        <a href={blogDetails.postAuthor.links.whatsapp}><FaWhatsapp /></a>
                                        <a href={blogDetails.postAuthor.links.pinterest}><FaPinterestP /></a>
                                        <a href={blogDetails.postAuthor.links.instagram}><FaInstagram /></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="comments-area mt-4">
                                <h4 className="comments-title">Comments (05)</h4>

                                <ul className="comment-list">
                                    <li className="comment">
                                        <article className="single-comment media">
                                            <div className="comment-author-image">
                                                <img alt="" src="images/blog/author_1.jpg" />
                                            </div>
                                            
                                            <div className="comment-content media-body">
                                                <div className="d-flex align-items-center">
                                                    <h5 className="author_name">Kendra Ratzlayff</h5>
                                                    <span className="commented-on">
                                                        <time dateTime="2012-09-03T10:18:04+00:00">August 14, 2019 at 11:35pm</time>
                                                    </span>
                                                </div>

                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>

                                                <a className="comment-reply-link" href={replayLink}>
                                                    <FaShare />Reply
                                                </a>
                                            </div>
                                        </article>
                                    </li>

                                    <li className="comment">
                                        <article className="single-comment media">
                                            <div className="comment-author-image">
                                                <img alt="" src="images/blog/author_2.jpg" />
                                            </div>
                                            
                                            <div className="comment-content media-body">
                                                <div className="d-flex align-items-center">
                                                    <h5 className="author_name">Kendra Ratzlayff</h5>
                                                    <span className="commented-on">
                                                        <time dateTime="2012-09-03T10:18:04+00:00">August 14, 2019 at 11:35pm</time>
                                                    </span>
                                                </div>
                                        
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                        
                                                <a className="comment-reply-link" href={replayLink}>
                                                    <FaShare />Reply
                                                </a>
                                            </div>
                                        </article>

                                        <ul className="children">
                                            <li className="comment">
                                                
                                                <article className="single-comment media">
                                                    <div className="comment-author-image">
                                                        <img alt="" src="images/blog/author-3.jpg" />
                                                    </div>
                                                    
                                                    <div className="comment-content media-body">
                                                        <div className="d-flex align-items-center">
                                                            <h5 className="author_name">Kendra Ratzlayff</h5>
                                                            <span className="commented-on">
                                                                <time dateTime="2012-09-03T10:18:04+00:00">August 14, 2019 at 11:35pm</time>
                                                            </span>
                                                        </div>
                                                
                                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                                
                                                        <a className="comment-reply-link" href={replayLink}>
                                                            <FaShare />Reply
                                                        </a>
                                                    </div>
                                                </article>

                                                <ul className="children">
                                                    <li className="comment">
                                                        <article className="single-comment media">
                                                            <div className="comment-author-image">
                                                                <img alt="" src="images/blog/author-3.jpg" />
                                                            </div>
                                                            
                                                            <div className="comment-content media-body">
                                                                <div className="d-flex align-items-center">
                                                                    <h5 className="author_name">Kendra Ratzlayff</h5>
                                                                    <span className="commented-on">
                                                                        <time dateTime="2012-09-03T10:18:04+00:00">August 14, 2019 at 11:35pm</time>
                                                                    </span>
                                                                </div>
                                                        
                                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                                        
                                                                <a className="comment-reply-link" href={replayLink}>
                                                                    <FaShare />Reply
                                                                </a>
                                                            </div>
                                                        </article>
                                                    </li>
                                                    <li className="comment">
                                                        <article className="single-comment media">
                                                            <div className="comment-author-image">
                                                                <img alt="" src="images/blog/author-3.jpg" />
                                                            </div>
                                                            
                                                            <div className="comment-content media-body">
                                                                <div className="d-flex align-items-center">
                                                                    <h5 className="author_name">Kendra Ratzlayff</h5>
                                                                    <span className="commented-on">
                                                                        <time dateTime="2012-09-03T10:18:04+00:00">August 14, 2019 at 11:35pm</time>
                                                                    </span>
                                                                </div>
                                                        
                                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                                        
                                                                <a className="comment-reply-link" href={replayLink}>
                                                                    <FaShare />Reply
                                                                </a>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            
                            <Comments />
                        </Col>
                        <Col lg={4}>
                            <Sidebar data={sidebar} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer data={footer} />
        </>
    )
}

export default SingleBlog
