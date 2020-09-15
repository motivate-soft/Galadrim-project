import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../../Layout/Section';

import GreenMiniImage from '../../../assets/Shapes/drawings/vert-mini@3x.png';
import OrangeCircleImage from '../../../assets/Shapes/others/orange-circle@3x.png';
import Demo from '../../../assets/Images/demo.jpg'
import ApproachCard from './ApproachCard';
import { SquareImage, RoundedImage } from '../Elements/CustomImages';

const defaultColor = '#001A5C'

const Wrapper = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    h1{
        margin: 70px auto 30px;
        font-size: 64px;
        color: ${props => props.color ? props.color : defaultColor};
        text-align: center;
    }
    p{
        margin-bottom: 30px;
        max-width: 580px;
        color: ${props => props.color ? props.color : defaultColor};
        text-align: center;
    }
    & .approach-card:nth-child(2){
        margin-top: 120px;
    }
    & .approach-card:nth-child(3){
        margin-top: -120px;
    }

    @media screen and (max-width: 767px){
        & .approach-card:nth-child(2){
        margin-top: 0;
        }
        & .approach-card:nth-child(3){
            margin-top: 0;
        }
    }
`

const GreenSquare = styled.div`
    position: absolute;
    left: 0;
    top:0;
    width: 120px;
    height: 120px;
`
const GreenMini = styled.img`
    position: absolute;
    bottom: 24px;
    right: 0;
    width: 157px;
    height: 190px;
`
const OrangeCircle = styled.img`
    z-index: -1;
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 75px;
    height: 75px;
`

export default function OurApproach(props) {
    const { color, title, subtitle, approaches } = props

    return (
        <Section>
            <Container>
                <Wrapper color={color}>
                    <h1>{title}</h1>
                    <p className="mx-auto">{subtitle}</p>
                    <div className="position-relative pt-3 px-3 pb-0">
                        <GreenSquare className="bg-green" />
                        <GreenMini src={GreenMiniImage} />
                        <OrangeCircle src={OrangeCircleImage} />
                        <Row>
                            <Col md={6} className="approach-card mb-4">
                                {
                                    approaches && approaches.length > 0 && <ApproachCard {...approaches[0]} />
                                }
                                <SquareImage src={Demo} alt="Approach One" />
                            </Col>
                            <Col md={6} className="approach-card  mb-4">
                                {
                                    approaches && approaches.length > 0 && <ApproachCard {...approaches[1]} />
                                }
                                <RoundedImage src={Demo} alt="Approach Two" radius={[0, 0, 20, 0]} />
                            </Col>
                            <Col md={6} className="approach-card mb-0">
                                {
                                    approaches && approaches.length > 0 && <ApproachCard {...approaches[2]} />
                                }
                            </Col>
                        </Row>

                    </div>
                </Wrapper>
            </Container>
        </Section>
    )
}
