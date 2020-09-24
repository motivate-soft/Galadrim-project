import React from 'react'
import Demo from "../../../assets/Images/demo.jpg"
import RightBottomImage from "../../../assets/Images/charts/security.svg"



export default function PartnerFeatures() {
    return (
        <div className="section partner-contact-block">
            <div className="container ">
                <h3 className="text-darkblue mx-auto">C'est au contact d'experts techniques, de leaders technologiques et de partenaires stratégiques que nous innovons ! </h3>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="partner-image-box">
                            <img src={Demo} alt="Partner" className="partner" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex">
                        <div className="partner-text-box-wrapper">
                            <div className="partner-text-box">
                                <p className="text-darkblue">Afin d’apporter le meilleur service à nos clients, nous travaillons en étroite collaboration avec un écosystème de plus d’une dizaine de partenaires qui  nous accompagne et renforce notre offre d'expertises et de solutions technologiques.</p>
                            </div>
                            <img src={RightBottomImage} alt="Background" className="bottom-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
