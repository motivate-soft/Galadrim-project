import React from 'react'

//components
import Talents from '../Components/Talents';
import TrustUs from '../Components/Common/TrustUs';
import EfisensTalk from '../Components/Common/EfisensTalk';
import EfisensShop from './../Components/Common/EfisensShop';
import HomeBanner from './../Components/Home/HomeBanner';
import Expertise from '../Components/Home/Expertise';
import EfisensLab from '../Components/Common/EfisensLab';
import FooterBanner from './../Components/Common/FooterBanner';

const footerBannerTitle = "Votre partenaire informatique de tous les jours"

export default function Home() {
    return (
        <>
            <HomeBanner />
            <Expertise />
            <TrustUs className="home-trust-block"/>
            <EfisensTalk />
            <EfisensLab />
            <EfisensShop />
            <Talents />
            <FooterBanner title={footerBannerTitle} color='#ff5e4d'/>
        </>
    )
}
