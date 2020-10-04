import React from 'react'
import CategoryBanner from '../../Components/Lab/CategoryBanner';
import EfilabTopNavbar from '../../Components/Lab/EfilabTopNavbar';
import ArticlesContainer from '../../Components/Lab/ArticlesContainer';
import Follow from '../../Components/Lab/Follow';
import FooterBanner from '../../Components/Common/FooterBanner';


const footerBannerText = "Votre partenaire technologique ... avec vous et pour longtemps "

export default function EfilabCategory() {
    return (
        <>
            <EfilabTopNavbar />
            <CategoryBanner />
            <ArticlesContainer />
            <Follow />
            <FooterBanner color="orange" title={footerBannerText} />
        </>
    )
}
