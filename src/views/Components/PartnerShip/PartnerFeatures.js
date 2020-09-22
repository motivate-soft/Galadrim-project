import React from 'react'
import styled from 'styled-components'
import Demo from "../../../assets/Images/demo.jpg"
import RightBottomImage from "../../../assets/Images/charts/security.svg"
import { Image } from './../Elements/CustomImages';

const Wrapper = styled.div`
    h3 {
        max-width: 774px;
        margin: 107px auto 52px;
        text-align: center;
        color: #001A5C;
    }
    .text-area {
        position: relative;
        max-width: 476px;
        height: 304px;
        padding: 40px 39px 56px;
        color: #00175f;
        font-size: 18px;
        font-family: 'RobotoMono-Light'; 
        /* line-height: 1.19; */
        border-radius: 8px;
        background-color: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(41,41,43,0.05), 0 20px 40px 0 rgba(41,41,43,0.05);
        img {
            z-index: -1;
            right: -24px;
            bottom: -24px;
            transform: rotateY(180deg);
        }
    }
`

export default function PartnerFeatures() {
    return (
        <div className="section partner-contact-block">
            <div className="container ">
                <h3 className="text-darkblue mx-auto">C'est au contact d'experts techniques, de leaders technologiques et de partenaires stratégiques que nous innovons ! </h3>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex partner-image-container">
                        <img src={Demo} alt="Partner" className="partner-img" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 partner-text-container">
                        <div className="position-relative partner-text">
                            <p className="text-darkblue">Afin d’apporter le meilleur service à nos clients, nous travaillons en étroite collaboration avec un écosystème de plus d’une dizaine de partenaires qui  nous accompagne et renforce notre offre d'expertises et de solutions technologiques.</p>
                            <img src={RightBottomImage} alt="Background" className="bottom-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
