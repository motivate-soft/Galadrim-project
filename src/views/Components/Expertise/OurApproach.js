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
    right: 0;
    width: 157px;
    height: 190px;
    @media screen and (max-width: 767px){
        width: 104px;
        height: 127px;
        right: 15px;
        bottom: -60px;
    }
`

const OrangeCircle = styled.img`
    z-index: -1;
    position: absolute;
    left: calc(50% + 12px);
    bottom: 48px;
    width: 75px;
    height: 75px;
    @media screen and (max-width: 767px){
        left: 12px;
        bottom: -60px;
        width: 50px;
        height: 50px;
    }
`

export default function OurApproach(props) {
    const { color, title, subtitle, approaches, bottomCircleImage, bottomMiniImage, isSecurityPage } = props
    const subtitleClass = isSecurityPage !== undefined ? 'expertise-approach-subtitle' : ''
    return (
        <div className="section expertise-approach">
            <h1 className={color ? `block-title text-${color}` : `block-title text-green`}>{title}</h1>
            <p className={color ? `block-subtitle text-${color} ${subtitleClass}` : `block-subtitle text-green ${subtitleClass}`}>{subtitle}</p>
            <div className="container">
                <div className="approach-container">
                    <TopSquare className={color ? `bg-${color}` : `bg-green`} />
                    <BottomMini src={bottomMiniImage} />
                    <OrangeCircle src={bottomCircleImage} />
                    <div className="row lg-layout">
                        <div className="col-6 mb-4">
                            {
                                approaches && approaches.length > 0 && <ApproachCard {...approaches[0]} />
                            }
                            <SquareImage src={Demo} alt="Approach One" className="mb-4" />
                            {
                                approaches && approaches.length > 0 && <ApproachCard {...approaches[2]} />
                            }
                        </div>
                        <div className="col-6 mb-4 d-flex align-items-center">
                            <div>
                                {
                                    approaches && approaches.length > 0 && <ApproachCard {...approaches[1]} />
                                }
                                <RoundedImage src={Demo} alt="Approach Two" radius={[0, 0, 100, 0]} />
                            </div>
                        </div>
                    </div>
                    <div className="row sm-layout">
                        <div className="col-12 mb-4">
                            {
                                approaches && approaches.length > 0 && <ApproachCard {...approaches[0]} />
                            }
                            {
                                approaches && approaches.length > 0 && <ApproachCard {...approaches[1]} />
                            }
                            {
                                approaches && approaches.length > 0 && <ApproachCard {...approaches[2]} />
                            }
                            <RoundedImage src={Demo} alt="Approach Two" radius={[0, 0, 100, 0]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
