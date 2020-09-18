import React from 'react';
import AvatarImage from '../../assets/who_we_are/boss.jpg';
import QuoteImage from '../../assets/who_we_are/quote.svg';

export default function OurGroup() {
    return (
        <div className={'our_group'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-12 text-center'}>
                        <h1>Notre groupe</h1>
                        <div className={'card card-body'}>
                            <div className={'row'}>
                                <div className={'avatar col-lg-2'}>
                                    <div>
                                        <div className={'image-area'}>
                                            <img src={QuoteImage} className={'right-top-image'} alt=""/>
                                            <div className={'image-box'} style={{width: '100px'}}>
                                                <img src={AvatarImage} alt=""/>
                                            </div>
                                        </div>
                                        <h4>Édouard Soudée</h4>
                                        <p>CEO</p>
                                    </div>
                                </div>
                                <div className={'card-description col-lg-10'}>
                                    <h5>C’est une histoire d’entrepreneuriat, une histoire d’Hommes, une histoire d’ambition, une histoire de grandir ensemble.</h5>
                                </div>
                            </div>
                        </div>
                        <div className={'gradient-box'}>
                            <h3>
                                Nous sommes un managed service provider (MSP) ce qui selon notre définition consiste à être un agrégateur de technologies et de talents.
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}