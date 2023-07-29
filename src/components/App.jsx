import React from 'react'
import Loading from './Loading'

function App({data}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <section className="app-section section-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="app-img">
                            <img src={publicUrl + data.img.url} alt={data.img.alt} />
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="app-content">
                            <div className="section-title style_2 text-left title-shape title-shape-sky-blue">
                                <h2>{data.title}</h2>
                                <p>{data.desc}</p>
                            </div>
                            <div className="download-btns mt-n3">
                                {
                                    data.btn.map((item, index) => {
                                        return (
                                            <a key={index} href={item.url} className="download-btn d-inline-block mb-3">
                                                <img src={publicUrl + item.img} alt={item.alt} />
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App
