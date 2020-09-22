import React from 'react'
import styled from 'styled-components'

import RightBottomImage from '../../../assets/Images/charts/cloud.svg';
import LeftBottomImage from '../../../assets/Images/charts/modern-workplace.svg';


export default function PartnershipBanner() {
    return (
        <div className="section partnership-banner">
            <img src={LeftBottomImage} alt="Left Banner Background" className="bottom-left" />
            <img src={RightBottomImage} alt="Right Banner Background" className="bottom-right" />
            <div className="container">
                <h2 className="text-white text-center d-block">Notre écosystème Efisens</h2>
                <p className="text-white text-center d-block mx-auto">Accélérer l'innovation grâce à un écosystème de partenaires riche par sa diversité. Nous croyons en la puissance de partenariats technologiques solides. C'est pourquoi nous engageons, contribuons et soutenons si fortement notre communauté de partenaires !</p>
            </div>
        </div>
    )
}
