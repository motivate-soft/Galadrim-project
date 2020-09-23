import React from 'react'
import PartnershipBanner from './../Components/PartnerShip/PartnershipBanner';
import PartnerFeatures from '../Components/PartnerShip/PartnerFeatures';
import OurPartner from './../Components/PartnerShip/OurPartner';
import FooterBanner from './../Components/Common/FooterBanner';


const footerBannerTitle = "Votre partenaire technologique ... avec vous et pour longtemps "


export default function PartnerShip() {
    return (
        <>
            <PartnershipBanner />
            <PartnerFeatures />
            <OurPartner/>
            <FooterBanner color="orange" title={footerBannerTitle} />
        </>
    )
}
