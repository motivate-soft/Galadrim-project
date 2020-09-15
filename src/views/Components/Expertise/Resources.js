import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Container, Col } from 'react-bootstrap'
import VGradientCard from '../Common/VGradientCard';
import ArticleCard from '../Common/ArticleCard';
import OrangeDotsGrid from "../../../assets/Shapes/drawings/orange-mini.png"
import GreenDotsGrid from "../../../assets/Shapes/drawings/vert-mini.png"


const Section = styled.div`
   
`
const H1 = styled.h1`
    margin: 70px auto 40px;
    text-align: center;
    color: ${props => props.color};
    font-size: 54px;
`
const P = styled.p`
    max-width: 570px;
    margin: 0 auto 40px;
    text-align: center;
    color: ${props => props.color};
`

const Button = styled.button`
    background-color: ${props => props.color};
`

const SemiCircle = styled.div`
    position: absolute;
    width: 55px;
    height: 110px;
    border-radius: 0 55px 55px 0;
    left: 0;
    bottom: 0;
    transform: translate(0, 50%);
    background-color: ${props => props.color};
`

export default function Resources(props) {
    const { color, articles } = props

    return (
        <Section className="section position-relative" color={color}>
            <H1 color={color}>Ressources associées</H1>
            <P color={color}>Quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas expetenda.</P>
            <SemiCircle color={color} />
            <Container className="p-4 mt-5">
                <img src={OrangeDotsGrid} className='position-absolute bottom-left grid-dots' alt='orange grid dots' />
                <img src={GreenDotsGrid} className='position-absolute top-right grid-dots' alt='green grid dots' />
                <Row>
                    {
                        articles.map((article, index) => (
                            <Col xl={3} lg={4} md={6} className="mb-4">
                                <VGradientCard>
                                    <ArticleCard
                                        key={index}
                                        id={article.id}
                                        title={article.title}
                                        text={article.text}
                                        img={article.image}
                                        tag={article.tag}
                                        time={article.time} />
                                </VGradientCard>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <Button className="btn text-white d-block mx-auto my-5">Voir tous les articles</Button>
        </Section>
    )
}
