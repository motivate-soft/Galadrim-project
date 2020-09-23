import React from 'react'
import LabBanner from './../Components/Lab/LabBanner';
import InNews from '../Components/Lab/InNews';
import SearchArticle from './../Components/Lab/SearchArticle';
import EfisensTalk from '../Components/Lab/EfisensTalk';
import Follow from '../Components/Lab/Follow';
import FooterBanner from './../Components/Common/FooterBanner';

import { ReactComponent as InstagramIcon } from "../../assets/Icons/instagram.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/Icons/linkedin.svg"
import { ReactComponent as YoutubeIcon } from "../../assets/Icons/youtube.svg"

const footerBannerText = "Votre partenaire technologique ... avec vous et pour longtemps "

export default function EfiLabList() {
    return (
        <>
            <LabBanner />
            <InNews />
            <SearchArticle />
            <EfisensTalk />
            <Follow title="Suivez toute notre actualité #Efisenslife">
                <InstagramIcon />
                <LinkedinIcon />
                <YoutubeIcon />
            </Follow>
            <FooterBanner color="orange" title={footerBannerText} />
        </>
    )
}
