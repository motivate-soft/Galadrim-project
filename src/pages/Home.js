import React from 'react'

import '../styles/home.scss';

import Header from '../components/header';
import Banner from '../components/home/banner';
import Expertise from "../components/home/expertise";
import Trust from "../components/home/trust";
import Talk from "../components/home/talks";


//components
export default function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Expertise/>
            <Trust/>
            <Talk/>
        </div>
    );
}