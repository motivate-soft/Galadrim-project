import React from 'react'

import { ReactComponent as SendIcon } from "../../../assets/Icons/send.svg"
import { ReactComponent as LinkedinIcon } from "../../../assets/Icons/linkedin.svg"
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import Author from './Author'

const ArticleContent = ({ content }) => {
    const sentenceArray = content.match(/[^\.!\?]+[\.!\?]+/g);
    return (
        <>
            {
                sentenceArray.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
        </>
    )
}

const keywords = [
    'keyword1',
    'keyword2',
    'keyword3',
    'keyword4',
    'keyword5',
]

export default function ArticleDetailBox(props) {
    const { id, title, content, image, date, user } = props.article
    return (
        <div className="efilab-article-box">
            <div className="container">
                <div className="article-container">
                    <div className="article-block">
                        <div className="social-media-link">
                            <SendIcon />
                            <FaLinkedinIn />
                            <FaFacebook />
                        </div>
                        <h4>{title}</h4>
                        <ArticleContent content={content} />
                        <img src={image} alt="article" />
                    </div>
                    <div className="article-block">
                        <h4>{title}</h4>
                        <ArticleContent content={content} />
                        <img src={image} alt="article" />
                    </div>
                    <div className="article-block">
                        <h4>{title}</h4>
                        <ArticleContent content={content} />
                    </div>
                    <div className="green-banner">
                        <h1>Décomplexons <br /> l’informatique<br /> ensemble.</h1>
                        <button className="btn btn-custom">Contactez nous</button>
                    </div>
                    <div className="keywords-block">
                        {
                            keywords.map((item, index) => (
                                <div key={index} className="btn btn-custom keyword">
                                    {item}
                                </div>))
                        }
                    </div>
                    <Author id={user.id} name={user.name} avatar={user.avatar} pubDate={date} />
                </div>

            </div>
        </div>
    )
}
