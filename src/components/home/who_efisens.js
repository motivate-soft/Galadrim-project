import React from 'react';

import QuoteImage from '../../assets/who_we_are/quote.svg';
import UserImage from '../../assets/who_we_are/boss.jpg';


export default function WhoEfisens() {
    return (
        <div className={'who_efisens'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <h1>Quelques mots sur Efisens</h1>
                    </div>
                    <div className={'col-lg-5'}>
                        <div className={'card card-body'}>
                            <div className={'avatar-content'}>
                                <div className={'image-box'}>
                                    <img src={UserImage} className={'avatar-image'} alt=""/>
                                </div>
                                <img src={QuoteImage} className={'quote'} alt=""/>
                            </div>
                            <h3>Édouard Soudée</h3>
                            <h5>CEO</h5>
                            <p>
                                Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant.
                            </p>
                        </div>
                    </div>
                    <div className={'col-lg-5'}>
                        <div className={'card card-body'}>
                            <div className={'avatar-content'}>
                                <div className={'image-box'}>
                                    <img src={UserImage} className={'avatar-image'} alt=""/>
                                </div>
                                <img src={QuoteImage} className={'quote'} alt=""/>
                            </div>
                            <h3>Édouard Soudée</h3>
                            <h5>CEO</h5>
                            <p>
                                Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}