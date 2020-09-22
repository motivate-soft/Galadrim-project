import React from 'react'
import styled from 'styled-components'
import { CustomButton } from '../Elements/Buttons'


const CardButton = styled(CustomButton)`
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: 24px;
    max-width: 180px;
    color: #001b5d;
    background-color: #FFFFFF;
    border: 1px solid #A5ABB7;
    height: 35px;
    width: 177px;

    &:hover {
        cursor: pointer;
        color: white;
        border: 2px solid #ff5c4d;
        background-color: #ff5c4d;
    }
`

export default function ExpertiseCard({ id, img, title, text }) {
    return (
        <div className="expertise-card">
            <div className="text-center mx-auto d-flex flex-column">
                <img src={img} alt={title} className="mx-auto" />
                <h4>{title}</h4>
                <p className="mx-auto">{text}</p>
                <CardButton>En savoir plus</CardButton>
            </div>
        </div>
    )
}
