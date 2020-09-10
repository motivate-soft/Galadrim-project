import React from 'react'

import '../styles/home.scss';

import Banner from '../components/home/banner';
import Expertise from "../components/home/expertise";
import Trust from "../components/home/trust";
import Talk from "../components/home/talks";
import Experience from "../components/home/experience";
import ClickShop from "../components/home/click_shop";
import ReadyForFuture from "../components/home/ready_for_future";
import Partner from "../components/home/partner";
import FullScreenNav from "../components/global/full_skin";
import Header from "../components/header";
import Footer from "../components/footer";


//components.scss
export default function Home() {
    return (
        <>
            <FullScreenNav/>
            <Header/>
            <Banner/>
            <Expertise/>
            <Trust/>
            <Talk/>
            <Experience/>
            <ClickShop/>
            <ReadyForFuture/>
            <Partner/>
            <Footer/>
        </>
    );
}