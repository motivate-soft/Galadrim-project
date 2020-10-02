import React from 'react'

import OrangeCircle from "../../assets/Shapes/others/orange-circle@3x.png"
import OrangeDotsGrid from "../../assets/Shapes/drawings/orange@3x.png"
import DemoAvatar from "../../assets/Images/demo.jpg"
import styled from 'styled-components'
import { GradientText } from "./Elements/Typography"
import { SquareImage, RoundedImage } from './Elements/CustomImages';



const OrangeMini = styled.img`
    z-index: -1;
    position: absolute;
    left: 15px;
    top: 0;
    width: 40%;
    height: auto;
`

export default function Talents() {
    return (
        <div className="section home-talents-block">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6 d-flex justify-content-center mb-4">
                        <div className="position-relative text-center">
                            <img src={OrangeCircle} alt="orange circle" className="top-left transform-top-left" />
                            <div className="talents-card">
                                <div className="w-100 mx-auto text-darkblue">
                                    <GradientText>Rejoignez l'aventure Efisens !</GradientText>
                                    <h2>Êtes-vous prêt à construire l'avenir avec nous ?</h2>
                                    <p>Si vous êtes passionnés par la technologie et que vous souhaitez intégrer un environnement de travail stimulant - Rejoignez-nous !</p>
                                    <button className="btn btn-custom btn-gray">Accéder à nos offres d'emploi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6">
                        <div className="row talents-image-container">
                            <div className="col-6 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <SquareImage src={DemoAvatar} />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <RoundedImage src={DemoAvatar} radius={[0, 100, 0, 100]} />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-6 mb-4 justify-content-center position-relative">
                                <img src={DemoAvatar} alt="demo" className="rounded w-100 h-100" />
                                <OrangeMini src={OrangeDotsGrid} alt="Orange Dotsgrid" />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <RoundedImage src={DemoAvatar} radius={[0, 0, 0, 100]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
