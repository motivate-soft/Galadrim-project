import React from 'react';
import '../styles/click_shopping.scss';
import Footer from "../components/footer";
import FullScreenNav from "../components/global/full_screen_nav";
import Header from "../components/header";
import ShopBanner from "../components/click_shopping/shop_banner";


export default function ClickShopping() {
    return(
        <>
            <FullScreenNav/>
            <Header/>
            <ShopBanner/>
            <Footer/>
        </>
    );
}