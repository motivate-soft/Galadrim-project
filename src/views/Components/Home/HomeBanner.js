import React from 'react'
import HomeBannerImage from "../../../assets/Images/home/home-banner-image@3x.png"
import { OrangeButton } from './../Elements/Buttons';
import { Underline } from '../Elements/Typography';
import styled from 'styled-components';


const title = "Décomplexer \n les nouvelles \n technologies"
const text = "Co-construire votre écosystème IT avec des solutions accessibles et sur mesure, en lien avec vos usages du quotidien."

const ContactButton = styled(OrangeButton)`
    padding: 4px 27px;
    @media (max-width: 768px){
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`

export default function HomeBanner() {
    return (
        <div className="section home-banner">
            <div className="container h-100 d-flex align-content-center ">
                <div className="row my-auto">
                    <div className="col-md-6 col-12 my-auto text-darkblue">
                        <h1 className="banner-title">{title}</h1>
                        <Underline className="banner-divider" />
                        <p className="banner-text">{text}</p>
                        <ContactButton>Contactez-nous</ContactButton>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="banner-image" alt="home banner" src={HomeBannerImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}
