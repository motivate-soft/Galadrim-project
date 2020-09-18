import React from 'react';

import Image from '../../assets/who_we_are/discuss.jpg';

export default function WhyDoIt() {
    return (
        <div className={'why_do_it'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <h1>Pourquoi nous le faisons ?</h1>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-2'}>

                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'image-content'} style={{backgroundImage: 'url('+ Image +')'}} />
                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'card card-body'}>
                            <h3 className={'text-danger'}>Rendre les technologies accessibles et disponibles à tous</h3>
                            <p className={'text-primary'}>Les technologies IT d’aujourd’hui et de demain peuvent être un véritable support au quotidien.</p>
                        </div>
                    </div>
                    <div className={'col-lg-2'}>

                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row middle-content'}>
                    <div className={'col-lg-4'}>
                        <div className={'image-content'} style={{backgroundImage: 'url('+ Image +')'}} />
                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'card card-body'}>
                            <h3 className={'text-success'}>Projet IT sur mesure</h3>
                            <p className={'text-primary'}>Dans un monde où la technologie déconnecte de plus en plus les gens, nous avons à cœur de l’utiliser pour qu’elle puisse être bénéfique et performante pour chaque entreprise. Nous coconstruisons ensemble un projet IT sur mesure en lien avec vos usages du quotidien.</p>
                        </div>
                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'image-content'} style={{backgroundImage: 'url('+ Image +')'}} />
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-2'}>

                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'card card-body'}>
                            <h3 className={'text-primary'}>Efisens votre partenaire</h3>
                            <p className={'text-primary'}>Parce que chez Efisens, nous nous positionnons comme partenaire privilégié à vos cotés et à chaque étape de la vie de votre système d’information.</p>
                        </div>
                    </div>
                    <div className={'col-lg-4'}>
                        <div className={'image-content'} style={{backgroundImage: 'url('+ Image +')'}} />
                    </div>
                    <div className={'col-lg-2'}>

                    </div>
                </div>
            </div>
        </div>
    );
}