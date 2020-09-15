import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from './../Elements/CustomImages';
import styled from 'styled-components';

const Section = styled.div`
    & h1{
        margin: 70px auto;
        text-align: center;
        color: ${props => props.color};
        font-size: 54px;
    }
`

export default function TechChoices(props) {
    const { color, logos } = props
    return (
        <Section className="section" color={color}>
            <Container>
                <h1>Nos choix technologiques</h1>
                <Row>
                    {
                        logos.map((logo, index) => (
                            <Col lg={4} className="d-flex justify-content-center align-items-center mb-5">
                                <Image src={logo.src} alt={logo.alt} maxWidth={logo.maxWidth} className="mx-auto" />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Section>
    )
}
