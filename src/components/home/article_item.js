import React from 'react';
import { ArrowRightAltTwoTone } from '@material-ui/icons';
import {Link} from "react-router-dom";



export default function ArticleItem({ id, active, img, title, text, buttonText, onMouseEnter, onMouseLeave, tagClass, tagText, timeText }) {
    const styles = {

        largeIcon: {
            width: 20,
            height: 20,
        },

    };

    return (
        <div
            // className={active === true ? 'card active-card shadow-lg' : 'card shadow'}
            className="gradient-box mb-3"
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={() => onMouseLeave(id)}>
            <div className="card-body d-flex flex-column">
                <div className="image-box">
                    <img src={img} alt={title} className="mx-auto" />
                </div>
                <div className="article-content">
                    <p>
                        <span className={tagClass}>{tagText}</span> • <span className="time">{timeText}</span>
                    </p>
                    <h5 className="mx-auto font-weight-bold">{title}</h5>
                    <p className="mx-auto ">{text}</p>
                    <Link to="#" className="">{buttonText} <ArrowRightAltTwoTone style={styles.largeIcon}/></Link>
                </div>
            </div>
        </div >
    )
}
