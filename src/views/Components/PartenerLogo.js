import React from 'react'
import { Container } from 'react-bootstrap'

// images
import LogoBPI from "../../assets/Logo/PartnerLogos/bpi@3x.png"
import LogoAssiatance from "../../assets/Logo/PartnerLogos/assistance@3x.png"
import LogoAstorg from "../../assets/Logo/PartnerLogos/astorg@3x.png"
import LogoEmil from "../../assets/Logo/PartnerLogos/emil-frey-france@3x.png"
import LogoEchosens from "../../assets/Logo/PartnerLogos/logo-echosens-gradient@3x.png"
import { Image } from './Elements/CustomImages';


export default function PartenerLogo() {
    return (
        <Container className="partner-logo-block my-5">
            <h3 className="text-center text-blue mb-5">Ils nous font confiance</h3>
            <div className="row d-flex justify-content-around my-4">
                <div className="col-lg-2 col-sm-6 col-12 d-flex justify-content-center mb-4">
                    <Image src={LogoBPI} className="align-self-center" alt="Logo BPI" maxWidth={161}/>
                </div>
                <div className="col-lg-2 col-sm-6 col-12 d-flex justify-content-center mb-4">
                    <Image src={LogoEmil} className="align-self-center" alt="Logo Emil" maxWidth={87}/>
                </div>
                <div className="col-lg-2 col-sm-6 col-12 d-flex justify-content-center mb-4">
                    <Image src={LogoAssiatance} className="align-self-center" alt="Logo Assistance" maxWidth={90}/>
                </div>
                <div className="col-lg-2 col-sm-6 col-12 d-flex justify-content-center mb-4">
                    <Image src={LogoAstorg} className="align-self-center" alt="Logo Astorg" maxWidth={165}/>
                </div>
                <div className="col-lg-2 col-sm-6 col-12 d-flex justify-content-center mb-4">
                    <Image src={LogoEchosens} className="align-self-center" alt="Logo Echosens" maxWidth={175}/>
                </div>
            </div>
        </Container>
    )
}
