import React from 'react'
import Demo from "../../../assets/Images/demo.jpg"
import RightBottomImage from "../../../assets/Images/charts/security.svg"



export default function PartnerFeatures() {
    return (
        <div className="section partner-contact-block">
            <div className="container ">
                <h3 className="text-darkblue mx-auto">C'est au contact d'experts techniques, de leaders technologiques et de partenaires stratégiques que nous innovons ! </h3>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex partner-image-container">
                        <img src={Demo} alt="Partner" className="partner-img" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 partner-text-container">
                        <div className="position-relative partner-text">
                            <p className="text-darkblue">Afin d’apporter le meilleur service à nos clients, nous travaillons en étroite collaboration avec un écosystème de plus d’une dizaine de partenaires qui  nous accompagne et renforce notre offre d'expertises et de solutions technologiques.</p>
                            <img src={RightBottomImage} alt="Background" className="bottom-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
