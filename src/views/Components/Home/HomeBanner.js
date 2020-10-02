import React from 'react'
import HomeBannerImage from "../../../assets/Images/home/home-banner-image@3x.png"


const title = "Décomplexer \n les nouvelles \n technologies"
const text = "Co-construire votre écosystème IT avec des solutions accessibles et sur mesure, en lien avec vos usages du quotidien."

export default function HomeBanner() {
    return (
        <div className="section home-banner">
            <div className="container h-100 d-flex">
                <div className="row my-auto">
                    <div className="col-md-6 col-12">
                        <h1 className="banner-title-lg">{title}</h1>
                        <div className="underline" />
                        <p className="banner-text">{text}</p>
                        <button className="btn btn-custom btn-orange">Contactez-nous</button>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="banner-image" alt="home banner" src={HomeBannerImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}
