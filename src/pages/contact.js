import React from 'react';
import '../styles/contact.scss';
import FullScreenNav from "../components/global/full_screen_nav";
import Header from "../components/header";
import Footer from "../components/footer";
import ContactBanner from "../components/contact/contact_banner";
import ContactBrand from "../components/contact/contact_brands";
import ContactArticles from "../components/contact/contact_articles";

export default function Contact() {
    return(
        <>
            <FullScreenNav/>
            <Header/>
            <ContactBanner/>
            <div className={'spacer-177'}/>
            <ContactBrand/>
            <ContactArticles/>
            <Footer/>
        </>
    );
}