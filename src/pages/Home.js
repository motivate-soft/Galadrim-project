import React from 'react'

import '../styles/home.scss';

import Header from '../components/header';
import Banner from '../components/home/banner';
import Expertise from "../components/home/expertise";
import Trust from "../components/home/trust";
import Talk from "../components/home/talks";
import Experience from "../components/home/experience";
import ClickShop from "../components/home/click_shop";
import ReadyForFuture from "../components/home/ready_for_future";
import Partner from "../components/home/partner";
import Footer from "../components/footer";


//components
export default function Home() {
    return (
        <div>
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
        </div>
    );
}