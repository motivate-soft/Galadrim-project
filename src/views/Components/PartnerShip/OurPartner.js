import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { Image } from '../Elements/CustomImages';
import styled from 'styled-components';


const Section = styled.div`
    & h1{
        margin: 0 auto 64px;
        text-align: center;
        color: #001860;
        font-size: 54px;
    }

    h5{
        margin: 70px auto 24px;
        text-align: center;
        font-size: 18px;
        color: #001860
    }
`

export default function OurPartner(props) {
    const { logos } = props
    return (
        <Section className="section">
            <Container>
                <h5>Ils avancent à nos côtés</h5>
                <h1>Nos partenaires</h1>
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
