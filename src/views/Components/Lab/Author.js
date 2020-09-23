import React from 'react'

export default function Author(props) {
    const { id, name, avatar, pubDate } = props
    return (
        <div className="author-container">
            <img src={avatar} alt="avatar" className="rounded" />
            <div>
                <h6>{name}</h6>
                <span className="pub-date">Publié le {pubDate}</span>
                {/* <span className="pub-date">Publié le 20 août </span> */}
            </div>
        </div>
    )
}
