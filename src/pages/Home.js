import React from 'react'

import '../styles/home.scss';

import Header from '../components/header';
import Banner from '../components/home/banner';


//components
export default function Home() {
    return (
        <>
            <Header/>
            <Banner/>
        </>
    );
}