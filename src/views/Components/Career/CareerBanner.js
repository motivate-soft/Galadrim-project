import React from 'react'

import RightBottomImage from '../../../assets/Images/charts/cloud.svg';
import LeftBottomImage from '../../../assets/Images/charts/modern-workplace.svg';


export default function CareerBanner() {
    return (
        <div className="section career-banner">
            <img src={LeftBottomImage} alt="Left Banner Background" className="bottom-left" />
            {/* <img src={RightBottomImage} alt="Right Banner Background" className="bottom-right" /> */}
            <div className="container">
                <h3 className="block-title-sm text-white">Rejoignez l'aventure Efisens </h3>
                <h5 className="block-subtitle text-white">Êtes-vous prêt à construire l’avenir avec nous ?</h5>
            </div>
        </div>
    )
}
