import React from 'react'
import styled from 'styled-components'
import { Underline, BannerTitle, Paragraph } from '../Elements/Typography';

const Wrapper = styled.div`
    max-width: max-content;
    @media only screen and (max-width: 768px){
        margin-left: auto;
        margin-right: auto;
        padding: 0 5px;
    }
    @media only screen and (min-width: 768px){
        padding-left: 50px;
        margin: auto;
    }
    @media only screen and (min-width: 992px){
        padding-left: 50px;
        margin-left: 0;
    }
    @media only screen and (min-width: 1400px){
        padding-left: 0;
    }
    img {
        @media (max-width: 768px){
            width: 37px;
            height: 37px;
            margin-right: 18px;
        }
        @media (min-width: 768px){
            width: 50px;
            height: 50px;
            margin-right: 25px;
        }
        @media (min-width: 768px){
            width: 76px;
            height: 76px;
            margin-right: 24px;
        }
    }
    .divider{
        @media (max-width: 768px){
            display: none;
        }
        @media (min-width: 768px){
            display: block;
        }
    }
    h1 {
        @media only screen and (max-width: 768px){
            font-size: 24px;
        }
        @media (min-width: 768px){
            font-size: 36px;
        }
        @media (min-width: 992px){
            font-size: 48px;
        }
        @media (min-width: 1200px){
            font-size: 64px;
        }
    }
    h4{
        max-width: 476px;
        font-family: 'Gilroy-Medium';
        font-size: 22px;
        @media (max-width: 768px){
            font-size: 20px;
        }
    }
    p{
        max-width: 476px;
    }

`

const bannerTextColor = "#ffffff"

// function splitTexts() {

// }

export default function ExpertiseBannerLeftSide(props) {
    const sentenceArray = props.bannerDescription.match(/[^\.!\?]+[\.!\?]+/g);
    return (
        <Wrapper>
            {/* <div className="expertise-banner-left-side"> */}
            <div className="d-flex align-items-center text-white">
                <img src={props.bannerTitleImage} alt={props.bannerTitle} />
                <BannerTitle  top={0} bottom={0} color={bannerTextColor} fontSize={100}>{props.bannerTitle}</BannerTitle>
            </div>
            <Underline color={`#ffffff`} left={52} className="divider" />
            <div className="text-white">
                {
                    sentenceArray.map((str, index) => <Paragraph key={index} maxWidth={476} color={bannerTextColor}>{str}</Paragraph>)
                }
                <h4 className="text-white">{props.bannerSubtitle}</h4>
            </div>
        </Wrapper>
    )
}
