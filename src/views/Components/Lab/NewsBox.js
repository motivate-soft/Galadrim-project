import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


export default function NewsBox(props) {
    const { id, category, image, title, content, date, time } = props.news
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6 d-flex">
                    <div className="innews-image-box">
                        <img src={image} alt="News" />
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <div className="innews-box">
                        <div className="news-info">
                            <p><span>{category}</span>• {time} minutes</p>
                        </div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        <span className="pub-date">Publié le 20 août 2020</span>
                        {/* <span className="pub-date">Publié le {date}</span> */}
                        <Link to={`/efilab/${id}`} className="article-link">Lire l’article<FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
