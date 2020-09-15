import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import BlueDotsGrid from "../../../assets/Shapes/drawings/bleu-mini.png"
import GreenDotsGrid from "../../../assets/Shapes/drawings/vert-mini.png"
import OrangeRounded from "../../../assets/Shapes/rounded-angle/orange-rounded@3x.png"
import BlueHalfRounded from "../../../assets/Shapes/half-rounded/blue-half-rounded@3x.png"
import ExpertiseCard from '../Common/ExpertiseCard';
import DGradientCard from '../Common/DGradientCard';
import styled from 'styled-components';
import { RightRoundedSemiCircle } from './../Elements/Drawings';

const CustomContainer = styled.div`
    max-width: max-content;
    margin: auto;
`

const TitleContainer = styled.div`
    max-width: ${props => props.width + 'px'};
    margin: 0 auto;
`

const Title = styled.h1`
    margin: 70px auto 30px;
    text-align: center;
    color: ${props => props.color};
    font-size: 54px;
`
const Description = styled.p`
    max-width: 570px;
    margin: 0 auto 70px;
    text-align: center;
    color: ${props => props.color};
`

export default function OurExpertise(props) {
    const { color, col, data } = props;
    const { title, subtitle, items } = data;
    return (
        <div className="expertises-block">
            {/* <RightRoundedSemiCircle className="position-absolute bg-blue bottom-left transform-bottom-50" /> */}
            <CustomContainer>
                <TitleContainer>
                    <Title color={color}>{title}</Title>
                    <Description color={color}>{subtitle}</Description>
                </TitleContainer>
                <div className="features-block mt-5">
                    <img src={BlueDotsGrid} alt="blue grid dots" className="position-absolute top-left grid-dots" />
                    <img src={GreenDotsGrid} alt="green grid dots" className="position-absolute bottom-right grid-dots" />
                    <img src={OrangeRounded} alt="orange rounded" className="position-absolute top-right top-right-rounded" />
                    <Row>
                        {
                            items.map((item, index) => (
                                <Col key={index} lg={col} className="mb-4">
                                    <DGradientCard
                                        maxWidth={280}
                                    >
                                        <ExpertiseCard
                                            id={item.id}
                                            img={item.img}
                                            title={item.title}
                                            text={item.text} />
                                    </DGradientCard>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </CustomContainer>
        </div >
    );
}

