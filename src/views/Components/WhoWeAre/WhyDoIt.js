import React from 'react';

export default function WhyDoIt() {
    return (
        <div className="section why-do-it">
            <div className="container">
                <div className="row">
                    <h1 className="block-title">Pourquoi nous le faisons ?</h1>
                </div>
            </div>
            <div className="container">
                <div className="row tech-access-row">
                    <div className="col-sm-6 col-lg-4 mb-4 offset-lg-2 position-relative">
                        <div className="whydoit-card background">
                        </div>
                        {/* <img src={OrangeRoundedImage} alt="rounded orange" className="bottom-right" /> */}
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4 position-relative">
                        {/* <img src={OrangeMiniImage} alt="mini orange" className="bottom-left" /> */}
                        <div className="whydoit-card">
                            <h4 className="text-orange">Rendre les technologies accessibles et disponibles à tous</h4>
                            <p>Les technologies IT d’aujourd’hui et de demain peuvent être un véritable support au quotidien.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="whydoit-card background">
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="whydoit-card">
                            <h4 className="text-green">Projet IT sur mesure</h4>
                            <p>Dans un monde où la technologie déconnecte de plus en plus les gens, nous avons à cœur de l’utiliser pour qu’elle puisse être bénéfique et performante pour chaque entreprise. Nous coconstruisons ensemble un projet IT sur mesure en lien avec vos usages du quotidien.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="whydoit-card background">
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4 offset-lg-2 position-relative">
                        {/* <img src={GreenSquareImage} alt="green square" className="bottom-left transform-bottom-left" /> */}
                        <div className="whydoit-card">
                            <h4 className="text-darkblue">Efisens votre partenaire</h4>
                            <p>Parce que chez Efisens, nous nous positionnons comme partenaire privilégié à vos cotés et à chaque étape de la vie de votre système d’information.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="whydoit-card background">

                        </div>
                        {/* <img src={DiscussionImage} alt="demo" className="w-100 bottom-rounded" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}