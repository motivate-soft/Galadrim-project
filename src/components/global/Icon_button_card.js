import React from 'react';
import './icon_button_card.scss'

export default function IconButtonCard({ id, active, img, title, text, buttonText, onMouseEnter, onMouseLeave }) {
    return (
        <div
            // className={active === true ? 'card active-card shadow-lg' : 'card shadow'}
            className="card-case"
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={() => onMouseLeave(id)}>
            <div className="card-body card icon-button-card-area">
                <img src={img} alt={title} className="mx-auto" />
                <h4 className={'icon_button_card_title'}>{title}</h4>
                <p className={'icon_button_card_short_description'}>{text}</p>
                <div className={'action-button-area'}>
                    <button className='btn btn-custom'>{buttonText}</button>
                </div>
            </div>
        </div >
    )
}
