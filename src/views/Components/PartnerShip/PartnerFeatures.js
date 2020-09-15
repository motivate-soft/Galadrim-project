import React from 'react'
import styled from 'styled-components'
import { Row, Container, Col } from 'react-bootstrap'
import Demo from "../../../assets/Images/demo.jpg"

const Section = styled.div`
    h3 {
        max-width: 780px;
        margin: 110px auto 40px;
        text-align: center;
        color: #001A5C;
    }
    .text-area {
        padding: 45px 40px;
        color: #00175F;
        font-size: 21px;
        font-family: 'Gilroy-Medium'; 
        border-radius: 8px;
        background-color: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(41,41,43,0.05), 0 20px 40px 0 rgba(41,41,43,0.05);
    }
`

export default function PartnerFeatures() {
    return (
        <Section>
            <Container>
                <h3>C'est au contact d'experts techniques, de leaders technologiques et de partenaires stratégiques que nous innovons ! </h3>
                <Row>
                    <Col sm={6}>
                        <img src={Demo} alt="demo image" className="w-100" />
                    </Col>
                    <Col sm={6}>
                        <div className="text-area">
                            Afin d’apporter le meilleur service à nos clients, nous travaillons en étroite collaboration avec un écosystème de plus d’une dizaine de partenaires qui  nous accompagne et renforce notre offre d'expertises et de solutions technologiques.
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
