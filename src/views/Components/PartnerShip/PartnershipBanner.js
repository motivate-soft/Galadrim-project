import React from 'react'
import styled from 'styled-components'

import RightBottomImage from '../../../assets/Images/charts/cloud.svg';
import LeftBottomImage from '../../../assets/Images/charts/modern-workplace.svg';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 350px;
    background-color: #001A5C;
    background-image: url(${LeftBottomImage}), url(${RightBottomImage});
    background-repeat: no-repeat;
    background-position: left bottom, right bottom;
    background-size: 288px 240px, 288px 240px;
    h2 {
        max-width: 550px;
    }
    p {
        max-width: 575px;
    }
`

export default function PartnershipBanner() {
    return (
        <Section>
            <h2 className="text-white text-center d-block mt-auto mx-auto mb-4">Notre écosystème Efisens</h2>
            <p className="text-white text-center d-block mb-auto mx-auto">Accélérer l'innovation grâce à un écosystème de partenaires riche par sa diversité. Nous croyons en la puissance de partenariats technologiques solides. C'est pourquoi nous engageons, contribuons et soutenons si fortement notre communauté de partenaires !</p>
        </Section>
    )
}
