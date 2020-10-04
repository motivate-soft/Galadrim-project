import React from 'react'
import OurHistory from '../../Components/WhoWeAre/OurHistory';
import WhoBanner from '../../Components/WhoWeAre/WhoBanner'
import OurGroup from '../../Components/WhoWeAre/OurGroup';
import Features from '../../Components/WhoWeAre/Features';
import Approach from '../../Components/WhoWeAre/Approach';
import WhyDoIt from '../../Components/WhoWeAre/WhyDoIt';
import TalentsTechs from '../../Components/WhoWeAre/TalentsTechs';
import TrustUs from '../../Components/Common/TrustUs';
import WhoWords from '../../Components/WhoWeAre/WhoWords';
import FooterBanner from '../../Components/Common/FooterBanner';


const footerBannerTitle = "Votre partenaire technologique ... avec vous et pour longtemps"
export default function WhoWeAre() {
    return (
        <>
            <WhoBanner />
            <OurHistory />
            <OurGroup />
            <Features />
            <Approach />
            <WhyDoIt />
            <TalentsTechs />
            <TrustUs className="who-trust-block" />
            <WhoWords />
            <FooterBanner color={`orange`} title={footerBannerTitle} />
        </>
    )
}
