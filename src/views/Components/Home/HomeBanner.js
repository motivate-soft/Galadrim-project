import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import iStockImage from "../../../assets/Images/iStock@3x.png"
import RoundedCircle from "../../../assets/Shapes/others/rounded-circle@3x.png"
import BottomRightTriangle from "../../../assets/Shapes/others/bottom-right-triangle@3x.png"
import BottomLeftTriangle from "../../../assets/Shapes/others/bottom-left-triangle@3x.png"
import styled from 'styled-components';
import { Underline } from '../Elements/Typography';
import { Image } from './../Elements/CustomImages';


const Section = styled.div`
    margin: 0;
    height: calc(100vh - 60px);
    position: relative;
    .top-left-rounded-circle{
        max-width: 120px;
    }
    .buttom-left-triangle {
        width: 100px;
        height: 100px;
    }
    .buttom-right-triangle {
        height: calc(100vh - 60px);
    }
    img {
        position: relative;
        z-index: 99;
    }
    @media screen and (max-width: 1200px){
        height: auto;
        .buttom-right-triangle {
            height: 50vw;
        }
    }

`

export default function HomeBanner() {
    return (
        <Section>
            <img src={RoundedCircle} className="position-absolute top-left top-left-rounded-circle" alt="TopLeftRoundedCircle" />
            <img src={BottomRightTriangle} className="position-absolute bottom-right buttom-right-triangle" alt="BottomRightTriangle" />
            <img src={BottomLeftTriangle} className="position-absolute bottom-left buttom-left-triangle" alt="BottomRightTriangle" />
            <Container className="h-100 d-flex align-content-center container">
                <Row className="my-auto">
                    <Col className="col-md-6 col-sm-12 col-12 my-auto text-blue pl-5">
                        <div className=" h-auto mt-5">
                            <h1 className="heading-lg">Décomplexer <br />l’informatique</h1>
                            <Underline />
                            <p className="mt-3">Co-construire votre écosystème IT avec des solutions accessibles et sur mesure, en lien avec vos usages du quotidien.</p>
                            <button className="btn text-white bg-orange py-1 px-4">Contactez-nous</button>
                        </div>
                    </Col>
                    <Col className="col-md-6 col-sm-12 col-12 p-4 mt-5">
                        <img src={iStockImage} className="w-100" alt="home bg" />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
