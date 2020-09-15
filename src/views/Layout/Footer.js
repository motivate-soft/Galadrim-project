import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Logo from './../Components/Common/Logo';
import styled from 'styled-components';
import { MdSend } from 'react-icons/md';
import ShapesGroup from "../../assets/Images/group@3x.png"
import InstagramIcon from "../../assets/Icons/instagram@3x.png"
import LinkedinIcon from "../../assets/Icons/linkedin@3x.png"
import YoutubeIcon from "../../assets/Icons/youtube@3x.png"


const CustomInput = styled.input`
    font-size: 16px;
    font-family: "Roboto Medium";
    width: calc(100% - 50px);
    height: 50px;
    margin-bottom: 8px;
    padding-left: 16px;
    border: 2px solid #ebebeb;
    border-right: 0;
    border-radius: 4px 0 0 4px;
    transition: border ease 1s;
    &:focus{
        border: 1px solid #00d5b4;
        border-right: 0;
    }
`

const InputAppend = styled.div`
    display: flex;
    background-color: #00d5b4;
    width: 50px;
    height: 50px;
    border-radius: 0 4px 4px 0;
    & {
        svg {
            width: 24px;
            height: 24px;
            fill: white;
            margin: auto;
        }
    }
`


export default function Footer() {
    return (
        <div className="footer">
            <Container className="mb-5">
                <Row className="text-blue">
                    <Col sm={12} md={6} lg={3}>
                        <div className=" mb-3">
                            <Logo />
                        </div>
                        <p>7 rue Sainte Lucie,<br />75 015 PARIS, FRANCE</p>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Row>
                            <Col lg={4} sm={6}>
                                <h4>Nos expertises</h4>
                                <p>Cloud</p>
                                <p>Modern Workplace</p>
                                <p>Sécurité</p>
                                <p>Services Managés</p>
                            </Col>
                            <Col lg={4} sm={6}>
                                <h4>Ressources</h4>
                                <p>Qui sommes-nous ?</p>
                                <p>Partenariats</p>
                                <p>Efisens Lab</p>
                                <p>Carrières</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4>Contact</h4>
                        <p>Nous contacter</p>
                        <p>01 44 37 07 07</p>
                        <div className="d-inline">
                            <img src={InstagramIcon} alt="instagram icon" className="social-icon" />
                            <img src={LinkedinIcon} alt="linkedin icon" className="social-icon" />
                            <img src={YoutubeIcon} alt="youtube icon" className="social-icon" />
                        </div>
                    </Col>
                </Row>
                <Row className="newsletter-container">
                    <Col sm={12} md={6} lg={3}>
                        <div className="d-flex">
                            <CustomInput placeholder="votre email" />
                            <InputAppend ><MdSend /></InputAppend>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={5}>
                        <p className="text-gray text-small">En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.</p>
                    </Col>
                    <Col sm={12} md={6} lg={4} className="d-flex justify-content-end">
                        <img src={ShapesGroup} alt="shapes group" className="shapes-group" />
                    </Col>
                </Row>
            </Container>
            <div className="bg-blue text-white py-4">
                <Container>
                    <Row>
                        <Col sm={12} lg={2} >© Efisens</Col>
                        <Col sm={12} lg={8} className="text-white d-flex">
                            <span className="mr-4">Mentions légales</span>
                            <span>Protection des données personnelles</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
