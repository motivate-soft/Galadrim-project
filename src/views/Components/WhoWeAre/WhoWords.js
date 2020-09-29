import React from 'react'
import AvatarImage from '../../../assets/Images/who-we-are/ceo.jpg';
import QuoteImage from '../../../assets/Images/who-we-are/quote.svg';
import { LeftRoundedSemiCircle } from './../Elements/Drawings';


export default function WhoWords() {
    return (
        <div id="words" className="section who-words">
            <LeftRoundedSemiCircle width={60} height={120} className="top-right transform-top-50" />
            <div className="container">
                <h1 className="block-title">Quelques mots sur Efisens</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-5 offset-lg-1">
                        <div className="hero-card">
                            <div className="hero-avatar-container">
                                <div className="hero-avatar position-relative">
                                    <img src={AvatarImage} alt="CEO" className="w-100 rounded" />
                                    <img src={QuoteImage} alt="Quote" className="top-right" />
                                </div>
                                <h6>Édouard Soudée</h6>
                                <span>CEO</span>
                            </div>
                            <p>Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5">
                        <div className="hero-card">
                            <div className="hero-avatar-container">
                                <div className="hero-avatar position-relative">
                                    <img src={AvatarImage} alt="CEO" className="w-100 rounded" />
                                    <img src={QuoteImage} alt="Quote" className="top-right" />
                                </div>
                                <h6>Édouard Soudée</h6>
                                <span>CEO</span>
                            </div>
                            <p>Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant. Le mot de du dirigeant.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
