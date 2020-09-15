import React from 'react'
import styled from 'styled-components'

import OrangeSquare from "../../../assets/Shapes/others/orange-square@3x.png"
import GreenTriangle from "../../../assets/Shapes/others/green-top-left-triangle@3x.png"
import GrayTriangleBackground from "../../../assets/Images/gray-background.png";
import IconSend from "../../../assets/Icons/send@3x.png"
import { MdSend } from "react-icons/md"
import { LeftRoundedSemiCircle } from '../Elements/Drawings';
import { Container, Row } from 'react-bootstrap';
import { Underline } from '../Elements/Typography';


const Section = styled.div`
    position: relative;
    padding: 100px 0;
`
const TriangleBackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
`
const LeftTopSquareImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 54px;
    height: 54px;
`

const RightBottomTriangleImage = styled.img`
    position: absolute;
    right: -10px;
    bottom: -10px;
    width: 54px;
    height: 54px;
`

const TalkForm = styled.div`
    position: relative;
    z-index: 99 !important;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1) !important;
`

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
    /* background-image: url("../../../assets/Icons/send@3x.png"); */
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

export default function EfisensTalk() {
    return (
        <Section>
            <TriangleBackgroundImage src={GrayTriangleBackground} alt="Triangle background" />
            <LeftRoundedSemiCircle className="position-absolute bottom-right transform-bottom-50" />
            <Container className="p-4">
                <LeftTopSquareImage src={OrangeSquare} alt="Left Square" />
                <RightBottomTriangleImage src={GreenTriangle} alt="Right Triangle" />
                <TalkForm>
                    <Row className="mx-5 px-5 py-4 text-blue">
                        <div className="col-md-6 col-12">
                            <h2 className="my-3">Efisens Talks</h2>
                            <Underline />
                            <p className="my-3">Nos experts partagent régulièrement leur savoir faire et leur expérience. Apprenez, lisez et servez -vous !</p>
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-5">
                            <h6 className="text-green heading-sm text-uppercase">S’inscrire à notre newsletter</h6>
                            <div className="d-flex">
                                <CustomInput placeholder="votre email" />
                                <InputAppend ><MdSend /></InputAppend>
                            </div>
                            <p className="text-xs">En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.</p>
                        </div>
                    </Row>
                </TalkForm>
            </Container>
        </Section>
    )
}