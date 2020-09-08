import React from 'react'

import Header from '../components/layout/header';
import Banner from '../components/banner';
import TitleBar from '../components/titlebar';

import '../styles/home.scss';

//components
export default function Home() {
    return (
        <>
            <Header/>
            <Banner/>
            <TitleBar/>
        </>
    );
}