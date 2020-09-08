import React from 'react'
import BannerImage from '../../assets/home/images/1.png';
import {Image} from "react-dom";

export default function Banner() {
    return (
        <div className="jumbotron bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 center-align">
                        <div>
                            <h1 className="banner-title">Décomplexer <br/>l’informatique</h1>
                            <p className="banner-description mt-4 mb-4">Co-construire votre écosystème IT avec des solutions accessibles et sur mesure, en lien avec vos usages du quotidien.</p>
                            <button className="btn btn-danger btn-custom">Contactez-nous</button>
                        </div>
                    </div>
                    <div className="col-md-6 center-align">
                        <img src={BannerImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}
