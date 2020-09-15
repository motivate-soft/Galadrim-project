import React from 'react';
import { ArrowRightAltTwoTone } from '@material-ui/icons';
import {Link} from "react-router-dom";
import './article_card.scss';



export default function ArticleCard({ id, active, img, title, text, buttonText, onMouseEnter, onMouseLeave, tagClass, tagText, timeText }) {
    const styles = {

        largeIcon: {
            width: 20,
            height: 20,
        },

    };

    return (
        <div
            // className={active === true ? 'card active-card shadow-lg' : 'card shadow'}
            className="card-case"
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={() => onMouseLeave(id)}>
            <div className="card-body card">
                <div className="card-image">
                    <img src={img} alt={title} className="" />
                </div>
                <div className="article-content">
                    <p className={'tag'}>
                        <span className={tagClass}>{tagText}</span> • <span className="time">{timeText}</span>
                    </p>
                    <h5 className="title">{title}</h5>
                    <p className="short-description">{text}</p>
                    <Link to="#" className="">{buttonText} <ArrowRightAltTwoTone style={styles.largeIcon}/></Link>
                </div>
            </div>
        </div >
    )
}
