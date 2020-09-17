import React from 'react'
import BannerImage from '../../assets/home/images/1.png';

export default function Banner() {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 center-align">
                        <div>
                            <h1 className="banner-title">Décomplexer
                                les nouvelles
                                technologies</h1>
                            <div className="pick-item mb-3">
                                <div className="bg-blue" style={{'marginLeft': '-50px'}}/>
                            </div>
                            <p className="banner-description">Co-construire votre écosystème IT avec des solutions accessibles et sur mesure, en lien avec vos usages du quotidien.</p>
                            <button className="btn btn-danger btn-custom">Contactez-nous</button>
                        </div>
                    </div>

                    <div className="col-md-6 center-align">
                        <img src={BannerImage} alt="Efsens banner" />
                    </div>
                </div>
            </div>
        </div>
    );
}
