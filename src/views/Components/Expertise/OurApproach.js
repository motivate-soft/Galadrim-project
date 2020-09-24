import React from 'react'
import styled from 'styled-components'

import Demo from '../../../assets/Images/demo.jpg'
import ApproachCard from './ApproachCard';
import { SquareImage, RoundedImage } from '../Elements/CustomImages';

const defaultColor = '#001A5C'

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
    const { color, title, subtitle, approaches, bottomCircleImage, bottomMiniImage } = props

    return (
        <div className="section expertise-approach">
            <div className="container">
                <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>{title}</h1>
                <p className={color ? `block-subtitle text-${color}` : `block-subtitle text-green`}>{subtitle}</p>
                <div className="approach-container position-relative pt-3 px-3 pb-0">
                    <TopSquare className={color ? `bg-${color}` : `bg-green`} />
                    <BottomMini src={bottomMiniImage} />
                    <OrangeCircle src={bottomCircleImage} />
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
            </div>
        </div>
    )
}
