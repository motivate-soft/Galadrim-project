import React from 'react';
import Footer from "../components/footer";
import FullScreenNav from "../components/global/full_screen_nav";
import Header from "../components/header";
import '../styles/partner_ship.scss';
import PartnerBanner from "../components/partner_ship/banner";
import InNews from "../components/partner_ship/in_news";
import OurPartners from "../components/partner_ship/our_partners";
import PartnerContactUs from "../components/partner_ship/contact_us";

export default function PartnerShip() {
    return(
        <>
            <FullScreenNav/>
            <Header/>
            <PartnerBanner/>
            <InNews/>
            <OurPartners/>
            <PartnerContactUs/>
            <Footer/>
        </>
    );
}