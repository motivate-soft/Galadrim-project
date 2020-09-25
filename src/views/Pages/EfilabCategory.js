import React from 'react'
import BannerTitleImage from '../../assets/Images/expertise/cloud/cloud-banner-logo.svg'
import BannerTitleMobileImage from '../../assets/Images/expertise/cloud/cloud-banner-logo.svg'
import CategoryBanner from './../Components/Lab/CategoryBanner';
import EfilabTopNavbar from './../Components/Lab/EfilabTopNavbar';
import ArticlesContainer from '../Components/Lab/ArticlesContainer';

const titleImage = {
    imgLg: BannerTitleImage,
    imgSm: BannerTitleMobileImage
}

export default function EfilabCategory() {
    return (
        <>
            <EfilabTopNavbar />
            <CategoryBanner titleImage={titleImage} />
            <ArticlesContainer />
        </>
    )
}
