import React from 'react'

// images
import LogoBPI from "../../../assets/Images/home/bpi@3x.png"
import LogoAssiatance from "../../../assets/Images/home/assistance@3x.png"
import LogoAstorg from "../../../assets/Images/home/astorg@3x.png"
import LogoEmil from "../../../assets/Images/home/emil-frey-france@3x.png"
import LogoEchosens from "../../../assets/Images/home/echosens@3x.png"
import { Image } from '../Elements/CustomImages';


export default function TrustUs(props) {
    return (
        <div className={props.className ? `section trust-block ${props.className}` : "section trust-block"}>
            <div className="container">
                <h3 className="text-center text-darkblue mb-5">Ils nous font confiance</h3>
                <div className="row d-flex justify-content-around mb-5">
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <Image src={LogoBPI} className="align-self-center w-100" alt="Logo BPI" maxWidth={162} />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <Image src={LogoEmil} className="align-self-center w-100" alt="Logo Emil" maxWidth={87} />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <Image src={LogoAssiatance} className="align-self-center w-100" alt="Logo Assistance" maxWidth={90} />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <Image src={LogoAstorg} className="align-self-center w-100" alt="Logo Astorg" maxWidth={164} />
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex justify-content-center mb-4">
                        <Image src={LogoEchosens} className="align-self-center w-100" alt="Logo Echosens" maxWidth={188} />
                    </div>
                </div>
            </div>
        </div>
    )
}
