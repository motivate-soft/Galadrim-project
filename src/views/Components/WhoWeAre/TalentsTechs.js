import React from 'react';
import TitleImage from '../../../assets/Images/who-we-are/title-bar-dna@3x.png';
import RightBottomImage from '../../../assets/Images/who-we-are/vert.svg'
import { GrayButton } from '../Elements/Buttons';
import { Circle, Square } from '../Elements/Drawings';

export default function TalentsTechs() {
    return (
        <div id="talents" className="section talents-techs-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h5>L’humain est au cœur de notre ADN</h5>
                        <h1 className="block-title" >Talents<br /> & Technologies</h1>
                        <img src={TitleImage} className="title-image" alt="title" />
                    </div>
                    <div className="col-sm-12 col-lg-10 offset-lg-1">
                        <div className="green-card position-relative mx-auto">
                            <Square width={36} height={36} color="#001a5c" className="top-right transform-top-right bg-z-index" />
                            <Circle width={76} height={76} color="#ff5e4d" className="bottom-left transform-bottom-left bg-z-index" />
                            <h5 className="text-white text-lg gilroy-medium text-center text-uppercase">
                                Deux visions pour un seul objectif
                           </h5>
                            <h2 className="text-white text-center gilroy-medium">
                                Réaliser des avancées tangibles et innovantes grâce à l’expertise de nos talents et la puissance de la technologie.
                           </h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-10 offset-lg-1">
                        <div className="background-card position-relative mx-auto">
                            <h5 className="gradient-text">#peoplematters</h5>
                            <h3>Rejoindre EFSENS c'est travailler en synergie pour répondre et imaginer les technologies de demain.  Chez Efisens, notre environnement de travail est collaboratif, moderne et dynamique…
                                au sein d’une communauté technophile qui crée le mouvement, plutôt que de le suivre !</h3>
                            <GrayButton className="d-block mx-auto">Accéder à nos opportunités de carrières</GrayButton>
                            <img src={RightBottomImage} alt="Green Mini" className="bottom-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}