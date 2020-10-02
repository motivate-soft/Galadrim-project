import React from 'react'
import LeftTopImage from '../../../assets/Images/charts/security.svg'
import RightBottomImage from '../../../assets/Images/charts/security.svg'


export default function Features() {
    return (
        <div className="section who-feature-block">
            <img src={LeftTopImage} alt="left background" className="top-left" />
            <img src={RightBottomImage} alt="right background" className="bottom-right" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 my-4">
                        <div className="feature-card">
                            <h1>95</h1>
                            <p>Colaborateurs</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-4">
                        <div className="feature-card">
                            <h1>25M€</h1>
                            <p>Chiffre d'affaire<br /> consolidé</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-4">
                        <div className="feature-card">
                            <h1>+150</h1>
                            <p>Clients sous<br /> contrats</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 my-4">
                        <div className="feature-card">
                            <h1>+30</h1>
                            <p>Collaborateurs certifiés<br /> Microsoft Cloud</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
