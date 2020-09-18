import React from 'react';

import LeftTopImage from '../../assets/formes/charts/s-curit.svg'

export default function LetterCard() {
    return (
        <div className={'letter_card'}>
            <img src={LeftTopImage} className={'left-top-image'} alt=""/>
            <img src={LeftTopImage} className={'right-bottom-image'} alt=""/>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-3 col-md-6'}>
                        <div className={'card card-body'}>
                            <div>
                                <h1>95</h1>
                                <p>Colaborateurs</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-md-6'}>
                        <div className={'card card-body'}>
                            <div>
                                <h1>25M€</h1>
                                <p>Chiffre d'affaire<br/> consolidé</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-md-6'}>
                        <div className={'card card-body'}>
                            <div>
                                <h1>+150</h1>
                                <p>Clients sous<br/> contrats</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-3 col-md-6'}>
                        <div className={'card card-body'}>
                            <div>
                                <h1>+30</h1>
                                <p>Collaborateurs certifiés<br/> Microsoft Cloud</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}