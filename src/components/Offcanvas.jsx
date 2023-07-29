import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Offcanvas({data, offcanvas}) {

    let publicUrl = process.env.PUBLIC_URL + '/'

    return (
        <div className="offcanvas_menu">
            <div className="offcanvas-overlay fixed-top w-100 h-100 show" onClick={offcanvas}></div>
            <div className="offcanvas-wrapper fixed-top h-100 show">
                <div className="offcanvas-close position-absolute" onClick={offcanvas}>
                    <i className="fa fa-times"></i>
                </div>

                <div className="offcanvas-content">
                    {/* Widget Logo */}
                    <div className="widget widget_logo">
                        <Link to="/"><img src={publicUrl + data.logo.path} alt={data.logo.alt} /></Link>
                    </div>
                    {/* End Widget Logo */}

                    {/* Widget About */}
                    <div className="widget widget_about">
                        <h3 className="widget-title">{data.widgetAbout.title}</h3>
                        <p>{data.widgetAbout.desc}</p>
                    </div>
                    {/* End Widget About */}

                    {/* Widget IP */}
                    <div className="widget widget_ip">
                        <h3 className="widget-title">{data.widgetIp.title}</h3>
                        <ul>
                            {
                                data.widgetIp.ip.map((ip, index) => {
                                    return <li key={index}>{ip}</li>
                                })
                            }
                        </ul>
                    </div>
                    {/* End Widget IP */}

                    {/* Widget About */}
                    <div className="widget widget_about">
                        <h3 className="widget-title">{data.widgetIsp.title}</h3>
                        <p>{data.widgetIsp.isp}</p>
                    </div>
                    {/* End Widget About */}

                    {/* Widget  Contact */}
                    <div className="widget widget_contact">
                        <h3 className="widget-title">{data.widgetContact.title}</h3>
                        <ul>
                            <li>
                                <span className="icon">
                                    <FaEnvelope />
                                </span> 
                                <a href={`mailto:${data.widgetContact.mail.link}`}>{data.widgetContact.mail.text}</a>
                            </li>
                            <li>
                                <span className="icon">
                                    <FaPhone />
                                </span> 
                                <a href={`callto:${data.widgetContact.phone.link}`}>{data.widgetContact.phone.text}</a>
                            </li>
                            <li>
                                <span className="icon">
                                    <FaMapMarkerAlt />
                                </span>{data.widgetContact.location}
                            </li> 
                        </ul>
                    </div>
                    {/* End Widget Contact */}
                </div>

                {/* Widget Social Icon */}
                <div className="widget widget_social_links border-top mt-5">
                    {/* <h3 className="widget-title">Follow Us On:</h3> */}
                    <div className="social-links">
                        <a href={data.socials.facebook_url}>
                            <FaFacebookF />
                        </a>
                        <a href={data.socials.twitter_url}>
                            <FaTwitter />
                        </a>
                        <a href={data.socials.linkedin_url}>
                            <FaLinkedinIn />
                        </a>
                        <a href={data.socials.instagram_url}>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                {/* End Widget Social Icon */}
            </div>
        </div>
    )
}

export default Offcanvas
