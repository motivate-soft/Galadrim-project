import React from 'react'

import OrangeCircle from "../../assets/Shapes/others/orange-circle@3x.png"
import OrangeDotsGrid from "../../assets/Shapes/drawings/orange@3x.png"
import DemoAvatar from "../../assets/Images/demo.jpg"
import styled from 'styled-components'
import { SquareImage, RoundedImage } from './Elements/CustomImages';



const GradientText = styled.h4`
    font-size: 21px;
    font-family: "Gilroy-Medium";
    text-transform: uppercase;
    margin: 24px auto;
    background: -webkit-linear-gradient(left,#00d2b5, #ff5e4d, #001a5c);
    background: -o-linear-gradient(right, #00d2b5, #ff5e4d, #001a5c);
    background: -moz-linear-gradient(right, #00d2b5, #ff5e4d, #001a5c);
    background: linear-gradient(to right,#00d2b5, #ff5e4d, #001a5c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Card = styled.div`
    min-height: 576px;
    max-width: 575px;
    padding: 65px 10px;
    border-radius: 8px;
    background-color: #FFFFFF;
    background-repeat: no-repeat;
  background-size: contain;
    box-shadow: 0 2px 4px 0 rgba(41,41,43,0.05), 0 20px 40px 0 rgba(41,41,43,0.05);
`

const CircleImage = styled.img`
    z-index: -1;
    position: absolute;
    width: 64px;
    height: 64px;
    left: -32px;
    top: -32px;
`

const GrayButton = styled.button`
    max-width: 300px;
    color: #001b5d;
    background-color: #FFFFFF;
    border: 2px solid #A5ABB7;
    border-radius: 6px;
    height: 35px;
    transition: background-color ease .8s, color ease-in .8s;

    &:hover {
        color: white;
        background-color: #A5ABB7;
    }
`

const OrangeDotsGridImage = styled.img`
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: max-content;
`

export default function Talents() {
    return (
        <div className="talents-block">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6 d-flex justify-content-center mb-4">
                        <div className="position-relative text-center">
                            <CircleImage src={OrangeCircle} alt="Orange Circle" />
                            <Card>
                                <div className="w-75 mx-auto">
                                    <GradientText>Rejoignez l'aventure Efisens !</GradientText>
                                    <h2 className="my-5 text-blue">Êtes-vous prêt à construire l'avenir?</h2>
                                    <p className="my-5 text-blue">Si vous êtes passionnés par la technologie et que vous souhaitez intégrer un environnement de travail stimulant - Rejoignez-nous !</p>
                                    <GrayButton>Accéder à nos offres d'emploi</GrayButton>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6">
                        <div className="row p-4">
                            <div className="col-12 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <SquareImage src={DemoAvatar} />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <RoundedImage src={DemoAvatar} radius={[0, 30, 0, 30]} />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <RoundedImage src={DemoAvatar} radius={[50, 50, 50, 50]} />
                                <OrangeDotsGridImage src={OrangeDotsGrid} alt="Orange Dotsgrid" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <RoundedImage src={DemoAvatar} radius={[0, 0, 0, 30]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
