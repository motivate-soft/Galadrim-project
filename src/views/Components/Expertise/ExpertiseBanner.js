import React from 'react'
import styled from 'styled-components'

import ExpertiseBannerLeftSide from './ExpertiseBannerLeftSide';
import BannerFormCard from './../Common/BannerFormCard';

const Section = styled.div`
    position: absolute;
    width: 100%;
    min-height: 760px;
    background-color: ${(props) => props.color};
    background-image: url(${(props) => props.bannerBackgroundImage1}), url(${(props) => props.bannerBackgroundImage2}), url(${(props) => props.bannerBackgroundImage3});
    background-position: left -80px bottom, left 50% bottom, right -144px bottom;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 244px 204px, 200px 167px, 357px 298px;
    @media (max-width: 768px){
        height: 760px;
        background-position: left bottom, right bottom, right bottom;
        background-size: 0 0, 295px 247px, 0 0;
    }
`


export default function ExpertiseBanner(props) {
    return (
        <div className="section expertise-banner">
            <Section
                color={props.color}
                bannerBackgroundImage1={props.bannerBackgroundImage1}
                bannerBackgroundImage2={props.bannerBackgroundImage2}
                bannerBackgroundImage3={props.bannerBackgroundImage3}>
            </Section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <ExpertiseBannerLeftSide
                            bannerTitleImage={props.bannerTitleImage}
                            bannerTitle={props.bannerTitle}
                            bannerSubtitle={props.bannerSubtitle}
                            bannerDescription={props.bannerDescription} />
                    </div>
                    <div className="col-sm-12 col-lg-6 d-flex">
                        <div className={`banner-form-wrapper ${props.formBackground}`}>
                            <BannerFormCard
                                color={props.color}
                                formTitle={props.formTitle}
                                formSubtitle={props.formSubtitle}
                                formDescription={props.formDescription}
                                formButtonText={props.formButtonText}>
                                {props.children}
                            </BannerFormCard>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}
