import React from 'react'

// images
import LogoBPI from "../../../assets/Images/home/bpi@3x.png"
import LogoAssiatance from "../../../assets/Images/home/assistance@3x.png"
import LogoAstorg from "../../../assets/Images/home/astorg@3x.png"
import LogoEmil from "../../../assets/Images/home/emil-frey-france@3x.png"
import LogoEchosens from "../../../assets/Images/home/echosens@3x.png"

export default function TrustUs(props) {
    return (
        <div className={props.className ? `section trust-block ${props.className}` : "section trust-block"}>
            <div className="container">
                <h3 className="text-center text-darkblue mb-5">Ils nous font confiance</h3>
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <img src={LogoBPI} className="logo-bpi" alt="Logo BPI" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <img src={LogoEmil} className="logo-emil" alt="Logo Emil" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <img src={LogoAssiatance} className="logo-assistance" alt="Logo Assistance" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <img src={LogoAstorg} className="logo-astorg" alt="Logo Astorg" />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <img src={LogoEchosens} className="logo-ehosens" alt="Logo Echosens" />
                    </div>
                </div>
            </div>
        </div>
    )
}
