import React from 'react'
import RocketImage from '../../../assets/Images/who-we-are/rocket.svg'
import CircleImage from '../../../assets/Images/who-we-are/blur-orange-circle.svg'
import TriangleImage from '../../../assets/Images/who-we-are/blur-gray-triangle.svg'
import styled from "styled-components"
import { TopFlag, BottomFlag } from '../Elements/Drawings';


const colorGreen = "#00d2b5";
const colorOrange = "#ff5e4d"

const Badge = styled.span`
    z-index: 99;
    padding: 4px 12px;
    font-family: RobotoMono-Bold;
    border-radius: 4px;
    color: #6a6f85;
    box-shadow: 0 20px 40px 0 rgba(41, 41, 43, 0.05), 0 2px 4px 0 rgba(41, 41, 43, 0.05);
    background-color: #ffffff;
`

export default function OurHistory() {
    return (
        <div id="history" className="section who-history-block">
            <div className="container">
                <div className="row">
                    <h1 className="block-title color-darkblue">Notre histoire</h1>
                    <div className="col-lg-12">
                        <div className="row history-container">
                            <div className="col-lg-6 position-relative y-2007">
                                <TopFlag color={colorGreen} className="top-left" />
                                <h5 className="text-green">Fondation</h5>
                                <p>Rachat de Business ASI historiquement dédiée à la revente d’équipements informatiques.</p>
                                <Badge className="bottom-left transform-bottom-left"> 2007 </Badge>
                            </div>
                            <div className="col-lg-6 position-relative y-2016">
                                <TopFlag color={colorOrange} className="top-left" />
                                <img src={CircleImage} alt="orange circle" className="center-right" />
                                <h5 className="text-orange">Expansion</h5>
                                <p> Création EFILEASE filiale spécialisée dans le financement d'actifs</p>
                                <Badge className="bottom-left transform-bottom-left">2016</Badge>
                                <img src={RocketImage} className="rocket" alt="Rocket" />
                            </div>
                            <div className="col-lg-3 col-12 position-relative">
                                <img src={TriangleImage} alt="gray triangle circle" className="position-center" />
                            </div>
                            <div className="col-lg-5  position-relative y-2015">
                                <BottomFlag color={colorOrange} className="bottom-left" />
                                <h5 className="text-orange">Croissance</h5>
                                <p> Efisens double son effectif grâce au rachat de Net Open Service et A2Z. De cette fusion naît Efisens. 2015 marque un virage important pour nous en évoluant vers les services managés. Création de notre centre de services au Maroc.</p>
                                <Badge className="top-left transform-top-left">2015</Badge>
                            </div>
                            <div className="col-lg-4 position-relative y-2019">
                                <BottomFlag color={colorGreen} className="bottom-left" />
                                <h5 className="text-green">Notre concept de pointe :<br /> le cloud hybride </h5>
                                <p>Un repositionnement bien pensé avec le développement de notre centre d'expertises et innovation. Création de NextGen consulting filiale spécialisée dans le conseil et l'accompagnement à la transformation digitale & technologies Cloud​.</p>
                                <Badge className="top-left transform-top-left">2019</Badge>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row history-mobile-container">
                            <div className="col-lg-4 position-relative y-2019">
                                <TopFlag color={colorOrange} className="bottom-right" />
                                <h5 className="text-green">Notre concept de pointe :<br /> le cloud hybride </h5>
                                <p>Un repositionnement bien pensé avec le développement de notre centre d'expertises et innovation. Création de NextGen consulting filiale spécialisée dans le conseil et l'accompagnement à la transformation digitale & technologies Cloud​.</p>
                                <Badge className="bottom-left transform-bottom-left">2019</Badge>
                                <img src={RocketImage} className="rocket top-left" alt="Rocket" />
                            </div>
                            <div className="col-lg-6 position-relative y-2016">
                                <TopFlag color={colorGreen} className="bottom-right" />
                                <img src={CircleImage} alt="orange circle" className="center-right" />
                                <h5 className="text-orange">Expansion</h5>
                                <p> Création EFILEASE filiale spécialisée dans le financement d'actifs</p>
                                <Badge className="bottom-left transform-bottom-left">2016</Badge>
                            </div>
                            <div className="col-lg-5  position-relative y-2015">
                                <TopFlag color={colorOrange} className="bottom-right" />
                                <h5 className="text-orange">Croissance</h5>
                                <p> Efisens double son effectif grâce au rachat de Net Open Service et A2Z. De cette fusion naît Efisens. 2015 marque un virage important pour nous en évoluant vers les services managés. Création de notre centre de services au Maroc.</p>
                                <Badge className="bottom-left transform-bottom-left">2015</Badge>
                            </div>
                            <div className="col-lg-6 position-relative y-2007">
                                <TopFlag color={colorGreen} className="bottom-right" />
                                <h5 className="text-green">Fondation</h5>
                                <p>Rachat de Business ASI historiquement dédiée à la revente d’équipements informatiques.</p>
                                <Badge className="bottom-left transform-bottom-left"> 2007 </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
