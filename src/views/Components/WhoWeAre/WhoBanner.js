import React from 'react';

import LeftTopImage from '../../../assets/Images/who-we-are/banner-left-background.svg';
import RightTopImage from '../../../assets/Images/who-we-are/banner-right-background.svg';
import { useHistory } from 'react-router-dom';



export default function WhoBanner() {
    const history = useHistory()
    const gotoSection = (sectionId) => {
        history.push(`/who-we-are/#${sectionId}`)
    }

    return (
        <div className="section who-banner">
            <img src={LeftTopImage} className='top-left' alt="Left Background" />
            <img src={RightTopImage} className='top-right' alt="Right Background" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-darkblue text-center">
                        <h2>
                            Nous agrégeons les meilleurs technologies IT
                            pour qu’elles puissent vous être bénéfiques
                            au quotidien.
                        </h2>
                        <h5>
                            Imaginez votre système d’information de demain :<br />
                            Nous vous proposons des technologies évolutives au fil du temps et des usages
                        </h5>
                        <div className="d-flex who-banner-button-container justify-content-center">
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-custom gradient-btn" onClick={() => gotoSection(`history`)}><span>Notre histoire</span></button>
                                <button className="btn btn-custom btn-gray" onClick={() => gotoSection(`group`)}>Notre groupe</button>
                            </div>
                            <button className="btn btn-custom btn-gray" onClick={() => gotoSection(`approach`)}>Approche technologique</button>
                        </div>
                        <div className="d-flex who-banner-button-container justify-content-center">
                            <button className="btn btn-custom btn-gray" onClick={() => gotoSection(`whywedo`)}>Pourquoi nous le faisons</button>
                            <button className="btn btn-custom btn-gray" onClick={() => gotoSection(`talents`)}>Talents & Technologies</button>
                            <button className="btn btn-custom btn-gray" onClick={() => gotoSection(`words`)}>Quelques mots sur Efisens</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}