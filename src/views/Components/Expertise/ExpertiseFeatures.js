import React from 'react'
import DGradientCard from '../Common/DGradientCard';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Section from './../../Layout/Section';


const H1 = styled.h1`
    margin: 250px auto 70px;
    font-size: 64px;
    color: ${props => props.color ? props.color : '#ffffff'};
    text-align: center;
`

const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
   
    & h4{
        color: ${props => props.color ? props.color : '#ffffff'};
    }
    & img {
        width: 90px;
        height: 90px;
    }
    & h6{
        max-width: 300px;
    } 
`

export default function ExpertiseFeatures(props) {
    const { color, items } = props
    return (
        <Section>
            <Container>
                <H1 color={color}>Notre Expertise</H1>
                <Row>
                    {
                        items.map((item, index) => (
                            <Col sm={4}>
                                <DGradientCard key={index}>
                                    <FeatureCard>
                                        <img className="mx-auto" src={item.img} alt={item.title} />
                                        <h4 className="text-blue text-center mb-4">{item.title}</h4>
                                        <h6 className="text-blue text-center mx-auto mb-4">{item.subtitle}</h6>
                                        <ul>
                                            {
                                                item.details.map((text, idx) => (
                                                    <li>{text}</li>
                                                ))
                                            }
                                        </ul>
                                    </FeatureCard>
                                </DGradientCard>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Section>
    )
}
