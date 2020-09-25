import React from 'react';

import AppNavbar from './Navbar/AppNavbar';
import TopNavbar from './Navbar/TopNavbar';
import ScrollHandler from './ScrollHandler';



export default function Header() {
    return (
        <>
            <ScrollHandler />
            <TopNavbar />
            <AppNavbar />
        </>
    );
}

