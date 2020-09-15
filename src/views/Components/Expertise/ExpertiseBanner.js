import React from 'react'
import styled from 'styled-components'

import { Container } from 'react-bootstrap';
import BannerTextCard from './BannerTextCard';
import BannerFormCard from './BannerFormCard';

const Section = styled.div`
    min-height: 760px;
    background-color: ${(props) => props.color};
    background-image: url(${(props) => props.bannerBackgroundImage1}), url(${(props) => props.bannerBackgroundImage2}), url(${(props) => props.bannerBackgroundImage3});
    background-position: left -80px bottom, left calc(50vw - 190px) bottom, right -144px bottom;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 244px 208px, 200px 167px, 357px 298px;
`

const BannerLogo = styled.img`
    max-width: ${props => props.width + 'px'};
    margin: 78px auto;
`

export default function ExpertiseBanner(props) {

    return (
        <Section
            color={props.color}
            bannerBackgroundImage1={props.bannerBackgroundImage1}
            bannerBackgroundImage2={props.bannerBackgroundImage2}
            bannerBackgroundImage3={props.bannerBackgroundImage3}>
            <Container>
                <div className="d-flex justify-content-center">
                    <BannerLogo src={props.bannerLogo.image} alt={props.bannerTitle} width={props.bannerLogo.width} />
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-6 pl-5">
                        <BannerTextCard
                            bannerTitleImage={props.bannerTitleImage}
                            bannerTitle={props.bannerTitle}
                            bannerSubtitle={props.bannerSubtitle}
                            bannerDescription={props.bannerDescription} />
                    </div>
                    <div className="col-sm-12 col-lg-6">
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
            </Container>
        </Section>
    )
}
