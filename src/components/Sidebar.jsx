import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import Loading from './Loading';

function Sidebar({data}) {

    let publicUrl = process.env.PUBLIC_URL + '/'
    if(!data) {
        return <Loading />
    }
    return (
        <div className="blog-sidebar">
            <div className="widget widget_search">
                <form action={data.widgetSearch.action} className="search-form">
                    <div className="theme-input-group">
                        <input type="search" className="theme-input-style" placeholder="Search Here" />
                        <button type="submit" className="submit-btn">
                            <img src={publicUrl + data.widgetSearch.iconLink} alt="Search Icon" className="svg" />
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="widget widget_categories">
                <div className="widget-title">
                    <h3>{data.widgetCategories.title}</h3>
                </div>

                <ul>
                    {
                        data.widgetCategories.items.map((item, index) => {
                            return <li key={index}><a href={item.link}>{item.text}</a></li>
                        })
                    }
                </ul>
            </div>
            
            <div className="widget widget_recent_entries">
                <div className="widget-title">
                    <h3>{data.widgetRecentPost.title}</h3>
                </div>

                <ul>
                    {
                        data.widgetRecentPost.posts.map((post, index) => {
                            return (
                                <li key={index}>
                                    <span className="posted-on">
                                        <FaCalendarAlt />
                                        <a href={post.date.link}>{post.date.text}</a>
                                    </span>
                                    <h4 className="post-title">
                                        <a href={post.title.link}>{post.title.text}</a>
                                    </h4>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <div className="widget-title">
                    <h3 className="widget-title">{data.widgetTags.title}</h3>
                </div>

                <div className="tagcloud">
                    {
                        data.widgetTags.tags.map((tag, index) => {
                            return <a key={index} href={tag.link} className="tag-cloud-link">{tag.text}</a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar
