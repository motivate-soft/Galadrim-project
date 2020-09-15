import React from 'react'
import styled from 'styled-components'
import PartnershipBanner from './../Components/PartnerShip/PartnershipBanner';
import PartnerFeatures from '../Components/PartnerShip/PartnerFeatures';
import OurPartner from './../Components/PartnerShip/OurPartner';
import FooterBanner from './../Components/Common/FooterBanner';



import MicrosoftImage from '../../assets/Images/expertise/modern-workplace/microsoft@3x.png';
import MicrosoftTeamsImage from '../../assets/Images/expertise/modern-workplace/microsoft-teams@3x.png';
import CXImage from '../../assets/Images/expertise/modern-workplace/3-cx-logo-svg@3x.png';
import ColtImage from '../../assets/Images/expertise/modern-workplace/colt-logo-svg@3x.png';
import DellImage from '../../assets/Images/expertise/modern-workplace/dell-logo@3x.png';
import HpImage from '../../assets/Images/expertise/modern-workplace/hp-logo@3x.png';
import OrangeImage from '../../assets/Images/expertise/modern-workplace/orange-logo@3x.png';
import PolyImage from '../../assets/Images/expertise/modern-workplace/poly-logo@3x.png';
import SfrImage from '../../assets/Images/expertise/modern-workplace/sfr-logo@3x.png';

const color = "#FF5E4D"

const logos = [
    {
        src: MicrosoftImage,
        alt: "Microsoft",
        maxWidth: 200,
    },
    {
        src: MicrosoftTeamsImage,
        alt: "MicrosoftTeamsImage",
        maxWidth: 110,
    },
    {
        src: CXImage,
        alt: "CXImage",
        maxWidth: 170,
    },
    {
        src: PolyImage,
        alt: "PolyImage",
        maxWidth: 150,
    },
    {
        src: DellImage,
        alt: "DellImage",
        maxWidth: 95,
    },
    {
        src: HpImage,
        alt: "HpImage",
        maxWidth: 90,
    },
    {
        src: SfrImage,
        alt: "SfrImage",
        maxWidth: 110,
    },
    {
        src: OrangeImage,
        alt: "OrangeImage",
        maxWidth: 110,
    },
    {
        src: ColtImage,
        alt: "ColtImage",
        maxWidth: 110,
    },
]

const footerBannerTitle = "Votre partenaire technologique ... avec vous et pour longtemps "

const Section = styled.div`
    margin: 0;
    
`

export default function PartnerShip() {
    return (
        <Section>
            <PartnershipBanner />
            <PartnerFeatures />
            <OurPartner logos={logos} />
            <FooterBanner color={color} title={footerBannerTitle} />
        </Section>
    )
}
