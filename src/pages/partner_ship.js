import React from 'react';
import Footer from "../components/footer";
import FullScreenNav from "../components/global/full_screen_nav";
import Header from "../components/header";
import '../styles/partner_ship.scss';
import PartnerBanner from "../components/partner_ship/banner";
import InNews from "../components/partner_ship/in_news";

export default function PartnerShip() {
    return(
        <>
            <FullScreenNav/>
            <Header/>
            <PartnerBanner/>
            <InNews/>
            <Footer/>
        </>
    );
}