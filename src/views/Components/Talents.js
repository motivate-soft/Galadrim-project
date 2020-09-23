import React from 'react'

import OrangeCircle from "../../assets/Shapes/others/orange-circle@3x.png"
import OrangeDotsGrid from "../../assets/Shapes/drawings/orange@3x.png"
import DemoAvatar from "../../assets/Images/demo.jpg"
import styled from 'styled-components'
import { GradientText } from "./Elements/Typography"
import { SquareImage, RoundedImage } from './Elements/CustomImages';
import { BaseButton } from './Elements/Buttons';


const Card = styled.div`
    min-height: 576px;
    max-width: 575px;
    padding: 87px 99px 66px;
    border-radius: 8px;
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-size: contain;
    box-shadow: 0 2px 4px 0 rgba(41,41,43,0.05), 0 20px 40px 0 rgba(41,41,43,0.05);
    p{
        font-family: Gilroy-Regular;
        font-size: 16px;
        margin: 36px auto 109px; 
    }
    @media (max-width: 768px) {
        padding: 31px 21px 23px;
        min-height: 426px;
        h4{
            font-size: 18px;
        }
        h2{
            font-size: 25px;
        }
    }
`

const CircleImage = styled.img`
    z-index: -1;
    position: absolute;
    width: 64px;
    height: 64px;
    left: -32px;
    top: -32px;
`

const GrayButton = styled(BaseButton)`
    display: flex;
    font-weight: 400;
    color: #001F5F;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    background-color: #ffffff;
    padding: 9px 30px;
    font-size: 16px;
    font-family: Gilroy-Bold;
    line-height: 20px;
    border-radius: 6px;
    border: 1px solid #A5ABB7;
    transition: background-color ease .3s, color ease-in .8s;

    &:hover {
        background: #a4abb8;
        color: #ffffff;
    }
`

const OrangeDotsGridImage = styled.img`
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
                            <CircleImage src={OrangeCircle} alt="Orange Circle" />
                            <Card>
                                <div className="w-100 mx-auto text-darkblue">
                                    <GradientText>Rejoignez l'aventure Efisens !</GradientText>
                                    <h2>Êtes-vous prêt à construire l'avenir avec nous ?</h2>
                                    <p>Si vous êtes passionnés par la technologie et que vous souhaitez intégrer un environnement de travail stimulant - Rejoignez-nous !</p>
                                    <GrayButton className="mx-auto">Accéder à nos offres d'emploi</GrayButton>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6">
                        <div className="row p-4">
                            <div className="col-6 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <SquareImage src={DemoAvatar} />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-6 mb-4 justify-content-center">
                                <RoundedImage src={DemoAvatar} radius={[0, 100, 0, 100]} />
                            </div>
                            <div className="col-6 col-sm-6 col-lg-6 mb-4 justify-content-center position-relative">
                                <img src={DemoAvatar} alt="demo" className="rounded w-100 h-100" />
                                <OrangeDotsGridImage src={OrangeDotsGrid} alt="Orange Dotsgrid" />
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
