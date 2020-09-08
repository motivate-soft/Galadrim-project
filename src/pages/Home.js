import React from 'react'

import '../styles/home.scss';

import Header from '../components/header';
import Banner from '../components/home/banner';
import Expertise from "../components/home/expertise";


//components
export default function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Expertise/>
        </div>
    );
}