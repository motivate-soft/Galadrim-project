import React from 'react'
import PartnershipBanner from './../Components/PartnerShip/PartnershipBanner';
import OurPartner from './../Components/PartnerShip/OurPartner';
import FooterBanner from './../Components/Common/FooterBanner';
import PartnerService from './../Components/PartnerShip/PartnerService';


const footerBannerTitle = "Votre partenaire technologique ... avec vous et pour longtemps "


export default function PartnerShip() {
    return (
        <>
            <PartnershipBanner />
            <PartnerService />
            <OurPartner />
            <FooterBanner color="orange" title={footerBannerTitle} />
        </>
    )
}
