import React from 'react'
import LeftBgImage from "../../../assets/Images/left_bg.png"
import RightBgImage from "../../../assets/Images/right_bg.png"
import styled from 'styled-components'
import { CustomButton } from '../Elements/Buttons';

const defaultColor = '#ff5e4d'

const ContactButton = styled(CustomButton)`
    display: block;
    margin: 28px auto 0;
    padding: 5px 59px;
    max-width: 255px;
    color: #ffffff;
    white-space: nowrap;
    @media (max-width: 767px){
        margin-bottom: 150px;
    }
`

export default function FooterBanner(props) {
    const { color, title } = props;
    return (
        <div className="section footer-banner">
            <div className="container">
                <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>{title ? title : ""}</h1>
                <ContactButton className={color ? `bg-${color}` : `bg-green`} >Contactez-nous</ContactButton>
            </div>
            <img src={LeftBgImage} className="bottom-left" alt="Left background" />
            <img src={RightBgImage} className="bottom-right" alt="Right background" />
        </div>
    )
}
