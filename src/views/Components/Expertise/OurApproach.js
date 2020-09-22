import React from 'react'
import styled from 'styled-components'


import OrangeCircleImage from '../../../assets/Shapes/others/orange-circle@3x.png';
import Demo from '../../../assets/Images/demo.jpg'
import ApproachCard from './ApproachCard';
import { SquareImage, RoundedImage } from '../Elements/CustomImages';
import { BlockTitle, Subtitle } from './../Elements/Typography';

const defaultColor = '#001A5C'

const Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    .approach-card:nth-child(1){
        div:nth-child(2) {
            display: block;
            @media (max-width: 768px){
                display: none;
            }
        }
    }
    .approach-card:nth-child(2){
        display: none;
    }
    .approach-card:nth-child(3){
        div:nth-child(2) {
            display: none;
            @media (max-width: 768px){
                display: block;
            }
        }
    }
    .align-self-center{
        display: block;
    }
    @media screen and (max-width: 767px){
        .approach-card:nth-child(2){
            display: block;
        }
        .align-self-center{
            display: none;
        }
    }
`

const TopSquare = styled.div`
    position: absolute;
    left: 0;
    top:0;
    width: 120px;
    height: 120px;
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
    @media screen and (max-width: 767px){
        width: 30px;
        height: 30px;
    }
    @media screen and (min-width: 767px){
        width: 60px;
        height: 60px;
    }
    @media screen and (min-width: 992px){
        width: 120px;
        height: 120px;
    }
`
const BottomMini = styled.img`
    position: absolute;
    bottom: 48px;
    right: -11px;
    width: 157px;
    height: 190px;
    @media screen and (max-width: 767px){
        width: 104px;
        height: 127px;
        right: 15px;
        bottom: -10px;
    }
    /* @media screen and (min-width: 767px){
        width: 120px;
        height: 145px;
    }
    @media screen and (min-width: 992px){
        width: 157px;
        height: 190px;
    } */
`
const OrangeCircle = styled.img`
    z-index: -1;
    position: absolute;
    left: calc(50% + 15px);
    bottom: 48px;
    width: 75px;
    height: 75px;
    @media screen and (max-width: 767px){
        left: 15px;
        bottom: -10px;
        width: 50px;
        height: 50px;
    }
    /* @media screen and (min-width: 767px){
        width: 75px;
        height: 75px;
    } */
`

export default function OurApproach(props) {
    const { color, title, subtitle, approaches, bottomMiniImage } = props

    return (
        <div className="section">
            <div className="container">
                <Wrapper color={color}>
                    <BlockTitle maxWidth={576} color={color} top={70} bottom={30}>{title}</BlockTitle>
                    <Subtitle maxWidth={576} bottom={30} color={color} className="mx-auto text-center">{subtitle}</Subtitle>
                    <div className="position-relative pt-3 px-3 pb-0">
                        <TopSquare color={color} />
                        <BottomMini src={bottomMiniImage} />
                        <OrangeCircle src={OrangeCircleImage} />
                        <div className="row">
                            <div className="col-12 col-md-6 mb-4">
                                <div className="row">
                                    <div className="col-12 approach-card">
                                        {
                                            approaches && approaches.length > 0 && <ApproachCard {...approaches[0]} />
                                        }
                                        <SquareImage src={Demo} alt="Approach One" />
                                    </div>
                                    <div className="col-12 approach-card">
                                        {
                                            approaches && approaches.length > 0 && <ApproachCard {...approaches[1]} />
                                        }
                                    </div>
                                    <div className="col-12 approach-card">
                                        {
                                            approaches && approaches.length > 0 && <ApproachCard {...approaches[2]} />
                                        }
                                        <RoundedImage src={Demo} alt="Approach Two" radius={[0, 0, 100, 0]} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-4 d-flex">
                                <div className="align-self-center">
                                    {
                                        approaches && approaches.length > 0 && <ApproachCard {...approaches[1]} />
                                    }
                                    <RoundedImage src={Demo} alt="Approach Two" radius={[0, 0, 100, 0]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}
