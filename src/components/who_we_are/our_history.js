import React from 'react';

import RocketImage from '../../assets/who_we_are/rocket.svg'

export default function OurHistory() {
    return (
        <div className={'our_history'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <h1>
                            Notre histoire
                        </h1>
                    </div>
                    <div className={'col-lg-12'}>
                        <div className={'time-line-area'}>
                            <div className={'row'}>
                               <div className={'col-lg-6 y-2007'}>
                                   <div className={'flag-content'}>
                                       <div className={'flag'}/>
                                   </div>
                                   <h3>Fondation</h3>
                                   <p>
                                       Rachat de Business ASI historiquement dédiée à la revente d’équipements informatiques.
                                   </p>
                                   <span className={'badge'}>
                                       2007
                                   </span>
                               </div>
                                <div className={'col-lg-6 y-2016'}>
                                    <div className={'flag-content'}>
                                        <div className={'flag'}/>
                                    </div>
                                    <h3>Expansion</h3>
                                    <p>
                                        Création EFILEASE filiale spécialisée dans le financement d'actifs
                                    </p>
                                    <span className={'badge'}>
                                       2016
                                   </span>
                                    <img src={RocketImage} className={'rocket'} alt=""/>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-lg-3'}>

                                </div>
                                <div className={'col-lg-5 y-2015'}>
                                    <div className={'flag-content'}>
                                        <div className={'flag'}/>
                                    </div>
                                    <h3>Croissance</h3>
                                    <p>
                                        Efisens double son effectif grâce au rachat de Net Open Service et A2Z. De cette fusion naît Efisens. 2015 marque un virage important pour nous en évoluant vers les services managés. Création de notre centre de services au Maroc.
                                    </p>
                                    <span className={'badge'}>
                                       2015
                                   </span>
                                </div>
                                <div className={'col-lg-4 y-2019'}>
                                    <div className={'flag-content'}>
                                        <div className={'flag'}/>
                                    </div>
                                    <h3>Notre concept de pointe :<br/> le cloud hybride </h3>
                                    <p>
                                        Un repositionnement bien pensé avec le développement de notre centre d'expertises et innovation. Création de NextGen consulting filiale spécialisée dans le conseil et l'accompagnement à la transformation digitale & technologies Cloud​.
                                    </p>
                                    <span className={'badge'}>
                                       2019
                                   </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}