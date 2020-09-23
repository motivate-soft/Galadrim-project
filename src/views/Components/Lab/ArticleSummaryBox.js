import React from 'react'
import Author from './Author'

export default function ArticleSummaryBox(props) {
    const { id, category, image, title, content, date, time, user } = props.article
    return (
        <div id={id} className="section article-summary-box">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 d-flex">
                        <div className="article-image-card">
                            <img src={image} alt="News" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="article-summary-card">
                            <div className="article-info">
                                <p><span>{category}</span>• {time} minutes</p>
                            </div>
                            <h2>{title}</h2>
                            <Author id={user.id} name={user.name} avatar={user.avatar} pubDate={date} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
