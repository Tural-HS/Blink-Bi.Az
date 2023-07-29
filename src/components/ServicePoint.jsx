import React from 'react'
import Loading from './Loading'
import { FaCaretRight } from 'react-icons/fa';

function ServicePoint({data}) {

    const onActive = (e) => {
        const elem = e.target.parentNode
        const siblings = Array.prototype.filter.call(elem.parentNode.children, sibling => sibling !== elem);
        
        siblings.map(item => item.classList.remove('active'));
        e.target.parentNode.classList.add('active');
    };

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <section className="service_point pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="service_point-content">
                            <div className="section-title style--two text-left mt-n2">
                                <h2>{data.title}</h2>
                                <p>{data.desc}</p>
                            </div>
                            
                            <ul className="service_point-list mt-n3 mb-4">
                                {
                                    data.country.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <FaCaretRight />
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="btn-wrap style--two">
                                <span></span>
                                <a href={data.btn.url} className="btn">{data.btn.text}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="service_point-map-img">
                            <img src={publicUrl + data.img.url} alt={data.img.alt} />
                            
                            {
                                data.points.map((item, index) => {
                                    return(
                                        <div key={index} onMouseOver={onActive} className={`l_info l_info${index+1}`}>
                                            <span className="circle-ball"></span>
                                            <div className="info-box text-center">
                                                <h3>{item.country}</h3>
                                                <span>{item.cities}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicePoint
