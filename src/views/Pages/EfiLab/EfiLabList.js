import React from 'react'
import LabBanner from '../../Components/Lab/LabBanner';
import InNews from '../../Components/Lab/InNews';
import SearchArticle from '../../Components/Lab/SearchArticle';
import EfisensTalk from '../../Components/Lab/EfisensTalk';
import Follow from '../../Components/Lab/Follow';
import FooterBanner from '../../Components/Common/FooterBanner';
import EfilabTopNavbar from '../../Components/Lab/EfilabTopNavbar';

const footerBannerText = "Votre partenaire technologique ... avec vous et pour longtemps "

export default function EfiLabList() {
    return (
        <>
            <EfilabTopNavbar />
            <LabBanner />
            <InNews />
            <SearchArticle />
            <EfisensTalk />
            <Follow />
            <FooterBanner color="orange" title={footerBannerText} />
        </>
    )
}
