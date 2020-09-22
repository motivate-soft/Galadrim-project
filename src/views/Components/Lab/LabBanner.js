import React from 'react'

import RightBottomImage from '../../../assets/Images/charts/cloud.svg';
import LeftBottomImage from '../../../assets/Images/charts/modern-workplace.svg';


export default function LabBanner() {
    return (
        <div className="section lab-banner">
            <img src={LeftBottomImage} alt="Left Banner Background" className="bottom-left" />
            <img src={RightBottomImage} alt="Right Banner Background" className="bottom-right" />
            <div className="container">
                <h2 className="text-white text-center d-block">Découvrez tous nos articles et conseils d’experts pour accompagner l’ensemble de vos services dans votre transformation numérique</h2>
            </div>
        </div>
    )
}
