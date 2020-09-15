import React from 'react'
import styled from 'styled-components'
import { Underline } from '../Elements/Typography';

const RightMarginCard = styled.div`
    margin-bottom: 120px;
    padding-right: 100px;
    color: #ffffff !important;
    background-color: transparent;
`

const BannerTitleImage = styled.img`
    width: 76px;
    height: 76px;
    margin-right: 24px;
`
function splitTexts() {

}

export default function BannerTextCard(props) {
    const sentenceArray = props.bannerDescription.match(/[^\.!\?]+[\.!\?]+/g);
    return (
        <>
            <div className="d-flex align-items-center text-white">
                <BannerTitleImage src={props.bannerTitleImage} alt={props.bannerTitle} />
                <h1 className="heading-lg">{props.bannerTitle}</h1>
            </div>
            <RightMarginCard>
                <Underline color={`#ffffff`} left={-45}/>
                {
                    sentenceArray.map((str, index) => <p key={index}>{str}</p>)
                }
                <h4>{props.bannerSubtitle}</h4>
            </RightMarginCard>
        </>
    )
}
