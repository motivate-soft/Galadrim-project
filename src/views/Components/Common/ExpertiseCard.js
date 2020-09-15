import React from 'react'
import styled from 'styled-components'

const CardButton = styled.button`
    position: absolute;
    left: 50%;
    bottom: 24px;
    transform: translate(-50%);
    width: 80%;
    max-width: 180px;
    color: #001b5d;
    background-color: #FFFFFF;
    border: 1px solid #A5ABB7;
    border-radius: 6px;
    height: 35px;
    width: 177px;

    &:hover {
        color: white;
        border: 2px solid #ff5c4d;
        background-color: #ff5c4d;
    }
`

export default function ExpertiseCard({ id, img, title, text }) {
    return (
        <div className="text-center mx-auto p-3 d-flex flex-column">
            <img src={img} alt={title} className="mx-auto" />
            <h4 className="mx-auto font-weight-bold">{title}</h4>
            <p className="text-xs mx-auto">{text}</p>
            <CardButton>En savoir plus</CardButton>
        </div>
    )
}
