import React from 'react';
import '../styles/who_we_are.scss';
import FullScreenNav from "../components/global/full_screen_nav";
import Header from "../components/header";
import Footer from "../components/footer";
import WhoBanner from "../components/who_we_are/banner";
import OurHistory from "../components/who_we_are/our_history";
import OurGroup from "../components/who_we_are/our_group";
import RightImage from "../components/who_we_are/right_image";
import LetterCard from "../components/who_we_are/letter_card";
import WhoApproach from "../components/who_we_are/who_approach";
import WhyDoIt from "../components/who_we_are/why_do_it";
import TalentsTechnologies from "../components/who_we_are/talents_technologies";
import WhoBrand from "../components/who_we_are/who_brands";
import WhoEfisens from "../components/home/who_efisens";
import WhoAction from "../components/who_we_are/who_action";

export default function WhoWeAre() {
    return(
        <>
            <FullScreenNav/>
            <Header/>
            <WhoBanner/>
            <OurHistory/>
            <OurGroup/>
            <RightImage/>
            <LetterCard/>
            <WhoApproach/>
            <WhyDoIt/>
            <TalentsTechnologies/>
            <WhoBrand/>
            <WhoEfisens/>
            <WhoAction/>
            <Footer/>
        </>
    );
}