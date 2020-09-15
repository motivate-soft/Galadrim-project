import React from 'react'

//components
import Talents from '../Components/Talents';
import PartenerLogo from './../Components/PartenerLogo';
import EfisensTalk from '../Components/Common/EfisensTalk';
import EfisensShop from './../Components/EfisensShop';
import HomeBanner from './../Components/Home/HomeBanner';
import Expertise from '../Components/Home/Expertise';
import EfisensLab from './../Components/Home/EfisensLab';
import FooterBanner from './../Components/Common/FooterBanner';


export default function Home() {
    return (
        <>
            <HomeBanner />
            <Expertise />
            <PartenerLogo />
            <EfisensTalk />
            <EfisensLab />
            <EfisensShop />
            <Talents />
            <FooterBanner title="Votre partenaire informatique de tous les jours" />
        </>
    )
}
