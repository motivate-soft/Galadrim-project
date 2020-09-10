import React from 'react';
import './expertise_card.scss';

export default function ExpertiseCard(props)
{
    return (
        <>
            <div
                className="card-case"
                onMouseEnter={()=>props.onMouseEnter(props.id)}
                onMouseLeave={()=>props.onMouseLeave(props.id)}
            >
                <div className="card card-body expertise-card">
                    <img src={props.img.url} alt={props.img.alt} />
                    <div style={{maxWidth: props.titleWidth, marginLeft: 'auto', marginRight:'auto'}}>
                        <h2 className="expertise-card-title">{props.title}</h2>
                        <h4 className="expertise-card-subtitle">{props.subtitle}</h4>
                    </div>
                    <div className="expertise-card-content">
                        {props.content}
                    </div>
                </div>
            </div>
        </>
    );
}