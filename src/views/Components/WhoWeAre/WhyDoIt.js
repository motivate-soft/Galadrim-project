import React from 'react';
import OrangeRoundedImage from '../../../assets/Shapes/rounded-angle/orange-rounded.svg';
import OrangeMiniImage from '../../../assets/Shapes/drawings/orange.svg';
import GreenSquareImage from '../../../assets/Shapes/others/green-square.svg';
import Demo1 from '../../../assets/Images/who-we-are/demo1.jpg';
import Demo2 from '../../../assets/Images/who-we-are/demo2.jpg';
import Demo3 from '../../../assets/Images/who-we-are/demo3.jpg';
import Demo4 from '../../../assets/Images/who-we-are/demo4.jpg';


export default function WhyDoIt() {
    return (
        <div id="whywedo" className="section who-whydoit">
            <div className="container">
                <h1 className="block-title">Pourquoi nous le faisons ?</h1>
            </div>
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-4 offset-lg-2">
                        <div className="whydo-image-box top-rounded">
                            <img src={Demo1} alt="demo" className="top-rounded" />
                        </div>
                        <img src={OrangeMiniImage} alt="mini orange" className="bottom-left" />
                    </div>
                    <div className="col-lg-4">
                        <div className="whydo-text-box">
                            <h4 className="text-orange">Rendre les technologies accessibles et disponibles à tous</h4>
                            <p>Les technologies IT d’aujourd’hui et de demain peuvent être un véritable support au quotidien.</p>
                        </div>
                        <img src={OrangeRoundedImage} alt="rounded orange" className="bottom-right" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-4">
                        <div className="whydo-image-box">
                            <img src={Demo2} alt="demo" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="whydo-text-box top-rounded bottom-rounded">
                            <h4 className="text-green">Projet IT sur mesure</h4>
                            <p>Dans un monde où la technologie déconnecte de plus en plus les gens, nous avons à cœur de l’utiliser pour qu’elle puisse être bénéfique et performante pour chaque entreprise. Nous coconstruisons ensemble un projet IT sur mesure en lien avec vos usages du quotidien.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="whydo-image-box">
                            <img src={Demo3} alt="demo" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 offset-lg-2">
                        <img src={GreenSquareImage} alt="green square" className="green-bottom-left" />
                        <div className="whydo-text-box bottom-rounded">
                            <h4 className="text-darkblue">Efisens votre partenaire</h4>
                            <p>Parce que chez Efisens, nous nous positionnons comme partenaire privilégié à vos cotés et à chaque étape de la vie de votre système d’information.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="whydo-image-box bottom-rounded">
                            <img src={Demo4} alt="demo" className="bottom-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}